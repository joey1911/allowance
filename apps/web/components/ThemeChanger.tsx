'use client'

import { useTheme } from 'next-themes';
import { Button } from '@allowance/bash-ui';

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
      <Button variant="secondary" size="sm" onClick={clickHandler}>Toggle Theme</Button>
    </div>
  )
}