import { useEffect, useState } from 'react'

function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("isDarkMode"));
    if (savedTheme === true) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));

    document.body.classList.toggle("dark-theme", isDarkMode);
    document.body.classList.toggle("light-theme", !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <button class="themeBtn" onClick={() => setIsDarkMode(!isDarkMode)}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeToggler
