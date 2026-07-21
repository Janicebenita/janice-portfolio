import { useEffect, useState, type ReactNode } from 'react'
import { ArrowUpRight, Download, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../data/site'

const nav = [['/work','Work'],['/research','Research'],['/about','About'],['/resume','Résumé']] as const

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [location.pathname])
  return <>
    <a className="skip-link" href="#main">Skip to main content</a>
    <header className="site-header"><nav className="shell nav" aria-label="Primary navigation">
      <Link to="/" className="brand" aria-label="Janice Benita F, home"><span>JB</span><strong>Janice Benita F</strong></Link>
      <div className={`nav-links ${open ? 'is-open' : ''}`} id="site-navigation">
        {nav.map(([to,label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        <a href={`mailto:${site.email}`} className="nav-contact">Contact <ArrowUpRight size={15}/></a>
      </div>
      <button className="menu" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </nav></header>
    <main id="main">{children}</main>
    <footer><div className="shell footer-grid"><div><strong>{site.name}</strong><p>AI/ML Engineer · Software Engineer<br/>Chennai, India</p></div><div className="footer-links"><Link to="/work">Selected work</Link><Link to="/research">Research</Link><a href={site.github} target="_blank" rel="noreferrer">GitHub</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div><div><a className="text-link" href={site.resume} target="_blank" rel="noreferrer">View résumé <Download size={15}/></a><p>© 2026 Janice Benita F.</p></div></div></footer>
  </>
}

export function PageMeta({ title, description, path = '' }: { title: string; description: string; path?: string }) {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${site.url}${path}`)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  }, [title, description, path])
  return null
}
