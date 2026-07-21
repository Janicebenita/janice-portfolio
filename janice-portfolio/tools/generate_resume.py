from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "resume" / "Janice_Benita_AI_ML_Software_Engineer_Resume.pdf"
W, H = A4
LEFT, RIGHT, TOP, BOTTOM = 38, 38, 30, 28
INK = (0.11, 0.14, 0.12)
ACCENT = (0.05, 0.38, 0.31)
MUTED = (0.33, 0.37, 0.34)

def wrap(text, font, size, width):
    words, lines, line = text.split(), [], ""
    for word in words:
        candidate = f"{line} {word}".strip()
        if stringWidth(candidate, font, size) <= width:
            line = candidate
        else:
            lines.append(line); line = word
    if line: lines.append(line)
    return lines

c = canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1)
c.setTitle("Janice Benita F - AI/ML and Software Engineer Resume")
c.setAuthor("Janice Benita F")
y = H - TOP

def line(text, size=8.7, font="Helvetica", color=INK, leading=11.4, indent=0, bullet=False):
    global y
    c.setFillColorRGB(*color); c.setFont(font, size)
    width = W - LEFT - RIGHT - indent
    for idx, row in enumerate(wrap(text, font, size, width - (8 if bullet else 0))):
        if bullet and idx == 0: c.drawString(LEFT + indent, y, "•")
        c.drawString(LEFT + indent + (8 if bullet else 0), y, row); y -= leading

def section(title):
    global y
    y -= 4; c.setFillColorRGB(*ACCENT); c.setFont("Helvetica-Bold", 9.6); c.drawString(LEFT, y, title.upper())
    c.setStrokeColorRGB(.72,.73,.69); c.setLineWidth(.45); c.line(LEFT, y-3, W-RIGHT, y-3); y -= 15

def entry(title, period, role):
    global y
    c.setFillColorRGB(*INK); c.setFont("Helvetica-Bold", 9.0); c.drawString(LEFT, y, title)
    c.setFont("Helvetica", 8.4); c.setFillColorRGB(*MUTED); c.drawRightString(W-RIGHT, y, period); y -= 11
    c.setFont("Helvetica-Oblique", 8.5); c.drawString(LEFT, y, role); y -= 10

c.setFillColorRGB(*INK); c.setFont("Helvetica-Bold", 16); c.drawString(LEFT, y, "JANICE BENITA F"); y -= 16
c.setFont("Helvetica-Bold", 9); c.setFillColorRGB(*ACCENT); c.drawString(LEFT, y, "AI/ML ENGINEER  |  SOFTWARE ENGINEER"); y -= 13
c.setFont("Helvetica", 8.2); c.setFillColorRGB(*INK)
contact = "Chennai, India  |  +91 7092086868  |  janicebenita123@gmail.com"
c.drawString(LEFT, y, contact); c.linkURL("mailto:janicebenita123@gmail.com", (LEFT,y-2,LEFT+stringWidth(contact,"Helvetica",8.2),y+9), relative=0); y -= 11
links = [("github.com/Janicebenita","https://github.com/Janicebenita"),("linkedin.com/in/janice13","https://linkedin.com/in/janice13"),("janice-portfolio-delta.vercel.app","https://janice-portfolio-delta.vercel.app/")]
x=LEFT
for idx,(label,url) in enumerate(links):
    c.setFillColorRGB(*ACCENT); c.drawString(x,y,label); w=stringWidth(label,"Helvetica",8.2); c.linkURL(url,(x,y-2,x+w,y+9),relative=0); x+=w
    if idx < 2: c.setFillColorRGB(*MUTED); c.drawString(x+5,y,"|"); x+=14
y-=10

