export const site = {
  name: 'Janice Benita F',
  role: 'AI/ML Engineer · Software Engineer',
  statement: 'I build explainable AI systems, reliable software, and data-driven tools designed for real-world decisions.',
  profile: 'Information Technology undergraduate with internship experience in machine learning, computer vision, data analytics, and software engineering. Built explainable deep-learning systems, AI agents, REST APIs, ML workflows, dashboards, and Docker-based verification using Python, PyTorch, OpenCV, FastAPI, SQL, React, TypeScript, and CI/CD.',
  location: 'Chennai, India',
  email: 'janicebenita123@gmail.com',
  phone: '+91 7092086868',
  github: 'https://github.com/Janicebenita',
  linkedin: 'https://linkedin.com/in/janice13',
  url: 'https://janicebenita.dev',
  deployedUrl: 'https://janice-portfolio-delta.vercel.app',
  resume: '/resume/Janice_Benita_AI_ML_Software_Engineer_Resume.pdf',
} as const

export const proofPoints = [
  { value: '95.7%', label: 'Crack classification accuracy', context: 'Experimental ResNet-18 evaluation' },
  { value: '10,000+', label: 'Inspection records analyzed', context: 'Python and SQL at L&T' },
  { value: '25–30 → 3–5', label: 'Days turnaround', context: 'Inspection-analysis workflow' },
  { value: '2', label: 'Research papers', context: 'One accepted, one published' },
  { value: '2nd prize', label: 'Research poster', context: 'IDDC 2026, postgraduate category' },
] as const

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  year: string
  category: string
  role: string
  summary: string
  problem: string
  context: string
  approach: string[]
  architecture: string[]
  decisions: string[]
  validation: string
  results: string[]
  limitations: string[]
  responsibleUse?: string
  lessons: string
  nextSteps: string
  technologies: string[]
  image: string
  imageAlt: string
  repositoryUrl?: string
  publicationUrl?: string
  featured?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sentinelops', title: 'SentinelOps', subtitle: 'Autonomous AI Reliability Engineer', year: '2026', category: 'AI agents · Software reliability', role: 'AI and full-stack engineering', featured: true,
    summary: 'An evidence-first reliability agent that investigates software incidents, proposes bounded repairs, and verifies them before a person approves a pull-request record.',
    problem: 'Incident evidence is fragmented across logs, metrics, traces, source history, and tests. A useful agent must connect that evidence without treating a plausible answer as proof.',
    context: 'SentinelOps explores where autonomous investigation can reduce debugging effort while keeping deployment authority with a human reviewer.',
    approach: ['Collect and normalize operational evidence', 'Rank root-cause hypotheses against that evidence', 'Reproduce the failure with regression tests', 'Generate bounded candidate patches', 'Verify deterministically in restricted environments'],
    architecture: ['Evidence sources', 'Collection + normalization', 'Hypothesis ranking', 'Reproduction', 'Bounded patch', 'Deterministic verification', 'Human approval', 'PR record'],
    decisions: ['A persisted 20-state workflow makes investigation progress inspectable.', 'Local and Docker sandbox modes constrain verification.', 'A human approval gate separates autonomous investigation from deployment authority.'],
    validation: 'Candidate changes run through regression tests, Pytest, Ruff, MyPy, Bandit, and GitHub Actions before approval.',
    results: ['Evidence-backed root-cause analysis', 'Regression comparison before and after a patch', 'Restricted Local and Docker verification', 'Human approval before preparing a pull-request record'],
    limitations: ['Ranked hypotheses can still be wrong when evidence is incomplete.', 'Real GitHub pull requests require configured credentials.', 'The system does not deploy automatically.'],
    responsibleUse: 'The agent proposes and verifies bounded changes; a person remains responsible for approving any repository action.',
    lessons: 'Reliability automation is most credible when every conclusion is traceable to evidence and every action has an explicit boundary.',
    nextSteps: 'Expand fixture coverage and evaluate hypothesis quality across a broader set of reproducible incidents.',
    technologies: ['Python','FastAPI','React','TypeScript','SQLite','Docker','Pytest','Ruff','MyPy','Bandit','GitHub Actions'], image: '/images/sentinelops-thumbnail.webp', imageAlt: 'SentinelOps reliability investigation workflow', repositoryUrl: 'https://github.com/Janicebenita/SentinelOps'
  },
  {
    slug: 'endoxai', title: 'EndoXAI', subtitle: 'Explainable AI for Root Canal Treatment Prediction', year: '2026', category: 'Clinical AI · Explainability', role: 'AI/ML Software Developer and Co-Author',
    summary: 'A clinical decision-support research prototype combining deep-learning inference with Grad-CAM visual explanations.',
    problem: 'A clinical prediction without interpretable visual evidence is difficult to examine responsibly.', context: 'The prototype supports research into explainable treatment prediction and won Second Prize at the International Digital Dentistry Congress 2026 poster presentation, postgraduate category.',
    approach: ['Prepare clinical input', 'Run deep-learning inference', 'Generate the prediction', 'Produce a Grad-CAM explanation', 'Present output for human interpretation'], architecture: ['Clinical input','Preprocessing','Model inference','Prediction','Grad-CAM','Human interpretation'],
    decisions: ['Pair each inference with a visual explanation.', 'Present the system as decision support, not an autonomous clinical decision-maker.'], validation: 'The supplied profile confirms an interactive deployed prototype; no clinical efficacy metric has been supplied for public presentation.',
    results: ['Interactive healthcare AI workflow', 'Grad-CAM explainability', 'Prototype deployed on Hugging Face Spaces', 'Second Prize at IDDC 2026'], limitations: ['Research prototype, not a clinical product.', 'No public repository URL has been supplied.', 'Model output requires professional interpretation.'],
    responsibleUse: 'EndoXAI is not a substitute for professional clinical judgment.', lessons: 'Explainability is useful when it supports scrutiny, not when it is presented as certainty.', nextSteps: 'Document evaluation protocols and release supporting material when verified links are available.', technologies: ['Deep Learning','Grad-CAM','Hugging Face Spaces'], image: '/images/endoxai-thumbnail.webp', imageAlt: 'EndoXAI clinical explainability concept'
  },
  {
    slug: 'digital-quality-intelligence', title: 'Digital Quality Intelligence Platform', subtitle: 'Engineering Quality Decision Support', year: '2026', category: 'Analytics · Decision support', role: 'Analytics and platform engineering',
    summary: 'A modular platform that turns fragmented engineering-quality data into statistical, compliance, supplier, and executive decision support.', problem: 'Quality records are harder to act on when process capability, anomalies, compliance, and supplier performance are reviewed separately.', context: 'The platform connects engineering analysis with decision-ready views for both technical and business stakeholders.',
    approach: ['Ingest quality records', 'Calculate Six Sigma and capability measures', 'Detect anomalies', 'Benchmark suppliers', 'Evaluate ACI compliance', 'Present executive views'], architecture: ['Quality records','Validation','Six Sigma + Cp/Cpk','Anomaly detection','Compliance + suppliers','Decision dashboards'],
    decisions: ['Use a modular analytics architecture.', 'Keep statistical analysis distinct from executive presentation while sharing verified source data.'], validation: 'Associated research was accepted in IJATCSE, Volume 15, Issue 4, 2026.', results: ['Sigma-level and Cp/Cpk assessment', 'Anomaly detection and supplier benchmarking', 'ACI compliance checks', 'Modular decision-support dashboards'], limitations: ['No production adoption or business-scale metrics have been supplied.', 'Dashboard visuals should be interpreted with the underlying data quality in mind.'], lessons: 'Analytics becomes decision support only when definitions, validation, and audience context remain visible.', nextSteps: 'Add verified screenshots and publication material when available.', technologies: ['Python','Analytics','Dashboards'], image: '/images/quality-intelligence-thumbnail.webp', imageAlt: 'Engineering quality intelligence data flow'
  },
  {
    slug: 'concrete-crack-detection', title: 'Explainable Concrete Crack Detection', subtitle: 'ResNet-18 + Grad-CAM Infrastructure Inspection', year: '2026', category: 'Computer vision · Research', role: 'Machine-learning engineering and research',
    summary: 'An explainable concrete-crack classifier that pairs a ResNet-18 prediction with a Grad-CAM heatmap.', problem: 'Manual inspection is time-consuming, while an unexplained classifier offers limited evidence for engineering review.', context: 'The project investigated automated image classification with visual explanation for infrastructure inspection.',
    approach: ['Prepare concrete imagery with OpenCV', 'Run ResNet-18 classification', 'Evaluate experimental predictions', 'Generate Grad-CAM heatmaps', 'Interpret highlighted image regions'], architecture: ['Concrete image','Preprocessing','ResNet-18','Classification','Grad-CAM','Engineer interpretation'],
    decisions: ['Use ResNet-18 for classification.', 'Add Grad-CAM to show which image regions influenced the model.'], validation: 'The experimental classifier achieved 95.7% accuracy. The associated paper was published in IJERT in 2026.', results: ['95.7% classification accuracy', 'Visual explanation with Grad-CAM', 'Published research in IJERT'], limitations: ['Experimental accuracy does not establish field performance.', 'Lighting, surface texture, image quality, and unseen conditions can affect predictions.', 'The supplied evidence does not claim infrastructure-scale deployment.'], responsibleUse: 'Predictions should support, not replace, qualified infrastructure inspection.', lessons: 'A heatmap can make a model easier to question, but it does not by itself prove that the model reasoned correctly.', nextSteps: 'Evaluate generalization across more varied field conditions and document class-level performance.', technologies: ['Python','PyTorch','OpenCV','ResNet-18','Grad-CAM'], image: '/images/crack-detection-thumbnail.webp', imageAlt: 'Concrete crack classification and Grad-CAM explanation', publicationUrl: 'https://doi.org/10.5281/zenodo.20124334'
  }
]

