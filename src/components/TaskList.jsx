import TaskItem from './TaskItem';

/**
 * TaskList Component
 * 
 * Renders a list of TaskItem components, or displays a beautiful empty state
 * message if the list is empty.
 * 
 * @param {Object} props
 * @param {Array} props.tasks - Array of task objects to display
 * @param {Function} props.onToggleComplete - Function to toggle complete status
 * @param {Function} props.onEditTask - Function to edit a task's details
 * @param {Function} props.onDeleteTask - Function to delete a task
 */
export default function TaskList({ tasks, onToggleComplete, onEditTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-white dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl transition-colors duration-300">
        {/* Beautiful Empty State Icon */}
        <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-950/30 rounded-full flex items-center justify-center text-indigo-500 mb-4 transition-colors">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-700 dark:text-slate-200 mb-1">
          No tasks found
        </h4>
        <p className="text-slate-400 dark:text-slate-500 text-sm max-w-sm">
          No tasks available. Add your first task or try adjusting your search/filter settings!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}
