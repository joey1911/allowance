'use client'

import { useTheme } from 'next-themes';

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const clickHandler = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div>
      <button type="button" onClick={clickHandler}>Toggle Theme</button>
    </div>
  )
}