export const experiences = [
  { company: 'Larsen & Toubro, Chennai', role: 'Data Analytics and Machine Learning Intern', period: 'May 2025 – July 2025', summary: 'Applied computer vision and analytics to infrastructure-quality workflows.', evidence: ['Developed a ResNet-18 and Grad-CAM concrete-crack classification pipeline.', 'Achieved 95.7% classification accuracy.', 'Analyzed more than 10,000 inspection records using Python and SQL.', 'Reduced inspection-analysis turnaround from approximately 25–30 days to 3–5 days.', 'Developed dashboards and analytical workflows for infrastructure-quality assessment.'] },
  { company: 'YuvaIntern', role: 'Machine Learning and Data Analytics Intern', period: 'March 2026 – May 2026', summary: 'Built reusable analysis and predictive-modeling workflows for agricultural data.', evidence: ['Performed exploratory analysis, feature engineering, predictive modeling, evaluation, and visualization.', 'Built reusable workflows using Python and Pandas.', 'Communicated findings visually.'] },
  { company: 'CodeBind Technologies', role: 'Web Development Intern', period: 'July 2024 – August 2024', summary: 'Worked on responsive interfaces and API-connected web experiences.', evidence: ['Developed responsive applications using HTML, CSS, and JavaScript.', 'Integrated REST APIs and improved frontend usability.'] },
] as const

