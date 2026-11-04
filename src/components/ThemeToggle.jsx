import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button className="icon-button cursor-interactive" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} aria-pressed={theme === 'light'}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button>;
}
