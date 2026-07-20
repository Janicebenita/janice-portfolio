export interface LinkItem { label: string; href: string }
export const profile = {
  name: 'Janice Benita F', location: 'Chennai, India', phone: '+91 7092086868',
  email: 'janicebenita123@gmail.com', github: 'https://github.com/Janicebenita',
  linkedin: 'https://linkedin.com/in/janice13', domain: 'https://janicebenita.dev',
  headline: 'AI/ML Engineer | Explainable AI | Computer Vision | AI Agents',
  summary: 'Final-year Information Technology student with hands-on experience in machine learning, computer vision, explainable AI, data analytics, and full-stack AI product development. Experienced in building deployable AI systems, engineering decision-support platforms, research prototypes, and autonomous agent workflows.',
} as const

export const achievements = [
  ['95.7%', 'Crack classification accuracy'], ['10,000+', 'Inspection records analysed'],
  ['3', 'Industry internships'], ['2', 'Research papers'],
] as const

export const focusAreas = ['Explainable AI', 'Computer Vision', 'AI Agents', 'Data Analytics', 'Full-Stack AI Applications', 'Engineering Decision Support']

export const education = { institution: "St. Joseph's College of Engineering", degree: 'Bachelor of Technology in Information Technology', period: '2023 — 2027', cgpa: '8.30 / 10.00', coursework: ['Data Structures and Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Operating Systems', 'Computer Networks', 'Software Engineering', 'Machine Learning'] }

export const awards = [
  { title: 'Second Prize', event: 'International Digital Dentistry Congress 2026', detail: 'Poster Presentation · Postgraduate Category', role: 'AI/ML Software Developer and Co-Author' },
  { title: 'Runner-up', event: 'CodeVerse Inter-Collegiate Technical Symposium', detail: 'Inter-collegiate technical competition', role: '' },
]

export const certifications = ['Python for Computer Vision with OpenCV and Deep Learning — Udemy', 'Data Science and Machine Learning Bootcamp — Udemy', 'Tata GenAI Powered Data Analytics Job Simulation — Forage', 'Deloitte Data Analytics Job Simulation — Forage', 'Software Testing — NPTEL']
