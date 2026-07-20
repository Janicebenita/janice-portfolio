import { Activity, AudioWaveform, BrainCircuit, Bug, CheckCircle2, Eye, Flame, GitPullRequest, HeartPulse, ScanLine, ShieldCheck } from 'lucide-react'
import type { Project } from '../data/projects'

const slideCopy = [
  [['Evidence graph','Logs · Metrics · Traces'],['Root cause','Ranked hypotheses'],['Safe repair','Verify · Approve · Prepare']],
  [['Clinical input','Treatment scan'],['Grad-CAM','Explain prediction'],['Decision support','Human oversight']],
  [['Quality pulse','10,000+ records'],['Process capability','Cp · Cpk · Sigma'],['Executive view','Anomaly intelligence']],
  [['Vision input','Concrete surface'],['ResNet-18','Feature extraction'],['Explainability','95.7% · Grad-CAM']],
  [['Visual stream','Fire · Smoke'],['Audio stream','Acoustic signal'],['Signal fusion','Multimodal alert']],
]
const iconSets = [[Bug,BrainCircuit,GitPullRequest],[HeartPulse,Eye,ShieldCheck],[Activity,ScanLine,CheckCircle2],[Eye,BrainCircuit,ScanLine],[Flame,AudioWaveform,ShieldCheck]]

export function ProjectVisual({project,index}:{project:Project;index:number}){
  const slides=slideCopy[index] ?? slideCopy[0]; const icons=iconSets[index] ?? iconSets[0]
  return <div className={`project-visual visual-${index+1}`} role="img" aria-label={project.alt}><div className="visual-chrome"><span/><span/><span/><strong>AI SYSTEM / 0{index+1}</strong></div><div className="visual-slides">{slides.map(([title,detail],slideIndex)=>{const Icon=icons[slideIndex];return <div className="visual-slide" key={title}><div className="visual-icon"><Icon/><i/><i/></div><div><span>0{slideIndex+1} / 03</span><h4>{title}</h4><p>{detail}</p></div><div className="visual-signal">{Array.from({length:9},(_,bar)=><i key={bar}/>)}</div></div>})}</div><div className="slide-dots"><i/><i/><i/></div><div className="visual-grid"/></div>
}
