import { motion } from 'framer-motion'
import { ArrowDownRight, BrainCircuit, CheckCircle2, Download, Github, Linkedin, Mail, ScanSearch, Sparkles } from 'lucide-react'
import { achievements, profile } from '../data/profile'
import { assetPath } from '../lib/asset'

const signalBars = [42, 68, 55, 84, 63, 92, 76, 58, 88, 72, 96, 81]

export function Hero(){
  return <section id="top" className="hero container">
    <motion.div className="hero-copy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
      <div className="hero-kicker"><span className="pulse-dot"/> AI SYSTEMS · CHENNAI, INDIA <span className="kicker-line"/> OPEN TO OPPORTUNITIES</div>
      <h1>Building AI that can <span>see.</span><br/>Reason. <em>Explain.</em></h1>
      <p className="hero-subtitle">AI/ML Engineer focused on Explainable AI, Computer Vision, AI Agents, and Data Intelligence.</p>
      <p className="hero-summary">{profile.summary}</p>
      <div className="hero-actions"><a className="button" href="#projects">Explore systems <ArrowDownRight size={18}/></a><a className="button secondary" href={assetPath('resume/Janice_Benita_Resume.pdf')} target="_blank" rel="noreferrer"><Download size={18}/> Resume</a></div>
      <div className="social-row"><a href={profile.github} target="_blank" rel="noreferrer"><Github/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a><a href={`mailto:${profile.email}`}><Mail/> Email</a></div>
    </motion.div>

    <motion.div className="ai-observatory" initial={{opacity:0,scale:.96,x:20}} animate={{opacity:1,scale:1,x:0}} transition={{duration:.75,delay:.12}} aria-label="Visual representation of Janice's AI engineering focus">
      <div className="observatory-head"><span><BrainCircuit size={16}/> MODEL INTELLIGENCE</span><span className="system-online"><i/> SYSTEM ONLINE</span></div>
      <div className="model-stage">
        <div className="model-rings"><i/><i/><i/><div className="brain-core"><BrainCircuit/><span>JB<small>AI / ML</small></span></div></div>
        <div className="model-label label-vision"><ScanSearch/> COMPUTER VISION</div>
        <div className="model-label label-xai"><Sparkles/> EXPLAINABLE AI</div>
        <span className="coordinate coordinate-a">X 13.0827° N</span><span className="coordinate coordinate-b">Y 80.2707° E</span>
      </div>
      <div className="inference-row">
        <div><span>INFERENCE SIGNAL</span><div className="signal-bars">{signalBars.map((height,index)=><i key={index} style={{height:`${height}%`}}/>)}</div></div>
        <div className="confidence"><span>VERIFIED RESULT</span><strong>95.7<small>%</small></strong><p><CheckCircle2/> Crack classification</p></div>
      </div>
      <div className="observatory-foot"><span>RESNET-18</span><span>GRAD-CAM</span><span>HUMAN OVERSIGHT</span></div>
    </motion.div>

    <div className="metric-grid">{achievements.map(([number,label],index)=><motion.div className="metric" key={label} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.06}}><span className="metric-index">0{index+1}</span><strong>{number}</strong><span>{label}</span></motion.div>)}</div>
  </section>
}
