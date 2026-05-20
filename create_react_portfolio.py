"""
create_react_portfolio.py

Cria um portfólio React/Vite profissional para Jean Carlos Meira da Silva.

Como usar:
1. Abra uma pasta no VS Code.
2. Coloque este arquivo dentro dela.
3. No terminal, rode:
   python create_react_portfolio.py
4. Depois:
   cd jean-react-portfolio
   npm install
   npm run dev
"""

from pathlib import Path

ROOT = Path.cwd()
PROJECT = ROOT / "jean-react-portfolio"

FILES = {}

FILES["package.json"] = """{
  "name": "jean-react-portfolio",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "react": "latest",
    "react-dom": "latest",
    "lucide-react": "latest"
  },
  "devDependencies": {}
}
"""

FILES["index.html"] = """<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Jean Carlos Meira da Silva | Engineering Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
"""

FILES["src/main.jsx"] = """import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
"""

FILES["src/App.jsx"] = """import {
  Cpu,
  Factory,
  Database,
  Bot,
  BarChart3,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Workflow,
  Gauge,
  Wrench,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  ChevronRight,
} from "lucide-react";

const projects = [
  {
    title: "Funding Opportunities Monitor",
    category: "Automation | Data | Decision Support",
    description:
      "Automation tool designed to monitor funding opportunities, collect public call data, rank relevant opportunities and generate technical summaries for decision-making.",
    stack: ["Python", "Flask", "Web Scraping", "OCR", "Dashboards"],
    impact:
      "Reduced manual monitoring effort and improved visibility for innovation and funding opportunities.",
  },
  {
    title: "Project Time Allocation System",
    category: "Governance | Project Management | Internal Systems",
    description:
      "Internal system concept for monthly project time allocation, approval workflows, governance, user profiles and auditability.",
    stack: ["Node.js", "Express", "Excel", "Authentication", "Governance"],
    impact:
      "Improved traceability, control and auditability for project effort management.",
  },
  {
    title: "Vehicle Traceability Dashboard",
    category: "R&D Operations | Web Application | Traceability",
    description:
      "Web application concept for managing R&D vehicle reservations, chassis selection, scheduling and operational traceability.",
    stack: ["Python", "Flask", "SQLite", "Dashboards", "Data Management"],
    impact:
      "Converted manual spreadsheet-based control into a structured digital engineering tool.",
  },
  {
    title: "Computer Vision and Machine Learning",
    category: "AI | Engineering Applications",
    description:
      "Studies involving computer vision, object detection and machine learning models applied to engineering and automation problems.",
    stack: ["Python", "OpenCV", "YOLO", "Scikit-learn", "Machine Learning"],
    impact:
      "Built practical knowledge in applied AI, image processing and data-driven engineering.",
  },
  {
    title: "ROS 2 and Robotics Studies",
    category: "Robotics | Simulation | Systems Integration",
    description:
      "Robotics studies involving ROS 2, robot description, simulation, visualization and robotic systems integration.",
    stack: ["ROS 2", "Gazebo", "RViz", "URDF", "Python"],
    impact:
      "Strengthened the foundation for robotics, intelligent systems and advanced mechatronics.",
  },
  {
    title: "Industrial Automation Studies",
    category: "Automation | Control | Industrial Networks",
    description:
      "Technical studies related to PLCs, industrial networks, instrumentation, sensors and process control.",
    stack: ["PLC", "Siemens", "Rockwell", "Modbus", "Profibus", "EtherNet/IP"],
    impact:
      "Reinforced core knowledge for manufacturing, process reliability and automation engineering.",
  },
];

const skills = [
  {
    icon: Factory,
    title: "Manufacturing Engineering",
    items: ["Lean Manufacturing", "Process Improvement", "BOM", "MS Project", "Problem Solving"],
  },
  {
    icon: Cpu,
    title: "Industrial Automation",
    items: ["PLC Siemens", "PLC Rockwell", "TIA Portal", "Industrial Networks", "Instrumentation"],
  },
  {
    icon: Database,
    title: "Data & Digital Tools",
    items: ["Python", "SQL", "Power BI", "Power Apps", "Power Automate"],
  },
  {
    icon: Bot,
    title: "Robotics & AI",
    items: ["ROS 2", "OpenCV", "YOLO", "Machine Learning", "Gazebo"],
  },
];

const timeline = [
  {
    year: "2025 - Present",
    role: "Research Fellow | IEL - Hyundai Motor Brasil",
    text:
      "Automation and data management initiatives for innovation and development of new products and concepts in automotive R&D.",
  },
  {
    year: "2023 - 2024",
    role: "Project Engineer | FF Equipamentos",
    text:
      "Engineering projects, BOM creation, manufacturing support, technical documentation and project planning.",
  },
  {
    year: "2020 - 2021",
    role: "Engineering Assistant | Acom Energy",
    text:
      "Commissioning tests, frequency inverter configuration, technical reports and support for industrial electrical systems.",
  },
  {
    year: "2011 - 2018",
    role: "Mechatronics Engineering | Facens",
    text:
      "Engineering foundation in mechanics, electronics, automation, control systems and systems integration.",
  },
];

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  return (
    <main>
      <header className="hero">
        <nav className="navbar">
          <div className="brand">
            <div className="brand-mark">JC</div>
            <div>
              <strong>Jean Carlos</strong>
              <small>Mechatronics Engineer</small>
            </div>
          </div>

          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#timeline">Timeline</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-content">
            <div className="hero-kicker">
              <Gauge size={18} />
              Industrial Automation &bull; IIoT &bull; Robotics &bull; Manufacturing
            </div>

            <h1>
              Engineering solutions at the intersection of automation, data and
              intelligent systems.
            </h1>

            <p>
              I am a Mechatronics Engineer focused on industrial automation,
              data-driven engineering, IIoT, robotics, process improvement and
              digital tools for manufacturing and R&D environments.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects <ChevronRight size={18} />
              </a>
              <a
                className="btn secondary"
                href="https://www.linkedin.com/in/jeancarlosms"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ExternalLink size={16} />
              </a>
            </div>

            <div className="badge-row">
              <Badge>Python</Badge>
              <Badge>Power Platform</Badge>
              <Badge>PLC</Badge>
              <Badge>ROS 2</Badge>
              <Badge>IIoT</Badge>
              <Badge>Data Acquisition</Badge>
            </div>
          </div>

          <aside className="hero-card">
            <div className="card-glow"></div>
            <h3>Professional Positioning</h3>
            <p>
              Manufacturing Engineer &bull; Automation Engineer &bull; Industrial Data &bull;
              R&D &bull; IIoT &bull; Robotics
            </p>

            <div className="metric-grid">
              <div>
                <strong>Automation</strong>
                <span>PLC, networks, sensors</span>
              </div>
              <div>
                <strong>Data</strong>
                <span>Python, SQL, dashboards</span>
              </div>
              <div>
                <strong>Systems</strong>
                <span>Flask, Node.js, tools</span>
              </div>
              <div>
                <strong>Engineering</strong>
                <span>Projects, BOM, Lean</span>
              </div>
            </div>
          </aside>
        </section>
      </header>

      <section className="section" id="about">
        <SectionTitle
          eyebrow="About"
          title="Mechatronics profile with practical industrial application"
          description="My portfolio connects engineering, automation, software and data to solve real problems in industrial and R&D environments."
        />

        <div className="about-grid">
          <div className="about-card">
            <Wrench size={26} />
            <h3>Engineering Background</h3>
            <p>
              Experience with engineering projects, mechanical design,
              manufacturing documentation, industrial equipment and technical
              problem solving.
            </p>
          </div>

          <div className="about-card">
            <Workflow size={26} />
            <h3>Automation Mindset</h3>
            <p>
              Strong interest in integrating hardware, software, industrial
              networks and data acquisition to improve process reliability.
            </p>
          </div>

          <div className="about-card">
            <Code2 size={26} />
            <h3>Digital Tools</h3>
            <p>
              Development of internal tools using Python, Flask, Node.js, Power
              Platform, dashboards and structured data workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark" id="projects">
        <SectionTitle
          eyebrow="Featured Projects"
          title="Projects that represent my engineering portfolio"
          description="These projects show practical applications of automation, data, systems integration, governance and robotics."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <span>{project.category}</span>
                <BarChart3 size={22} />
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="stack">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>

              <div className="impact">
                <strong>Impact:</strong> {project.impact}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <SectionTitle
          eyebrow="Core Skills"
          title="Technical stack aligned with modern industrial engineering"
          description="The focus is not only coding, but using technology to improve engineering processes and manufacturing systems."
        />

        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div className="skill-card" key={skill.title}>
                <Icon size={30} />
                <h3>{skill.title}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section dark" id="timeline">
        <SectionTitle
          eyebrow="Timeline"
          title="Professional and academic trajectory"
          description="A career path built around mechatronics, automation, project engineering, data and intelligent systems."
        />

        <div className="timeline">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.year}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="education">
        <SectionTitle
          eyebrow="Education"
          title="Continuous development in engineering, data and management"
        />

        <div className="education-grid">
          <div className="education-card">
            <GraduationCap size={28} />
            <h3>Academic Background</h3>
            <ul>
              <li>MBA in Project Management - USP/Esalq</li>
              <li>Postgraduate Degree in Data Science - Facens</li>
              <li>Postgraduate Degree in Industrial Automation Engineering - Facens</li>
              <li>Postgraduate Degree in Tax Audit - Gran Faculdade</li>
              <li>Bachelor's Degree in Mechatronics Engineering - Facens</li>
            </ul>
          </div>

          <div className="education-card">
            <BriefcaseBusiness size={28} />
            <h3>Career Direction</h3>
            <p>
              My current direction is to grow in manufacturing engineering,
              industrial automation, robotics, IIoT, R&D and data-driven
              engineering roles.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <h2>Let's connect</h2>
          <p>
            Open to opportunities in Manufacturing Engineering, Automation,
            Industrial Data, R&D, IIoT, Robotics and Engineering Systems.
          </p>
        </div>

        <div className="contact-links">
          <a href="https://github.com/Jean-Carlosms" target="_blank" rel="noreferrer">
            <Github size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/jeancarlosms" target="_blank" rel="noreferrer">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="mailto:jean-carlosms@hotmail.com">
            <Mail size={20} /> Email
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
"""