export const skillGroups = [
  { title: 'AI / ML', items: ['Machine Learning','Deep Learning','Computer Vision','Explainable AI','Feature Engineering','Model Evaluation','PyTorch','scikit-learn','OpenCV'] },
  { title: 'Backend and software', items: ['Python','FastAPI','Flask','REST APIs','SQL','SQLite','MySQL','Pytest'] },
  { title: 'Frontend', items: ['React','TypeScript','JavaScript','HTML','CSS'] },
  { title: 'Data and visualization', items: ['Pandas','NumPy','Plotly','Power BI','Tableau','Streamlit'] },
  { title: 'Engineering and delivery', items: ['Git','GitHub','GitHub Actions','Docker','CI/CD','Ruff','MyPy','Bandit','Render','Hugging Face Spaces'] },
] as const

interface PublicationItem { status: 'Accepted' | 'Published'; title: string; journal: string; detail: string; relatedSlug: string; doi?: string; url?: string }
export const publications: readonly PublicationItem[] = [
  { status: 'Accepted', title: 'Design and Implementation of the Digital Quality Intelligence Platform: A Modular Decision-Support Software Framework for Engineering Quality Intelligence', journal: 'International Journal of Advanced Trends in Computer Science and Engineering', detail: 'Volume 15, Issue 4 · 2026', relatedSlug: 'digital-quality-intelligence' },
  { status: 'Published', title: 'Explainable Deep Learning Framework for Automated Concrete Crack Detection Using ResNet-18', journal: 'International Journal of Engineering Research and Technology', detail: '2026', relatedSlug: 'concrete-crack-detection', doi: '10.5281/zenodo.20124334', url: 'https://doi.org/10.5281/zenodo.20124334' },
] as const
