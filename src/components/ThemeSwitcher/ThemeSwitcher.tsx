import React from 'react';
import { useThemeContext } from '../../providers/theme.provider';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div>
      <h3>Theme: {theme}</h3>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
