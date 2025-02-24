import { useState, useLayoutEffect } from "react";

const NavbarLogic = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" || localStorage.getItem("darkMode") === null;
  });

  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 992);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  const toggleCollapsed = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsCollapsed(false); // Solo forzar abierto en pantallas grandes
      }
    };

    window.addEventListener("resize", handleResize);

    // Asegurar que el modo oscuro se aplique desde el inicio
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDarkMode]);

  return { isDarkMode, isCollapsed, toggleTheme, toggleCollapsed };
};

export default NavbarLogic;
