

/**
 * Footer Component
 * 
 * Renders a simple, clean, and modern copyright footer with responsive layout.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {currentYear} <span className="font-semibold text-slate-700 dark:text-slate-200">Daily Task Manager</span>. All rights reserved.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
          Built for learning React hooks, props, state, routing, and local storage.
        </p>
      </div>
    </footer>
  );
}
