

/**
 * FilterButtons Component
 * 
 * Provides filter selectors (All, Pending, Completed) to alter the displayed task set.
 * 
 * @param {Object} props
 * @param {string} props.filterType - Current filter type selection ('All' | 'Pending' | 'Completed')
 * @param {Function} props.setFilterType - State setter function for the filter type
 */
export default function FilterButtons({ filterType, setFilterType }) {
  const filters = ['All', 'Pending', 'Completed'];

  return (
    <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-xl mb-5 border border-slate-200/50 dark:border-slate-800/50 self-start">
      {filters.map((filter) => {
        const isActive = filterType === filter;
        return (
          <button
            key={filter}
            onClick={() => setFilterType(filter)}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
