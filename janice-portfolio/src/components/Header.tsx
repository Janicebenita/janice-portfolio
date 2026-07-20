import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
const links = [['about','About'],['experience','Experience'],['projects','Projects'],['research','Research'],['skills','Skills'],['contact','Contact']]
export function Header() {
  const [open,setOpen]=useState(false); const [active,setActive]=useState(''); const [light,setLight]=useState(false)
  useEffect(()=>{ const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setActive(e.target.id)),{rootMargin:'-25% 0px -65%'}); links.forEach(([id])=>{const el=document.getElementById(id);if(el)obs.observe(el)}); return()=>obs.disconnect() },[])
  const toggle=()=>{const next=!light;setLight(next);document.documentElement.dataset.theme=next?'light':'dark'}
  return <header className="site-header"><nav className="nav container" aria-label="Primary navigation"><a className="monogram" href="#top" aria-label="Janice Benita home">JB<span>.</span></a><div className={`nav-links ${open?'open':''}`}>{links.map(([id,label])=><a key={id} className={active===id?'active':''} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}<a className="button button-small" href="/resume/Janice_Benita_Resume.pdf" target="_blank" rel="noreferrer"><Download size={15}/> Resume</a></div><div className="nav-actions"><ThemeToggle light={light} onToggle={toggle}/><button className="menu-button icon-button" onClick={()=>setOpen(!open)} aria-label={`${open?'Close':'Open'} navigation`} aria-expanded={open}>{open?<X/>:<Menu/>}</button></div></nav></header>
}
