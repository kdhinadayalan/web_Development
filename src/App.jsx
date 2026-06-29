import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

/**
 * App Component (Root of the Application)
 * 
 * Manages the global state:
 * - tasks: List of all task objects
 * - searchText: Real-time search query
 * - filterType: Status filter (All, Pending, Completed)
 * - darkMode: Theme toggle state (syncs with document class list)
 * 
 * Also configures client-side routing using React Router.
 */
export default function App() {
  // --- 1. STATE INITIALIZATION ---
  
  // Use lazy state initialization to load tasks from localStorage.
  // This runs only once during the initial mount, optimizing performance.
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('daily_tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      // Default tasks for a better first-time experience
      {
        id: '1',
        title: 'Learn React Hooks (useState, useEffect)',
        completed: true,
        createdAt: new Date().toLocaleString(),
        priority: 'High'
      },
      {
        id: '2',
        title: 'Configure Tailwind CSS in Vite project',
        completed: true,
        createdAt: new Date().toLocaleString(),
        priority: 'Medium'
      },
      {
        id: '3',
        title: 'Set up React Router for navigation',
        completed: false,
        createdAt: new Date().toLocaleString(),
        priority: 'Medium'
      },
      {
        id: '4',
        title: 'Build Daily Task Manager App',
        completed: false,
        createdAt: new Date().toLocaleString(),
        priority: 'High'
      }
    ];
  });

  // State for search and filter inputs (lifting state up)
  const [searchText, setSearchText] = useState('');
  const [filterType, setFilterType] = useState('All');

  // Dark Mode state initialization, reading user preference from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // --- 2. SIDE EFFECTS (useEffect) ---

  // Effect to synchronize tasks state with browser localStorage.
  // Triggers every time the 'tasks' array changes (added, edited, toggled, deleted).
  useEffect(() => {
    localStorage.setItem('daily_tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Effect to synchronize dark mode state.
  // Adds or removes the 'dark' utility class on the HTML document element.
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // --- 3. EVENT HANDLERS / OPERATIONS ---

  /**
   * Adds a new task to the list
   * @param {string} title - Task name/title
   * @param {string} priority - Priority value ('Low', 'Medium', 'High')
   */
  const handleAddTask = (title, priority) => {
    const newTask = {
      id: Date.now().toString(), // Generate a simple unique ID
      title,
      completed: false,
      createdAt: new Date().toLocaleString(), // Format timestamp locally
      priority,
    };
    // Use functional state updates to append to the tasks array correctly
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  /**
   * Toggles the completed status of a specific task
   * @param {string} id - Task ID
   */
  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  /**
   * Edits the details of an existing task
   * @param {string} id - Task ID
   * @param {string} newTitle - New task title
   * @param {string} newPriority - New priority level
   */
  const handleEditTask = (id, newTitle, newPriority) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: newTitle, priority: newPriority } : task
      )
    );
  };

  /**
   * Deletes a task from the list
   * @param {string} id - Task ID
   */
  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  /**
   * Clears all tasks from the list
   */
  const handleClearAllTasks = () => {
    setTasks([]);
  };

  /**
   * Toggles dark mode state
   */
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        
        {/* Navigation Bar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Page Content Container */}
        <main className="flex-grow">
          <Routes>
            {/* Dashboard / Home Route */}
            <Route
              path="/"
              element={
                <Home
                  tasks={tasks}
                  searchText={searchText}
                  setSearchText={setSearchText}
                  filterType={filterType}
                  setFilterType={setFilterType}
                  onAddTask={handleAddTask}
                  onToggleComplete={handleToggleComplete}
                  onEditTask={handleEditTask}
                  onDeleteTask={handleDeleteTask}
                  onClearAllTasks={handleClearAllTasks}
                />
              }
            />

            {/* About Page Route */}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
