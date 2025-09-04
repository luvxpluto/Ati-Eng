import React from "react";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import f2 from "./assets/F2.png"

function App() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <nav>
          <a href="#hero" className="logo"></a>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="hero">
  <div className="avatar">
    <img src={f2} alt="Team Avatar" loading="lazy" />
  </div>
  <h1>Hello! 👋</h1>
  <h2 className="gradient-text">We are Amanda, Esteban, Jose & Cris</h2>
  <p>IT Managers | Data Analysts | Software Developers | UX–UI Designers</p>
  <p className="small">You can reach out to us via email and LinkedIn</p>

  <div className="links">
    {/* Email */}
    <a 
      href="mailto:estebansnz1226@icloud.com" 
      aria-label="Email" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="fas fa-envelope"></i>
    </a>

    {/* LinkedIn */}
    <a 
      href="https://www.linkedin.com/in/cristian-montero-63382422a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
      aria-label="LinkedIn" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin"></i>
    </a>

    {/* GitHub */}
    <a 
      href="https://github.com/luvxpluto" 
      aria-label="GitHub" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="fab fa-github"></i>
    </a>
  </div>
</section>


      {/* About */}
      <section id="about" className="section">
        <h2>About us</h2>
        <div className="card">
          <p>
          Throughout our academic journey at TEC, we have gained valuable experience by taking on roles that mirror real industry positions. As aspiring IT managers, we have coordinated academic projects, practiced project planning, and applied IT governance principles to ensure alignment with organizational goals. In the role of data analysts, we have worked with databases and business intelligence tools to extract insights and support decision-making. As software developers, we have designed and implemented applications that address practical needs, applying programming, testing, and agile methodologies. Additionally, we have explored UX/UI design, creating user-friendly interfaces that balance functionality with aesthetics.
          </p>
          <p>
          These experiences though early in our careers have provided us with a foundation of technical, analytical, and managerial skills that we continue to refine. By combining these perspectives, we are developing a well-rounded profile that prepares us to contribute to multidisciplinary teams and tackle challenges in technology driven environments.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="card">
          <h3>
            IT Project & Solutions Specialist
          </h3>
          <span className="period">Innovatech Solutions, San José, CR</span>
          <span className="period">Jan 2025 - Present</span>
          <p>
          Coordinate and deliver end-to-end IT solutions, integrating project management, data analysis, software development, and UX/UI design.
          </p>
          <p>
          Build scalable applications supported by data-driven insights and user-centered design.
          </p>
          <p>
          Apply agile methodologies to ensure innovation, efficiency, and high-quality results.
          </p>
        </div>
        <div className="card">
          <h3>
            JIT Project & Solutions Specialist
          </h3>
          <span className="period">TechBridge Consulting, San José, CR.</span>
          <span className="period">Jan 2023 - Dec 2024</span>
          <p>
           Led technology projects that aligned IT strategies with business objectives.
          </p>
          <p>
          Designed and developed applications while conducting data analysis to support decision-making.
          </p>
          <p>
          Created intuitive user interfaces and improved usability through user feedback sessions.
          </p>
        </div>
        <div className="card">
          <h3>
          IT Project & Solutions Specialist
          </h3>
          <span className="period">Tecnológico de Costa Rica (TEC), Cartago, CR.</span>
          <span className="period">Aug 2022 - Dec 2022</span>
          <p>
          Coordinated academic projects simulating real IT management roles.
          </p>
          <p>
          Applied programming, testing, and agile teamwork to deliver working solutions.
          </p>
          <p>
          Balanced technical requirements with usability to develop practical applications.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="tags">
          <span>Python</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Figma</span>
          <span>SQL</span>
          <span>Excel</span>
          <span>Power BI</span>
          <span>Github</span>
          <span>AWS</span>
          <span>Azure</span>
          <span>Tableau</span>
          <span>Pandas</span>
          <span>Java</span>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h2>Education</h2>
        <div className="card">
          <h3>Bachelor in Information Technology Management, GPA: 91</h3>
          <span className="period">
          Costa Rica Institute of Technology (TEC), Cartago, CR • 2022 – Present
          </span>
          <p>
          Focus on IT governance, project management, information systems, and business intelligence.
          </p>
        </div>
        <div className="card">
          <h3>AZ-104: Microsoft Azure Administrator Associate</h3>
          <span className="period">
          Microsoft • Expected completion: 2025
          </span>
          <p>
            Training focused on cloud infrastructure, virtual networks, storage solutions, and identity management in Azure.
          </p>
        </div>
        <div className="card">
          <h3>Certified Scrum Fundamentals (CSF)</h3>
          <span className="period">Certiprof • 2024</span>
          <p>Covered agile principles, Scrum framework, and fundamentals of iterative project management.</p>
        </div>
        <div className="card">
          <h3>Google Data Analytics Professional Certificate</h3>
          <span className="period">Google • 2024</span>
          <p>Emphasis on data analysis, SQL, visualization with Tableau, and business problem-solving using data.</p>
        </div>
        <div className="card">
          <h3>Cisco Networking Essentials</h3>
          <span className="period">Cisco Networking Academy • 2023</span>
          <p>Studied networking basics, IP addressing, routing, switching, and network troubleshooting.</p>
        </div>
        <div className="card">
          <h3>Additional Training</h3>
          <span className="period">Costa Rica Institute of Technology (TEC) • 2022 – Present</span>
          <p>Modules in project management fundamentals, introduction to information security, and agile methodologies & Scrum practices.</p>
        </div>
      </section>

      
    </>
  );
}

export default App;