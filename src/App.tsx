import React from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import Counter from './components/Counter';
import { useThemeContext } from './providers/theme.provider';

function App() {
  const { theme } = useThemeContext();

  return (
    <div className="wrapper">
      <div className={theme === 'light' ? 'light' : 'dark'}>
        <ThemeSwitcher />
        <Counter />
      </div>
    </div>
  );
}

export default App;
