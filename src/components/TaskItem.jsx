import { useState } from 'react';

/**
 * TaskItem Component
 * 
 * Represents a single task item card, providing options to complete, edit (inline),
 * or delete the task.
 * 
 * @param {Object} props
 * @param {Object} props.task - The task object
 * @param {Function} props.onToggleComplete - Function to toggle complete status
 * @param {Function} props.onEditTask - Function to update the task title and/or priority
 * @param {Function} props.onDeleteTask - Function to delete the task
 */
export default function TaskItem({ task, onToggleComplete, onEditTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedPriority, setEditedPriority] = useState(task.priority || 'Medium');
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  // Handle Save during inline edit
  const handleSave = () => {
    if (!editedTitle.trim()) return;
    onEditTask(task.id, editedTitle.trim(), editedPriority);
    setIsEditing(false);
  };

  // Handle Cancel inline edit
  const handleCancel = () => {
    setEditedTitle(task.title);
    setEditedPriority(task.priority || 'Medium');
    setIsEditing(false);
  };

  // Determine priority color badge
  const getPriorityStyles = (p) => {
    switch (p) {
      case 'High':
        return 'bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30';
      case 'Medium':
        return 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30';
      case 'Low':
      default:
        return 'bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400 border border-sky-100 dark:border-sky-900/30';
    }
  };

  return (
    <div
      className={`group relative bg-white dark:bg-slate-900 border rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 ${
        task.completed
          ? 'border-slate-200/60 dark:border-slate-800/40 opacity-60'
          : 'border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left Side: Checkbox & Content */}
        <div className="flex items-start space-x-3.5 flex-grow">
          {/* Custom Checkbox Toggle */}
          <button
            onClick={() => onToggleComplete(task.id)}
            className={`mt-1 flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
              task.completed
                ? 'bg-emerald-500 border-emerald-500 text-white'
                : 'border-slate-300 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 bg-slate-50 dark:bg-slate-950'
            }`}
            aria-label={task.completed ? 'Mark task pending' : 'Mark task completed'}
          >
            {task.completed && (
              <svg className="w-4.5 h-4.5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>

          {/* Edit State or Display State */}
          {isEditing ? (
            <div className="flex-grow flex flex-col gap-2.5">
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                required
              />
              <div className="flex items-center gap-2">
                <select
                  value={editedPriority}
                  onChange={(e) => setEditedPriority(e.target.value)}
                  className="px-2 py-1 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-md text-slate-800 dark:text-slate-100 focus:outline-none cursor-pointer"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                <button
                  onClick={handleSave}
                  className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-md transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 text-xs font-bold rounded-md transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-grow min-w-0">
              {/* Task Title */}
              <p
                className={`text-slate-800 dark:text-slate-100 font-semibold break-words transition-all duration-300 ${
                  task.completed ? 'line-through text-slate-400 dark:text-slate-500' : ''
                }`}
              >
                {task.title}
              </p>

              {/* Sub-details (Timestamp & Priority Badge) */}
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {/* Priority Badge */}
                <span className={`px-2 py-0.5 rounded-full text-2xs sm:text-xs font-semibold ${getPriorityStyles(task.priority)}`}>
                  {task.priority || 'Medium'} Priority
                </span>

                {/* Separator Dot */}
                <span className="text-slate-300 dark:text-slate-700 text-2xs">&bull;</span>

                {/* Timestamp */}
                <span className="text-2xs sm:text-xs text-slate-400 dark:text-slate-500 flex items-center space-x-0.5">
                  <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{task.createdAt}</span>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Action Buttons */}
        {!isEditing && (
          <div className="flex items-center space-x-1 flex-shrink-0">
            {/* Inline Deletion Confirmation state */}
            {showConfirmDelete ? (
              <div className="flex items-center space-x-1.5 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 rounded-lg p-1">
                <span className="text-2xs text-rose-600 dark:text-rose-400 font-semibold px-1.5 hidden xs:inline">Confirm?</span>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="p-1 text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                  title="Yes, delete"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </button>
                <button
                  onClick={() => setShowConfirmDelete(false)}
                  className="p-1 text-rose-600 hover:text-rose-800 dark:text-rose-400 dark:hover:text-rose-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                  title="Cancel"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <>
                {/* Edit Button */}
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all duration-200"
                  title="Edit task"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>

                {/* Trigger Delete Button */}
                <button
                  onClick={() => setShowConfirmDelete(true)}
                  className="p-2 text-slate-400 hover:text-rose-600 dark:text-slate-500 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all duration-200"
                  title="Delete task"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
