import {
  Cpu,
  Factory,
  Database,
  Bot,
  BarChart3,
  Mail,
  ExternalLink,
  Workflow,
  Wrench,
  Code2,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Sparkles,
  CircuitBoard,
  RadioTower,
  GitBranch,
} from "lucide-react";
import { useEffect } from "react";

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

const signals = [
  { label: "Automation", value: "PLC + IIoT", icon: RadioTower },
  { label: "Data Flow", value: "Python + SQL", icon: Database },
  { label: "Robotics", value: "ROS 2", icon: Bot },
  { label: "Systems", value: "Dashboards", icon: CircuitBoard },
];

const highlights = [
  { value: "06+", label: "portfolio directions" },
  { value: "05", label: "engineering domains" },
  { value: "24/7", label: "automation mindset" },
];

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title reveal">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="hero">
        <div className="hero-bg" aria-hidden="true">
          <span className="scan-line"></span>
          <span className="pulse pulse-one"></span>
          <span className="pulse pulse-two"></span>
        </div>

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
              <Sparkles size={18} />
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

            <div className="hero-stats" aria-label="Portfolio highlights">
              {highlights.map((item) => (
                <div className="stat" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-card">
            <div className="card-glow"></div>
            <div className="system-orbit" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3>Professional Positioning</h3>
            <p>
              Manufacturing Engineer &bull; Automation Engineer &bull; Industrial Data &bull;
              R&D &bull; IIoT &bull; Robotics
            </p>

            <div className="signal-list">
              {signals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div className="signal-item" key={signal.label}>
                    <Icon size={20} />
                    <span>{signal.label}</span>
                    <strong>{signal.value}</strong>
                  </div>
                );
              })}
            </div>

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
          <div className="about-card reveal">
            <Wrench size={26} />
            <h3>Engineering Background</h3>
            <p>
              Experience with engineering projects, mechanical design,
              manufacturing documentation, industrial equipment and technical
              problem solving.
            </p>
          </div>

          <div className="about-card reveal">
            <Workflow size={26} />
            <h3>Automation Mindset</h3>
            <p>
              Strong interest in integrating hardware, software, industrial
              networks and data acquisition to improve process reliability.
            </p>
          </div>

          <div className="about-card reveal">
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
          {projects.map((project, index) => (
            <article
              className="project-card reveal"
              key={project.title}
              style={{ "--delay": `${index * 80}ms` }}
            >
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
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                className="skill-card reveal"
                key={skill.title}
                style={{ "--delay": `${index * 90}ms` }}
              >
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
          {timeline.map((item, index) => (
            <div
              className="timeline-item reveal"
              key={item.year}
              style={{ "--delay": `${index * 90}ms` }}
            >
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
          <div className="education-card reveal">
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

          <div className="education-card reveal">
            <Briefcase size={28} />
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
            <GitBranch size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/jeancarlosms" target="_blank" rel="noreferrer">
            <ExternalLink size={20} /> LinkedIn
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