section("Professional Summary")
line("Information Technology undergraduate with internship experience in machine learning, computer vision, data analytics, and software engineering. Built explainable deep-learning systems, AI agents, REST APIs, ML workflows, dashboards, and Docker-based verification using Python, PyTorch, OpenCV, FastAPI, SQL, React, TypeScript, and CI/CD.")
section("Education")
entry("St. Joseph's College of Engineering", "2023–2027", "Bachelor of Technology in Information Technology  |  CGPA: 8.30/10.00")
line("Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Machine Learning", size=8.3, color=MUTED)
section("Technical Skills")
line("AI/ML: Machine Learning, Deep Learning, Computer Vision, Explainable AI, Feature Engineering, Model Evaluation, PyTorch, scikit-learn, OpenCV")
line("Software: Python, FastAPI, Flask, REST APIs, SQL, SQLite, MySQL, Pytest, React, TypeScript, JavaScript")
line("Data & Delivery: Pandas, NumPy, Plotly, Power BI, Tableau, Streamlit, Git, GitHub Actions, Docker, Ruff, MyPy, Bandit")
section("Experience")
entry("Larsen & Toubro, Chennai", "May 2025 – Jul 2025", "Data Analytics and Machine Learning Intern")
line("Developed a ResNet-18 and Grad-CAM concrete-crack classification pipeline, achieving 95.7% accuracy.", bullet=True)
line("Analyzed 10,000+ inspection records using Python and SQL, reducing inspection-analysis turnaround from approximately 25–30 days to 3–5 days; developed infrastructure-quality dashboards.", bullet=True)
y-=2; entry("YuvaIntern", "Mar 2026 – May 2026", "Machine Learning and Data Analytics Intern")
line("Performed exploratory analysis, feature engineering, predictive modeling, model evaluation, and visualization on agricultural data; built reusable workflows using Python and Pandas.", bullet=True)
y-=2; entry("CodeBind Technologies", "Jul 2024 – Aug 2024", "Web Development Intern")
line("Developed responsive applications using HTML, CSS, and JavaScript; integrated REST APIs and improved frontend usability.", bullet=True)
section("Selected Projects")
entry("SentinelOps – Autonomous AI Reliability Engineer", "", "Python, FastAPI, React, TypeScript, SQLite, Docker")
line("Built an evidence-first agent that ranks root-cause hypotheses, reproduces failures, proposes bounded patches, and runs deterministic Local/Docker verification. Human approval is required before preparing a pull-request record; the system does not deploy automatically.", bullet=True)
c.linkURL("https://github.com/Janicebenita/SentinelOps",(LEFT,y,280,y+12),relative=0)
y-=2; entry("EndoXAI – Explainable Root Canal Treatment Prediction", "", "Deep Learning, Grad-CAM, Hugging Face Spaces")
line("Developed an explainable clinical decision-support research prototype as AI/ML Software Developer and Co-Author; poster won Second Prize at IDDC 2026, postgraduate category.", bullet=True)
y-=2; entry("Digital Quality Intelligence Platform", "", "Python, Analytics, Dashboards")
line("Developed modular Six Sigma, Cp/Cpk, anomaly-detection, supplier-benchmarking, ACI-compliance, and executive-dashboard workflows; associated paper accepted in IJATCSE 15(4), 2026.", bullet=True)
y-=2; entry("Explainable Concrete Crack Detection", "", "ResNet-18, Grad-CAM, OpenCV")
line("Built an explainable classifier with 95.7% experimental accuracy; associated research published in IJERT in 2026.", bullet=True)
section("Research and Recognition")
line("Accepted: Design and Implementation of the Digital Quality Intelligence Platform: A Modular Decision-Support Software Framework for Engineering Quality Intelligence. IJATCSE, 15(4), 2026.")
line("Published: Explainable Deep Learning Framework for Automated Concrete Crack Detection Using ResNet-18. IJERT, 2026. DOI: 10.5281/zenodo.20124334")
c.linkURL("https://doi.org/10.5281/zenodo.20124334",(LEFT,y,310,y+12),relative=0)
line("Recognition: Second Prize, International Digital Dentistry Congress 2026 Poster Presentation, Postgraduate Category; Runner-up, CodeVerse Inter-Collegiate Technical Symposium.")
c.save()
print(OUT)