FILES["src/index.css"] = """* {
  box-sizing: border-box;
}

:root {
  color-scheme: dark;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #050816;
  color: #f8fafc;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at top left, rgba(59, 130, 246, 0.25), transparent 35%),
    radial-gradient(circle at top right, rgba(20, 184, 166, 0.16), transparent 30%),
    #050816;
}

a {
  color: inherit;
  text-decoration: none;
}

main {
  overflow: hidden;
}

.hero {
  min-height: 100vh;
  padding: 28px;
}

.navbar {
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #2563eb, #14b8a6);
  font-weight: 900;
  box-shadow: 0 18px 50px rgba(37, 99, 235, 0.35);
}

.brand strong {
  display: block;
  font-size: 15px;
}

.brand small {
  color: #94a3b8;
}

.nav-links {
  display: flex;
  gap: 22px;
  color: #cbd5e1;
  font-size: 14px;
}

.nav-links a:hover {
  color: #ffffff;
}

.hero-grid {
  max-width: 1180px;
  margin: 70px auto 0;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 42px;
  align-items: center;
}

.hero-kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 999px;
  color: #cbd5e1;
  background: rgba(15, 23, 42, 0.72);
  backdrop-filter: blur(12px);
  margin-bottom: 24px;
}

.hero h1 {
  font-size: clamp(42px, 7vw, 78px);
  line-height: 0.96;
  letter-spacing: -0.07em;
  margin: 0;
}

.hero-content p {
  max-width: 720px;
  color: #cbd5e1;
  font-size: 19px;
  line-height: 1.75;
  margin: 26px 0;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 26px;
}

.btn {
  border-radius: 16px;
  padding: 14px 18px;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-weight: 700;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.primary {
  background: linear-gradient(135deg, #2563eb, #14b8a6);
  color: white;
  box-shadow: 0 18px 50px rgba(37, 99, 235, 0.35);
}

.secondary {
  border: 1px solid rgba(148, 163, 184, 0.25);
  color: #e2e8f0;
  background: rgba(15, 23, 42, 0.75);
}

.badge-row,
.stack {
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
  margin-top: 24px;
}

.badge {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 12px;
  color: #dbeafe;
  background: rgba(15, 23, 42, 0.7);
}

.hero-card {
  border: 1px solid rgba(148, 163, 184, 0.22);
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.56));
  border-radius: 34px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 90px rgba(0, 0, 0, 0.35);
}

.card-glow {
  position: absolute;
  inset: -80px -80px auto auto;
  width: 220px;
  height: 220px;
  background: #2563eb;
  filter: blur(80px);
  opacity: 0.28;
}

.hero-card h3 {
  position: relative;
  margin: 0;
  font-size: 28px;
  letter-spacing: -0.04em;
}

.hero-card p {
  color: #cbd5e1;
  line-height: 1.7;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 28px;
}

.metric-grid div {
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 20px;
  padding: 16px;
  background: rgba(2, 6, 23, 0.45);
}

.metric-grid strong,
.metric-grid span {
  display: block;
}

.metric-grid span {
  color: #94a3b8;
  margin-top: 6px;
  font-size: 13px;
}

.section {
  padding: 96px 28px;
  background: #f8fafc;
  color: #0f172a;
}

.section.dark {
  background:
    radial-gradient(circle at top right, rgba(37, 99, 235, 0.16), transparent 30%),
    #050816;
  color: #f8fafc;
}

.section-title {
  max-width: 1180px;
  margin: 0 auto 42px;
}

.section-title span {
  color: #2563eb;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 12px;
}

.dark .section-title span {
  color: #38bdf8;
}

.section-title h2 {
  max-width: 850px;
  margin: 10px 0 0;
  font-size: clamp(32px, 5vw, 56px);
  letter-spacing: -0.06em;
  line-height: 1;
}

.section-title p {
  max-width: 760px;
  color: #475569;
  line-height: 1.7;
  font-size: 18px;
}

.dark .section-title p {
  color: #cbd5e1;
}

.about-grid,
.skills-grid,
.education-grid,
.projects-grid {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  gap: 18px;
}

.about-grid {
  grid-template-columns: repeat(3, 1fr);
}

.about-card,
.skill-card,
.education-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 28px;
  padding: 28px;
  box-shadow: 0 22px 60px rgba(15, 23, 42, 0.08);
}

.about-card svg,
.skill-card svg,
.education-card svg {
  color: #2563eb;
}

.about-card h3,
.skill-card h3,
.education-card h3 {
  font-size: 22px;
  letter-spacing: -0.03em;
  margin-bottom: 10px;
}

.about-card p,
.education-card p,
.skill-card li {
  color: #475569;
  line-height: 1.7;
}

.projects-grid {
  grid-template-columns: repeat(2, 1fr);
}

.project-card {
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(15, 23, 42, 0.68);
  border-radius: 30px;
  padding: 28px;
  min-height: 330px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.5);
}

.project-top {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: #38bdf8;
  font-size: 13px;
  font-weight: 700;
}

.project-card h3 {
  margin: 20px 0 12px;
  font-size: 26px;
  letter-spacing: -0.04em;
}

.project-card p {
  color: #cbd5e1;
  line-height: 1.7;
}

.impact {
  margin-top: 22px;
  color: #dbeafe;
  line-height: 1.6;
  border-top: 1px solid rgba(148, 163, 184, 0.18);
  padding-top: 18px;
}

.skills-grid {
  grid-template-columns: repeat(4, 1fr);
}

.skill-card ul,
.education-card ul {
  padding-left: 18px;
}

.timeline {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 140px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(148, 163, 184, 0.26);
}

.timeline-item {
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 34px;
  margin-bottom: 24px;
}

.timeline-year {
  color: #38bdf8;
  font-weight: 800;
}

.timeline-content {
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(15, 23, 42, 0.68);
  border-radius: 24px;
  padding: 24px;
}

.timeline-content h3 {
  margin: 0 0 8px;
}

.timeline-content p {
  margin: 0;
  color: #cbd5e1;
  line-height: 1.7;
}

.education-grid {
  grid-template-columns: 1.2fr 0.8fr;
}

.footer {
  background: #020617;
  color: white;
  padding: 70px 28px;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  align-items: center;
}

.footer h2 {
  font-size: 38px;
  letter-spacing: -0.05em;
  margin: 0 0 10px;
}

.footer p {
  max-width: 680px;
  color: #cbd5e1;
  line-height: 1.7;
}

.contact-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.contact-links a {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  border: 1px solid rgba(148, 163, 184, 0.25);
  padding: 12px 14px;
  border-radius: 15px;
  background: rgba(15, 23, 42, 0.72);
}

@media (max-width: 920px) {
  .nav-links {
    display: none;
  }

  .hero-grid,
  .about-grid,
  .projects-grid,
  .skills-grid,
  .education-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding: 22px;
  }

  .hero-grid {
    margin-top: 42px;
  }

  .timeline::before {
    display: none;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .footer {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 560px) {
  .metric-grid {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn {
    justify-content: center;
  }
}
"""

