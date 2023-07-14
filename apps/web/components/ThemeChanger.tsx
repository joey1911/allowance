'use client'

import { useTheme } from 'next-themes';

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      The Current Theme is: {theme}
      <button type="button" onClick={() => setTheme('light')}>Light Mode</button>
      <button type="button" onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}