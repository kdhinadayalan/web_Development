

/**
 * About Page
 * 
 * Explains the application's purpose, the tech stack utilized, features available,
 * and the educational React concepts covered.
 */
export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
          About Daily Task Manager
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Learn React.js fundamentals through a practical, hands-on application.
        </p>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Core Info Card */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm transition-colors duration-300">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              Project Purpose
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Daily Task Manager</strong> is a lightweight, responsive task organizer created to teach beginners core React concepts. It features local storage persistence, multi-criteria filtering, inline editing, and client-side routing.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
              By building or inspecting this application, developers learn how React components receive data via <code>props</code>, control interactive states via <code>useState</code>, and synchronize side-effects (like browser storage updates) via <code>useEffect</code>.
            </p>
          </div>

          {/* Features Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm transition-colors duration-300">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-slate-600 dark:text-slate-300">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Add Tasks:</strong> Validation-checked forms with auto-timestamping.</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Inline Editing:</strong> Rename task titles and adjust priority levels.</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Priority Levels:</strong> Low, Medium, or High options with tailored visual badges.</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Task Counters:</strong> Live status tallies for total, completed, and pending tasks.</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Search & Filter:</strong> Real-time title search integrated with status filter logic.</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Theme Toggle:</strong> Smooth light mode and dark mode layout styles.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Stack & Concepts Card */}
        <div className="space-y-6">
          {/* Tech Stack */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm transition-colors duration-300">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400 font-semibold text-xs rounded-lg border border-indigo-100/50 dark:border-indigo-900/30">React (JS)</span>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400 font-semibold text-xs rounded-lg border border-indigo-100/50 dark:border-indigo-900/30">Vite</span>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400 font-semibold text-xs rounded-lg border border-indigo-100/50 dark:border-indigo-900/30">Tailwind CSS</span>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400 font-semibold text-xs rounded-lg border border-indigo-100/50 dark:border-indigo-900/30">React Router</span>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400 font-semibold text-xs rounded-lg border border-indigo-100/50 dark:border-indigo-900/30">Local Storage</span>
            </div>
          </div>

          {/* Educational Concepts */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm transition-colors duration-300">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              React Concepts
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                <span>Functional Components</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                <span><code>useState</code> Hook</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                <span><code>useEffect</code> Hook</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                <span>Event Handling</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                <span>Props Passing & Callbacks</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                <span>Lists & <code>key</code> values</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                <span>Derived State Calculations</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
