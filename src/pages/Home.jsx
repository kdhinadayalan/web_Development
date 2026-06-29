import { useState } from 'react';
import TaskCounter from '../components/TaskCounter';
import TaskInput from '../components/TaskInput';
import SearchBar from '../components/SearchBar';
import FilterButtons from '../components/FilterButtons';
import TaskList from '../components/TaskList';

/**
 * Home Page (Task Dashboard)
 * 
 * Aggregates all task management UI widgets. Receives data states and interaction 
 * handlers from the top-level App component.
 * 
 * @param {Object} props
 * @param {Array} props.tasks - The complete tasks array
 * @param {string} props.searchText - The current search query
 * @param {Function} props.setSearchText - Setter for search query
 * @param {string} props.filterType - The current filter status type
 * @param {Function} props.setFilterType - Setter for filter status type
 * @param {Function} props.onAddTask - Handler to add a task
 * @param {Function} props.onToggleComplete - Handler to toggle task completed status
 * @param {Function} props.onEditTask - Handler to edit task title and priority
 * @param {Function} props.onDeleteTask - Handler to delete a task
 * @param {Function} props.onClearAllTasks - Handler to delete all tasks
 */
export default function Home({
  tasks,
  searchText,
  setSearchText,
  filterType,
  setFilterType,
  onAddTask,
  onToggleComplete,
  onEditTask,
  onDeleteTask,
  onClearAllTasks,
}) {
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // 1. Calculate stats (Derived State)
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  // 2. Search + Filter Logic combined
  const filteredTasks = tasks.filter((task) => {
    // Match search query (case-insensitive)
    const matchesSearch = task.title.toLowerCase().includes(searchText.toLowerCase());

    // Match status filter
    let matchesFilter = true;
    if (filterType === 'Completed') {
      matchesFilter = task.completed;
    } else if (filterType === 'Pending') {
      matchesFilter = !task.completed;
    }

    return matchesSearch && matchesFilter;
  });

  const handleClearAll = () => {
    onClearAllTasks();
    setShowClearConfirm(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Welcome Header */}
      <header className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
          Your Dashboard
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Stay organized and hit your daily goals!
        </p>
      </header>

      {/* Task Counter Widgets */}
      <TaskCounter
        total={totalTasks}
        completed={completedTasks}
        pending={pendingTasks}
      />

      {/* Add Task Input Form */}
      <TaskInput onAddTask={onAddTask} />

      {/* Controls Container (Search, Filters, & Actions) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm mb-6 transition-colors duration-300">
        <h3 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
          Filter & Search Tasks
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          <FilterButtons filterType={filterType} setFilterType={setFilterType} />
        </div>

        {/* Separator line when list isn't empty */}
        {filteredTasks.length > 0 && (
          <div className="border-t border-slate-100 dark:border-slate-800 my-4" />
        )}

        {/* Action button row (Clear All) */}
        {tasks.length > 0 && (
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-slate-400 dark:text-slate-500">
              Showing {filteredTasks.length} of {totalTasks} tasks
            </span>
            {showClearConfirm ? (
              <div className="flex items-center space-x-2">
                <span className="text-xs text-rose-600 dark:text-rose-400 font-semibold">
                  Delete all?
                </span>
                <button
                  onClick={handleClearAll}
                  className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Yes, Clear
                </button>
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowClearConfirm(true)}
                className="px-3 py-1.5 border border-rose-200 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 text-xs font-bold rounded-lg transition-all duration-200 flex items-center space-x-1"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Clear All Tasks</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Task List */}
      <TaskList
        tasks={filteredTasks}
        onToggleComplete={onToggleComplete}
        onEditTask={onEditTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}
