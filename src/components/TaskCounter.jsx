

/**
 * TaskCounter Component
 * 
 * Displays key statistics about the tasks list: Total, Completed, and Pending.
 * 
 * @param {Object} props
 * @param {number} props.total - Total number of tasks
 * @param {number} props.completed - Number of completed tasks
 * @param {number} props.pending - Number of pending tasks
 */
export default function TaskCounter({ total, completed, pending }) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
      {/* Total Tasks Card */}
      <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-950/20 dark:to-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl p-3 sm:p-5 flex flex-col items-center sm:items-start justify-between shadow-sm transition-all duration-300">
        <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
          <svg className="w-5 h-5 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Total</span>
        </div>
        <span className="text-2xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mt-2">
          {total}
        </span>
      </div>

      {/* Completed Tasks Card */}
      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/20 dark:to-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 rounded-2xl p-3 sm:p-5 flex flex-col items-center sm:items-start justify-between shadow-sm transition-all duration-300">
        <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
          <svg className="w-5 h-5 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Completed</span>
        </div>
        <span className="text-2xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mt-2">
          {completed}
        </span>
      </div>

      {/* Pending Tasks Card */}
      <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/20 dark:to-amber-950/40 border border-amber-100 dark:border-amber-900/50 rounded-2xl p-3 sm:p-5 flex flex-col items-center sm:items-start justify-between shadow-sm transition-all duration-300">
        <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400">
          <svg className="w-5 h-5 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Pending</span>
        </div>
        <span className="text-2xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mt-2">
          {pending}
        </span>
      </div>
    </div>
  );
}
