import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as regMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark");

    if (storedTheme) setTheme(storedTheme);

    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className='theme-toggle'
      onClick={toggleTheme}
      style={{ cursor: "pointer" }}
    >
      <span className='moon-icon'>
         <FontAwesomeIcon icon={theme === 'light' ? regMoon : solidMoon} />
      </span>
      <span className='switch-theme'>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
};

export default ThemeToggle;
