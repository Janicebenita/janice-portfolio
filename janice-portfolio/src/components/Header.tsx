import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { assetPath } from '../lib/asset'
import { ThemeToggle } from './ThemeToggle'

const links = [['about', 'About'], ['experience', 'Experience'], ['projects', 'Projects'], ['research', 'Research'], ['skills', 'Skills'], ['contact', 'Contact']]

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [light, setLight] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-25% 0px -65%' },
    )
    links.forEach(([id]) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  const toggleTheme = () => {
    const next = !light
    setLight(next)
    document.documentElement.dataset.theme = next ? 'light' : 'dark'
  }

  return <header className="site-header"><nav className="nav container" aria-label="Primary navigation"><a className="monogram" href="#top" aria-label="Janice Benita home">JB<span>.</span></a><div className={`nav-links ${open ? 'open' : ''}`} id="primary-menu">{links.map(([id, label]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="button button-small" href={assetPath('resume/Janice_Benita_Resume.pdf')} target="_blank" rel="noreferrer"><Download size={15} /> Resume</a></div><div className="nav-actions"><ThemeToggle light={light} onToggle={toggleTheme} /><button className="menu-button icon-button" onClick={() => setOpen(!open)} aria-label={`${open ? 'Close' : 'Open'} navigation`} aria-expanded={open} aria-controls="primary-menu">{open ? <X /> : <Menu />}</button></div></nav></header>
}
