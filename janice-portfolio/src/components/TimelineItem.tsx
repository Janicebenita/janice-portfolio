import type { ExperienceItem } from '../data/experience'
export function TimelineItem({item,index}:{item:ExperienceItem;index:number}){return <article className="timeline-item"><div className="timeline-marker">0{index+1}</div><div><p className="timeline-date">{item.period}</p><h3>{item.role}</h3><h4>{item.company}</h4><ul>{item.bullets.map(b=><li key={b}>{b}</li>)}</ul></div></article>}
