import { ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { CaseStudy } from '../data/site'

export function SectionIntro({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return <header className="section-intro"><p className="kicker">{kicker}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</header>
}

export function ProjectCard({ project, index }: { project: CaseStudy; index: number }) {
  return <article className={`project-row ${project.featured ? 'featured' : ''}`}>
    <Link to={`/work/${project.slug}`} className="project-media" aria-label={`Read ${project.title} case study`}><img src={project.image} alt={project.imageAlt} loading={index === 0 ? 'eager' : 'lazy'} width="1200" height="800"/><span>{String(index + 1).padStart(2,'0')}</span></Link>
    <div className="project-content"><p className="kicker">{project.category} · {project.year}</p><h3><Link to={`/work/${project.slug}`}>{project.title}</Link></h3><p className="project-subtitle">{project.subtitle}</p><p>{project.summary}</p><ul className="metric-list">{project.results.slice(0,3).map(item => <li key={item}>{item}</li>)}</ul><div className="project-actions"><Link className="text-link" to={`/work/${project.slug}`}>Read case study <ArrowRight size={16}/></Link>{project.repositoryUrl && <a className="text-link muted" href={project.repositoryUrl} target="_blank" rel="noreferrer"><Github size={15}/> Repository</a>}</div></div>
  </article>
}

export function Architecture({ steps, label = 'System flow' }: { steps: readonly string[]; label?: string }) {
  return <figure className="architecture"><figcaption>{label}</figcaption><div className="architecture-flow">{steps.map((step,index) => <div className="architecture-step" key={step}><span>{String(index + 1).padStart(2,'0')}</span><strong>{step}</strong>{index < steps.length - 1 && <ArrowRight aria-hidden="true"/>}</div>)}</div></figure>
}

export function ExternalAction({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="button secondary" href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={16}/></a>
}
