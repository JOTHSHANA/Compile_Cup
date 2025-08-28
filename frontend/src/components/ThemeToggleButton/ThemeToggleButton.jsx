import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import './ThemeToggleButton.css';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === 'light' ? (
        <MoonOutlined style={{ fontSize: '22px' }} />
      ) : (
        <SunOutlined style={{ fontSize: '22px' }} />
      )}
    </button>
  );
};

export default ThemeToggleButton;