FILES["README.md"] = """# Jean Carlos Meira da Silva

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=24&duration=2800&pause=900&color=38BDF8&center=true&vCenter=true&width=900&lines=Mechatronics+Engineer;Industrial+Automation+%7C+IIoT+%7C+Robotics;Data-Driven+Engineering+for+Manufacturing;Engineering+Systems+and+Digital+Tools" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://github.com/Jean-Carlosms">
    <img src="https://img.shields.io/badge/GitHub-Jean--Carlosms-181717?style=for-the-badge&logo=github" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/jeancarlosms">
    <img src="https://img.shields.io/badge/LinkedIn-Jean%20Carlos-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn" />
  </a>
  <a href="mailto:jean-carlosms@hotmail.com">
    <img src="https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-Automation-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/Power%20Platform-Engineering%20Tools-742774?style=for-the-badge&logo=powerapps&logoColor=white" alt="Power Platform" />
  <img src="https://img.shields.io/badge/ROS%202-Robotics-22314E?style=for-the-badge&logo=ros&logoColor=white" alt="ROS 2" />
  <img src="https://img.shields.io/badge/IIoT-Data%20Acquisition-F97316?style=for-the-badge" alt="IIoT" />
</p>

I am a Mechatronics Engineer focused on Industrial Automation, Data-Driven Engineering, IIoT, Robotics and Manufacturing Systems. My work connects engineering, software, data and automation to build practical tools for industrial and R&D environments.

---

## Professional Focus

```text
Industrial Automation     Manufacturing Engineering     Data Acquisition
Python Automation         IIoT and Smart Manufacturing   Power Platform
Robotics and ROS 2        Process Improvement            Engineering Systems
```

## Engineering Stack

| Area | Tools and Concepts |
| --- | --- |
| Automation | PLC Siemens, PLC Rockwell, TIA Portal, Modbus, Profibus, EtherNet/IP, instrumentation |
| Data and Software | Python, SQL, Flask, Node.js, dashboards, OCR, web scraping, data processing |
| Digital Tools | Power BI, Power Apps, Power Automate, Excel automation, internal systems |
| Robotics and AI | ROS 2, Gazebo, RViz, URDF, OpenCV, YOLO, machine learning |
| Manufacturing | BOM, Lean Manufacturing, MS Project, process improvement, technical documentation |

## Featured Projects

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>Funding Opportunities Monitor</h3>
      <p>Automation tool for monitoring funding opportunities, ranking public calls and generating technical summaries for decision-making.</p>
      <p><b>Stack:</b> Python, Flask, OCR, Web Scraping, Dashboards</p>
      <p><b>Impact:</b> Reduced manual monitoring effort and improved visibility for innovation opportunities.</p>
    </td>
    <td width="50%" valign="top">
      <h3>Project Time Allocation System</h3>
      <p>Internal system concept for time allocation, governance, approval workflows and auditability.</p>
      <p><b>Stack:</b> Node.js, Express, Excel, Authentication, Governance</p>
      <p><b>Impact:</b> Improved traceability and control for project effort management.</p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>Vehicle Traceability Dashboard</h3>
      <p>Web application concept for R&D vehicle reservations, chassis selection, scheduling and operational traceability.</p>
      <p><b>Stack:</b> Python, Flask, SQLite, Dashboards</p>
      <p><b>Impact:</b> Converted spreadsheet-based control into a structured engineering tool.</p>
    </td>
    <td width="50%" valign="top">
      <h3>ROS 2 Robotics Studies</h3>
      <p>Robotics studies involving ROS 2, robot description, simulation, visualization and systems integration.</p>
      <p><b>Stack:</b> ROS 2, Gazebo, RViz, URDF, Python</p>
      <p><b>Impact:</b> Strengthened the foundation for robotics and intelligent mechatronic systems.</p>
    </td>
  </tr>
</table>

<details>
  <summary><b>More project directions</b></summary>

  - Computer Vision and Machine Learning with Python, OpenCV, YOLO and Scikit-learn.
  - Industrial Automation studies with PLCs, industrial networks, sensors and process control.
  - Engineering dashboards and internal tools for manufacturing and R&D operations.
  - Power Platform applications for workflow automation and operational visibility.

</details>

## GitHub Overview

![Jean's GitHub stats](https://github-readme-stats.vercel.app/api?username=Jean-Carlosms&show_icons=true&theme=tokyonight&hide_border=true&rank_icon=github&cache_seconds=21600)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=Jean-Carlosms&layout=compact&theme=tokyonight&hide_border=true&cache_seconds=21600)

## Portfolio App

This repository contains a React + Vite portfolio built to present engineering projects, technical skills, academic background and professional positioning.

```bash
npm install
npm run dev
```

```bash
npm run build
```

## Contact

| Channel | Link |
| --- | --- |
| LinkedIn | [linkedin.com/in/jeancarlosms](https://www.linkedin.com/in/jeancarlosms) |
| GitHub | [github.com/Jean-Carlosms](https://github.com/Jean-Carlosms) |
| Email | [jean-carlosms@hotmail.com](mailto:jean-carlosms@hotmail.com) |

---

<p align="center">
  Engineering solutions at the intersection of automation, data and intelligent systems.
</p>
"""

def write_file(relative_path, content):
    path = PROJECT / relative_path
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    print(f"Created: {path}")

def main():
    PROJECT.mkdir(parents=True, exist_ok=True)

    for relative_path, content in FILES.items():
        write_file(relative_path, content)

    print("\nReact portfolio created successfully.")
    print("\nNext steps:")
    print("cd jean-react-portfolio")
    print("npm install")
    print("npm run dev")

if __name__ == "__main__":
    main()
