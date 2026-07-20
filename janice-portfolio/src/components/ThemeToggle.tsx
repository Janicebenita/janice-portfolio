import { Moon, Sun } from 'lucide-react'
interface Props { light: boolean; onToggle: () => void }
export function ThemeToggle({ light, onToggle }: Props) { return <button className="icon-button" onClick={onToggle} aria-label={`Switch to ${light ? 'dark' : 'light'} theme`}>{light ? <Moon size={18}/> : <Sun size={18}/>}</button> }
