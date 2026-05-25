import {
  BarChart3,
  Bot,
  Briefcase,
  ChevronRight,
  CircuitBoard,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Factory,
  GraduationCap,
  GitBranch,
  Mail,
  RadioTower,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import { useEffect } from "react";

const projects = [
  {
    title: "Robo de Fomento",
    category: "Automation | Data Processing | Decision Support",
    description:
      "Python/Flask system developed to monitor innovation funding opportunities from public and institutional sources. The solution includes automated data collection, filtering, ranking, dashboard visualization and one-page report generation to support decision-making.",
    stack: ["Python", "Flask", "Web Scraping", "Data Processing", "Ranking", "Dashboard", "Automation"],
    impact:
      "Improved visibility of innovation opportunities and structured the screening process for technical decision-making.",
  },
  {
    title: "Apontamento Local",
    category: "Governance | Internal Systems | Project Controls",
    description:
      "Internal web application for monthly project time allocation, approval workflows, governance controls and auditability. The system evolved from a Python prototype to a Node.js/Express architecture due to compliance and maintainability requirements.",
    stack: ["Node.js", "Express", "Excel Persistence", "Authentication", "CSRF", "Governance", "Audit Trail"],
    impact:
      "Improved traceability and control of project effort allocation across teams and review levels.",
  },
  {
    title: "R&D Vehicle Tracking",
    category: "R&D Operations | Traceability | Process Digitalization",
    description:
      "Web application designed to manage R&D vehicle reservations, vehicle registration, chassis/model selection, user allocation and visual reservation timelines, replacing spreadsheet-based controls and manual workflows.",
    stack: ["Flask", "Python", "Data Management", "Timeline UI", "R&D Operations", "Process Digitalization"],
    impact:
      "Converted spreadsheet-based vehicle control into a structured engineering workflow.",
  },
  {
    title: "Machine Learning & Computer Vision Projects",
    category: "AI | Computer Vision | Engineering Applications",
    description:
      "Applied machine learning and computer vision projects using Python, Scikit-Learn, OpenCV and YOLO, including classification, clustering, image processing, predictive analysis and model evaluation.",
    stack: ["Python", "Scikit-Learn", "OpenCV", "YOLO", "Machine Learning", "Computer Vision"],
    impact:
      "Connects data science and perception technologies to engineering and automation applications.",
  },
];

const technicalTracks = [
  {
    title: "ROS 2 & Robotics Training",
    description:
      "Structured technical practice with ROS 2, TF, URDF, RViz, Gazebo, C++ foundations, sensors and mobile robotics topics.",
    stack: ["ROS 2", "TF", "URDF", "RViz", "Gazebo", "C++", "Mobile Robotics"],
  },
  {
    title: "Industrial Automation Practice",
    description:
      "Practical training and documentation involving PLCs, Siemens, Rockwell, industrial networks, PROFIBUS, P&ID, instrumentation and control systems.",
    stack: ["PLC", "Siemens", "Rockwell", "PROFIBUS", "P&ID", "Instrumentation", "Control Systems"],
  },
];

const expertise = [
  {
    icon: Cpu,
    title: "Automation & Industrial Systems",
    items: ["PLC", "Siemens", "Rockwell", "Industrial networks", "P&ID", "Instrumentation", "Control systems"],
  },
  {
    icon: Factory,
    title: "Manufacturing & Process Improvement",
    items: ["Manufacturing operations", "Process digitalization", "Traceability", "Lean Manufacturing", "Operational workflows"],
  },
  {
    icon: Database,
    title: "Data & Software Engineering",
    items: ["Python", "Flask", "Node.js", "React", "Power BI", "Power Apps", "Power Automate", "SQL"],
  },
  {
    icon: Bot,
    title: "Robotics & Intelligent Systems",
    items: ["ROS 2", "C++", "Raspberry Pi", "Arduino", "ESP32", "Sensors", "Mobile robotics"],
  },
  {
    icon: Briefcase,
    title: "Project Management & Governance",
    items: ["Project planning", "Technical documentation", "Governance controls", "Approval workflows", "Auditability"],
  },
];

const timeline = [
  {
    year: "2025 - Present",
    role: "Research Fellow | IEL / Automotive R&D Environment",
    text:
      "Working in an automotive R&D environment on innovation projects, data automation, process digitalization and decision-support dashboards, with focus on internal tools that improve traceability and technical workflows.",
  },
  {
    year: "2023 - 2024",
    role: "Project Engineer | FF Equipamentos",
    text:
      "Worked on engineering projects involving 3D modeling, BOM preparation, technical documentation, project supervision, manufacturing support and process improvement.",
  },
  {
    year: "Previous Experience",
    role: "Construction and Agricultural Machinery Sector",
    text:
      "Built hands-on experience supporting technical understanding of industrial equipment, maintenance routines and manufacturing environments.",
  },
  {
    year: "Academic Foundation",
    role: "Mechatronics Engineering | FACENS",
    text:
      "Developed a multidisciplinary foundation in mechanics, electronics, automation, control systems, software and systems integration.",
  },
];

const certificationGroups = [
  {
    title: "Robotics & Embedded Systems",
    items: [
      "ROS 2, TF, URDF, RViz and Gazebo",
      "Robot Operating System fundamentals",
      "Raspberry Pi, Arduino and embedded prototyping",
      "Beginning C++ Programming",
    ],
  },
  {
    title: "Industrial Automation",
    items: [
      "Siemens S7-1200 PLC",
      "Siemens TIA Portal with Factory I/O",
      "Rockwell PLC and HMI Programming",
      "Industrial networks and PROFIBUS PA",
      "P&ID Reading and Understanding",
      "EPLAN Electric P8",
    ],
  },
  {
    title: "Data, AI & Software",
    items: [
      "Python Programming",
      "Process Control with Python",
      "Power BI, Power Apps and Power Automate",
      "SQL and Database Fundamentals",
      "Flask Web Development",
      "Machine Learning with Python",
      "Computer Vision with OpenCV",
      "Statistics with Python",
    ],
  },
];

const signals = [
  { label: "Automation", value: "PLC + IIoT", icon: RadioTower },
  { label: "Data Solutions", value: "Python + SQL", icon: Database },
  { label: "Robotics", value: "ROS 2", icon: Bot },
  { label: "Digital Tools", value: "Dashboards", icon: CircuitBoard },
];

const highlights = [
  { value: "Automation", label: "industrial systems" },
  { value: "Data", label: "engineering analytics" },
  { value: "Robotics", label: "intelligent systems" },
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
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#expertise">Expertise</a>
            <a href="#timeline">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-content">
            <div className="hero-kicker">
              <Sparkles size={18} />
              Industrial Automation &bull; Manufacturing &bull; IIoT &bull; Robotics
            </div>

            <h1>
              Mechatronics Engineer focused on industrial automation, manufacturing digitalization, data solutions, IIoT and robotics.
            </h1>

            <p>
              I build practical engineering solutions that connect hardware, software,
              data and industrial operations to improve traceability, decision-making
              and operational efficiency.
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
              <a
                className="btn secondary"
                href="https://github.com/Jean-Carlosms"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <GitBranch size={16} />
              </a>
              <a className="btn secondary" href="mailto:jean-carlosms@hotmail.com">
                Email <Mail size={16} />
              </a>
            </div>

            <div className="badge-row">
              <Badge>Python</Badge>
              <Badge>Node.js</Badge>
              <Badge>React</Badge>
              <Badge>Power Platform</Badge>
              <Badge>PLC</Badge>
              <Badge>ROS 2</Badge>
              <Badge>IIoT</Badge>
            </div>

            <div className="hero-stats" aria-label="Professional focus areas">
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
            <h3>Target Roles</h3>
            <p>
              Manufacturing Engineer &bull; Automation Engineer &bull; Data/Automation
              Engineer &bull; Robotics Engineer &bull; Industrial Digitalization Engineer
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
                <strong>Software</strong>
                <span>Flask, Node.js, React</span>
              </div>
              <div>
                <strong>Manufacturing</strong>
                <span>Projects, BOM, Lean</span>
              </div>
            </div>
          </aside>
        </section>
      </header>

      <section className="section" id="about">
        <SectionTitle
          eyebrow="About Me"
          title="Engineering profile connecting hardware, software, data and operations"
          description="A multidisciplinary profile built around practical engineering systems for industrial and R&D environments."
        />

        <div className="about-layout">
          <article className="about-narrative reveal">
            <p>
              I am a Mechatronics Engineer with a multidisciplinary background in
              industrial automation, data science, project management and
              engineering systems. My work focuses on building practical solutions
              that connect hardware, software, data and industrial operations.
            </p>
            <p>
              I have experience developing internal tools, dashboards, automation
              systems and process digitalization projects using Python, Node.js,
              React, Power Platform and industrial technologies. My professional
              direction is centered on automation, manufacturing, IIoT, robotics
              and intelligent systems.
            </p>
            <p>
              I also maintain a strong self-directed learning routine in automation,
              robotics, control systems, electronics, data science and software
              engineering, applying this knowledge in practical engineering projects.
            </p>
          </article>

          <div className="about-grid">
            <div className="about-card reveal">
              <Wrench size={26} />
              <h3>Engineering Systems</h3>
              <p>
                Integrated work with technical documentation, manufacturing support,
                process improvement, traceability and engineering workflows.
              </p>
            </div>

            <div className="about-card reveal">
              <RadioTower size={26} />
              <h3>Industrial Automation</h3>
              <p>
                Practical focus on PLCs, industrial networks, sensors, IIoT,
                instrumentation and control systems for industrial environments.
              </p>
            </div>

            <div className="about-card reveal">
              <Code2 size={26} />
              <h3>Applied Software</h3>
              <p>
                Built internal tools, dashboards and data workflows using Python,
                Flask, Node.js, React, SQL and Microsoft Power Platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark" id="projects">
        <SectionTitle
          eyebrow="Selected Projects"
          title="Engineering projects focused on automation, data and operations"
          description="Projects selected to show practical applications of software, automation, traceability, analytics and manufacturing digitalization."
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

      <section className="section dark compact-section" id="technical-tracks">
        <SectionTitle
          eyebrow="Technical Practice"
          title="Focused development in robotics and industrial automation"
          description="These areas reinforce the portfolio positioning through structured training, technical documentation and applied engineering practice."
        />

        <div className="technical-track-grid">
          {technicalTracks.map((track, index) => (
            <article
              className="technical-track-card reveal"
              key={track.title}
              style={{ "--delay": `${index * 90}ms` }}
            >
              <h3>{track.title}</h3>
              <p>{track.description}</p>
              <div className="stack">
                {track.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="expertise">
        <SectionTitle
          eyebrow="Core Expertise"
          title="Technical capabilities aligned with industrial digitalization"
          description="A combination of automation, manufacturing, software, data, robotics and governance for practical engineering work."
        />

        <div className="skills-grid expertise-grid">
          {expertise.map((skill, index) => {
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
          eyebrow="Experience"
          title="Professional path across engineering, automation and R&D"
          description="Experience focused on practical tools, manufacturing support, project engineering and technical problem solving."
        />

        <div className="timeline">
          {timeline.map((item, index) => (
            <div
              className="timeline-item reveal"
              key={`${item.year}-${item.role}`}
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
          title="Academic background in mechatronics, automation, data and management"
        />

        <div className="education-grid">
          <div className="education-card reveal">
            <GraduationCap size={28} />
            <h3>Academic Background</h3>
            <ul>
              <li>B.Eng. in Mechatronics Engineering - FACENS</li>
              <li>Postgraduate Degree in Industrial Automation Engineering - FACENS</li>
              <li>Postgraduate Degree in Data Science - FACENS</li>
              <li>MBA in Project Management - USP/ESALQ (ongoing)</li>
              <li>Postgraduate Degree in Tax Audit - Gran Faculdade</li>
            </ul>
          </div>

          <div className="education-card reveal">
            <Target size={28} />
            <h3>Current Direction</h3>
            <p>
              Currently focused on industrial automation, robotics, intelligent
              systems, data-driven engineering and digital transformation in
              manufacturing environments. My long-term goal is to combine
              mechatronics, robotics, AI and industrial systems to build practical
              automation and intelligent engineering solutions.
            </p>
            <p>
              Preparing for graduate-level research in Automation and Robotics,
              with interest in mobile robotics, reinforcement learning, ROS 2,
              control systems and intelligent manufacturing.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark" id="certifications">
        <SectionTitle
          eyebrow="Selected Certifications & Training"
          title="Continuous technical development in automation, robotics and data"
          description="Training areas selected to support technical work in industrial automation, embedded systems, robotics, data science and applied software."
        />

        <div className="cert-grid">
          {certificationGroups.map((group, index) => (
            <article
              className="cert-card reveal"
              key={group.title}
              style={{ "--delay": `${index * 90}ms` }}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <h2>Let's connect</h2>
          <p>
            Open to opportunities as Manufacturing Engineer, Automation Engineer,
            Data/Automation Engineer, Robotics Engineer and Industrial
            Digitalization Engineer.
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
