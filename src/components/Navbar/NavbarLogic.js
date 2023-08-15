import { useState, useEffect } from 'react';

const NavbarLogic = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsCollapsed(false);
      } else {
        setIsCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isDarkMode, isCollapsed, toggleTheme, toggleCollapsed };
};

export default NavbarLogic;
