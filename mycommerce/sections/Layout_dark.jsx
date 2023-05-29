// app/page.js
'use client'
import { useEffect, useState } from 'react';

function Layout() {

  const [theme, setTheme] = useState('light'); // Default theme is set to 'light'

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full shadow-lg"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Layout;
