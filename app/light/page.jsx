"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaSun,
  FaMoon,
  FaCar,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

const content = {
  es: {
    name: "Leandro Adrián Magallanes",
    role: "Full Stack Developer",
    contact: "Información de contacto",
    phone: "Teléfono",
    location: "Merlo, Buenos Aires, Argentina (Remoto/Híbrido)",
    education: "Educación y certificaciones",
    language: "Idiomas",
    profile: "Perfil",
    experience: "Experiencia profesional",
    skills: "Habilidades técnicas",
    additional: "Información adicional",
    english: "Inglés",
    spanish: "Español",
    dark: "Oscuro",
    light: "Claro",
    driverLicense: "Licencia de conducir categoría B2",
    immediateAvailability: "Disponibilidad inmediata",
    englishLevel: "Intermedio (Instituto Saint George, Castelar — 4° año)",
    spanishLevel: "Nativo",
    summary:
      "Full Stack Developer con más de 4 años de experiencia desarrollando aplicaciones web escalables en entornos enterprise utilizando React y Next.js. Especializado en arquitectura modular, gestión de estado avanzada con Redux Toolkit y Redux-Saga, testing automatizado (Jest, React Testing Library) y optimización de performance. Fuerte enfoque en arquitectura limpia, componentes reutilizables, estrategias SSR/SSG y mejora de calidad de código mediante cobertura de tests y code reviews. Experiencia en equipos ágiles y multidisciplinarios entregando soluciones de alto impacto para el negocio.",
    skillGroups: [
      { title: "Lenguajes", items: "JavaScript (ES6+), TypeScript" },
      {
        title: "Frontend",
        items:
          "React, Next.js, HTML5, CSS3, Sass/SCSS, Tailwind CSS, Material UI, Ant Design, Responsive Design, Accesibilidad (WCAG), buenas prácticas SEO",
      },
      {
        title: "Gestión de estado",
        items: "Redux, Redux Toolkit, Redux-Saga",
      },
      {
        title: "Testing",
        items:
          "Jest, React Testing Library, Unit Testing, Integration Testing, End-to-end Testing",
      },
      {
        title: "Backend y bases de datos",
        items: "Node.js, MongoDB, MySQL, Supabase, Firebase/Firestore",
      },
      { title: "Auth y APIs", items: "JWT, REST APIs, Swagger" },
      {
        title: "DevOps y herramientas",
        items:
          "Git, GitHub, GitKraken, Azure DevOps, Vercel, CI/CD, Front-end Build Pipelines",
      },
      {
        title: "Metodologías",
        items: "Agile, Scrum, Gitflow, Code Review, Performance Optimization",
      },
      {
        title: "Desarrollo asistido por IA",
        items:
          "GitHub Copilot, Claude, Cursor (generación de código, refactorización, soporte de testing)",
      },
    ],
    jobs: [
      {
        company: "Mobile Computing (Grid Dynamics)",
        role: "Frontend Developer React",
        period: "Junio 2024 – Enero 2026 (Remoto)",
        summary:
          "Frontend Developer en consultora tecnológica internacional especializada en soluciones digitales Enterprise, trabajando en proyectos de gran escala para clientes de múltiples industrias en equipos multidisciplinarios.",
        projects: [
          {
            title: "PDA (Portal de Acciones) — Industria Bebidas",
            description:
              "Aplicación enterprise utilizada por distribuidores y minoristas para la planificación y ejecución de acciones comerciales en una empresa multinacional de consumo masivo y retail.",
            bullets: [
              "Diseño y desarrollo de componentes críticos con validaciones de negocio complejas",
              "Refactorización de +20 sagas reduciendo duplicación de código en 30%",
              "Implementación de +150 test cases con cobertura superior al 80% en módulos críticos",
              "Optimización de performance en componentes de alta concurrencia",
              "Incremento del code coverage del 26% al 51% mediante refactorización de Redux-Saga y testing automatizado",
              "Participación activa en code reviews y definición de estándares de calidad frontend",
            ],
            techStack: null,
          },
          {
            title:
              "Intranet Corporativa — Industria Bancaria (HSBC/Banco Galicia)",
            description:
              "Portal interno corporativo utilizado a nivel nacional para gestión centralizada de accesos, enlaces y recursos empresariales por colaboradores de entidades bancarias.",
            bullets: [
              "Creación de arquitectura multi-ambiente con separación UAT y Producción",
              "Desarrollo de sistema modular con +10 secciones para acceso a sistemas internos",
              "Implementación de enlaces inteligentes con fallback automático",
              "Resolución de desafíos de seguridad para acceso a recursos de red interna",
            ],
            techStack:
              "React, Next.js, Redux Toolkit, Redux-Saga, Jest, SASS, Ant Design, JWT, Swagger, Git, Azure DevOps, SQL Server",
          },
        ],
      },
      {
        company: "PatagoniaScript",
        role: "FullStack Developer & Founder",
        period: "Enero 2023 – Presente | Buenos Aires, Argentina",
        summary:
          "Fundador de agencia digital especializada en desarrollo de soluciones web escalables y de alto rendimiento para PyMEs. Enfoque en arquitecturas modulares, optimización de performance, SEO técnico e integración de sistemas de pago y gestión. Servicios: landing pages optimizadas, aplicaciones web completas con panel administrativo, e-commerce con pasarelas de pago y plataformas SAAS. Portfolio completo: patagoniascript.vercel.app",
        projects: [
          {
            title: "Haize E-commerce (www.haize.com.ar)",
            description:
              "Tienda online completa de indumentaria masculina con sistema integral de gestión de productos, usuarios, pasarela de pagos y panel de administración.",
            bullets: [
              "Arquitectura escalable con ambientes de staging y producción",
              "Integración completa con MercadoPago procesando pagos automáticamente",
              "Panel administrativo que reduce el tiempo de gestión de productos en 50%",
              "Sistema de gestión de variantes de productos (talles, colores, stock)",
              "Sincronización automática entre autenticación y base de datos (MongoDB)",
              "Implementación de guía de talles interactiva y carrito de compras optimizado",
              "Diseño totalmente responsive con Tailwind CSS y animaciones 3D con Three.js",
            ],
            techStack:
              "Next.js, React, MongoDB, NextAuth, Cloudinary, Vercel, MercadoPago API, Tailwind CSS, Three.js",
          },
        ],
      },
    ],
    educationList: [
      {
        title: "Argentina Programa 2022",
        detail: "Ministerio de Economía de la Nación",
      },
      {
        title: "Alura Latam, 2023",
        detail: "Git y GitHub: Control y Comparte tu Código",
      },
      {
        title: "Alura Latam, 2023",
        detail: "HTML5 y CSS3 parte 4: Avanzando en CSS",
      },
      { title: "Crehana, 2021", detail: "Diseño de Interfaces Web y Móviles" },
      {
        title: "Crehana, 2021",
        detail: "Git y GitHub: Control de Versiones en Proyectos Web",
      },
      {
        title: "Educación Secundaria Completa",
        detail: "Analítico disponible",
      },
    ],
  },
  en: {
    name: "Leandro Adrián Magallanes",
    role: "Full Stack Developer",
    contact: "Contact info",
    phone: "Phone",
    location: "Merlo, Buenos Aires, Argentina (Remote / Hybrid)",
    education: "Education & certifications",
    language: "Languages",
    profile: "Profile",
    experience: "Professional experience",
    skills: "Technical skills",
    additional: "Additional information",
    english: "English",
    spanish: "Spanish",
    dark: "Dark",
    light: "Light",
    driverLicense: "Driver's license category B2",
    immediateAvailability: "Immediate availability",
    englishLevel:
      "Intermediate in progress (4th year — Saint George Institute, Castelar)",
    spanishLevel: "Native",
    summary:
      "Full Stack Developer with 4+ years of experience building scalable enterprise web applications using React and Next.js. Specialized in modular architecture, advanced state management with Redux Toolkit and Redux-Saga, automated testing (Jest, React Testing Library), and performance optimization. Strong focus on clean architecture, reusable components, SSR/SSG strategies, and improving code quality through test coverage and code reviews. Experienced working in agile, cross-functional teams delivering high-impact business solutions.",
    skillGroups: [
      { title: "Languages", items: "JavaScript (ES6+), TypeScript" },
      {
        title: "Frontend",
        items:
          "React, Next.js, HTML5, CSS3, Sass/SCSS, Tailwind CSS, Material UI, Ant Design, Responsive Design, Accessibility (WCAG), SEO Best Practice",
      },
      { title: "State Management", items: "Redux, Redux Toolkit, Redux-Saga" },
      {
        title: "Testing",
        items:
          "Jest, React Testing Library, Unit Testing, Integration Testing, End-to-end Testing",
      },
      {
        title: "Backend & Databases",
        items: "Node.js, MongoDB, MySQL, Supabase, Firebase/Firestore",
      },
      { title: "Auth & APIs", items: "JWT, REST APIs, Swagger" },
      {
        title: "DevOps & Tools",
        items:
          "Git, GitHub, GitKraken, Azure DevOps, Vercel, CI/CD, Front-end Build Pipelines",
      },
      {
        title: "Methodologies",
        items: "Agile, Scrum, Gitflow, Code Review, Performance Optimization",
      },
      {
        title: "AI-Assisted Development",
        items:
          "GitHub Copilot, Claude, Cursor (code generation, refactoring, testing support)",
      },
    ],
    jobs: [
      {
        company: "Mobile Computing (Grid Dynamics)",
        role: "Frontend Developer React",
        period: "June 2024 – January 2026 (Remote)",
        summary:
          "Frontend Developer working on large-scale enterprise projects for multinational clients across multiple industries, collaborating in cross-functional agile teams.",
        projects: [
          {
            title: "PDA (Actions Portal) — Beverage Industry",
            description:
              "Enterprise application used by distributors and retailers for planning and executing commercial actions within a multinational FMCG and retail company.",
            bullets: [
              "Designed and developed critical components with complex business validations",
              "Refactored 20+ Redux-Sagas, reducing code duplication by 30%",
              "Implemented 150+ test cases, achieving 80%+ coverage in critical modules",
              "Optimized performance in high-concurrency components",
              "Increased code coverage from 26% to 51% through Redux-Saga refactoring and automated testing",
              "Actively participated in code reviews and frontend quality standards definition",
            ],
            techStack: null,
          },
          {
            title:
              "Corporate Intranet — Banking Industry (HSBC / Banco Galicia)",
            description:
              "Nationwide internal corporate portal used for centralized access to internal systems, links, and business resources.",
            bullets: [
              "Designed multi-environment architecture (UAT & Production)",
              "Built a modular system with 10+ internal sections",
              "Implemented smart links with automatic fallback mechanisms",
              "Solved security challenges related to internal network resource access",
            ],
            techStack:
              "React, Next.js, Redux Toolkit, Redux-Saga, Jest, SASS, Ant Design, JWT, Swagger, Git, Azure DevOps, SQL Server",
          },
        ],
      },
      {
        company: "PatagoniaScript",
        role: "FullStack Developer & Founder",
        period: "January 2023 – Present | Buenos Aires, Argentina",
        summary:
          "Founder of a digital agency specialized in building scalable, high-performance web solutions for SMEs. Focused on modular architectures, performance optimization, technical SEO, and payment system integrations. Services: optimized landing pages, full web applications with admin dashboards, e-commerce platforms with payment gateways and SaaS platforms. Agency portfolio: patagoniascript.vercel.app",
        projects: [
          {
            title: "Haize E-commerce (www.haize.com.ar)",
            description:
              "Complete men's fashion e-commerce platform with integrated product management, user management, automated payments, and admin panel.",
            bullets: [
              "Scalable architecture with staging and production environments",
              "Full integration with MercadoPago for automated payment processing",
              "Admin dashboard reducing product management time by 50%",
              "Product variants management system (sizes, colors, stock)",
              "Automatic synchronization between authentication and MongoDB",
              "Interactive size guide and optimized shopping cart",
              "Fully responsive design using Tailwind CSS and 3D animations with Three.js",
            ],
            techStack:
              "Next.js, React, MongoDB, NextAuth, Cloudinary, Vercel, MercadoPago API, Tailwind CSS, Three.js",
          },
        ],
      },
    ],
    educationList: [
      {
        title: "Argentina Programa 2022",
        detail: "Ministry of Economy of the Nation",
      },
      {
        title: "Alura Latam, 2023",
        detail: "Git and GitHub: Control and Share Your Code",
      },
      {
        title: "Alura Latam, 2023",
        detail: "HTML5 and CSS3 Part 4: Advancing in CSS",
      },
      { title: "Crehana, 2021", detail: "Web and Mobile Interface Design" },
      {
        title: "Crehana, 2021",
        detail: "Git and GitHub: Version Control in Web Projects",
      },
      {
        title: "Complete Secondary Education",
        detail: "Transcript available on request",
      },
    ],
  },
};

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("es");
  const data = content[language];

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`cv-page ${darkMode ? "dark" : "light"}`}>
      <div className="control-bar" aria-label="CV controls">
        <div className="language-switch" aria-label="Language switcher">
          <button
            className={language === "es" ? "active" : ""}
            type="button"
            onClick={() => setLanguage("es")}
          >
            ES
          </button>
          <button
            className={language === "en" ? "active" : ""}
            type="button"
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>

        <div className="theme-toggle-wrap">
          <span className="theme-label">
            {darkMode ? data.dark : data.light}
          </span>
          <button
            type="button"
            className={`dark-mode-toggle ${darkMode ? "active" : ""}`}
            onClick={handleThemeToggle}
            aria-label="Toggle dark mode"
          >
            <span className="toggle-thumb">
              {darkMode ? (
                <FaMoon className="theme-icon" />
              ) : (
                <FaSun className="theme-icon" />
              )}
            </span>
          </button>
        </div>
      </div>

      <div className="cv-shell">
        <aside className={`sidebar ${darkMode ? "dark" : "light"}`}>
          <div className="profileText">
            <div className="profile-avatar" aria-label="Profile avatar">
              <Image
                src="/sun.png"
                alt="Profile picture"
                width={160}
                height={160}
              />
            </div>

            <h2>{data.name}</h2>
            <p className="role-subtitle">{data.role}</p>
          </div>

          <div className="contactInfo">
            <h3 className="title">{data.contact}</h3>
            <ul>
              <li>
                <span className="icon">
                  <FaPhoneAlt />
                </span>
                <span className="text">+5491127764823</span>
              </li>
              <li>
                <span className="icon">
                  <FaEnvelope />
                </span>
                <span className="text">
                  <a
                    href="mailto:leandro.magallanes@outlook.com?subject=Visualización%20CV&body=Hola%20Leandro%20Magallanes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    leandro.magallanes@outlook.com
                  </a>
                </span>
              </li>
              <li>
                <span className="icon">
                  <FaMapMarkerAlt />
                </span>
                <span className="text">{data.location}</span>
              </li>
              <li>
                <span className="icon">
                  <FaLinkedin />
                </span>
                <span className="text">
                  <a
                    href="https://linkedin.com/in/leandromagallanes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/leandromagallanes
                  </a>
                </span>
              </li>
              <li>
                <span className="icon">
                  <FaGlobe />
                </span>
                <span className="text">
                  <a
                    href="https://leandro-magallanes.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    leandro-magallanes.vercel.app
                  </a>
                </span>
              </li>
              <li>
                <span className="icon">
                  <FaGithub />
                </span>
                <span className="text">
                  <a
                    href="https://github.com/leanmaga"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/leanmaga
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="contactInfo education">
            <h3 className="title">{data.education}</h3>
            <ul>
              {data.educationList.map((item) => (
                <li key={`${language}-${item.title}-${item.detail}`}>
                  <h5>{item.title}</h5>
                  <h4>{item.detail}</h4>
                </li>
              ))}
            </ul>
          </div>

          <div className="contactInfo language">
            <h3 className="title">{data.language}</h3>
            <ul>
              <li className="language-row">
                <span>{data.english}</span>
                <div className="progress-bar">
                  <div className="progress-fill level-40" />
                </div>
                <span className="language-level">{data.englishLevel}</span>
              </li>
              <li className="language-row">
                <span>{data.spanish}</span>
                <div className="progress-bar">
                  <div className="progress-fill level-100" />
                </div>
                <span className="language-level">{data.spanishLevel}</span>
              </li>
            </ul>
          </div>
        </aside>

        <main className={`content ${darkMode ? "dark" : "light"}`}>
          <section className="about">
            <h2>{data.profile}</h2>
            <p>{data.summary}</p>
          </section>

          <section className="about skills">
            <h2>{data.skills}</h2>
            <ul className="skills-list">
              {data.skillGroups.map((group) => (
                <li key={`${language}-${group.title}`}>
                  <strong>{group.title}:</strong> {group.items}
                </li>
              ))}
            </ul>
          </section>

          <section className="about">
            <h2>{data.experience}</h2>
            {data.jobs.map((job) => (
              <div className="job-card" key={`${language}-${job.company}`}>
                <h5>
                  {job.company} | {job.role}
                </h5>
                <p className="job-period">{job.period}</p>
                <p className="job-summary">{job.summary}</p>

                {job.projects.map((project) => (
                  <div
                    className="project-block"
                    key={`${language}-${job.company}-${project.title}`}
                  >
                    <h6>{project.title}</h6>
                    {project.description && (
                      <p className="project-description">
                        {project.description}
                      </p>
                    )}
                    <ul>
                      {project.bullets.map((task) => (
                        <li
                          key={`${language}-${job.company}-${project.title}-${task}`}
                        >
                          {task}
                        </li>
                      ))}
                    </ul>
                    {project.techStack && (
                      <p className="tech-stack">
                        <strong>Tech Stack:</strong> {project.techStack}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </section>

          <section className="about interest">
            <h2>{data.additional}</h2>
            <ul>
              <li>
                <FaCar />
                <span>{data.driverLicense}</span>
              </li>
              <li>
                <FaClock />
                <span>{data.immediateAvailability}</span>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
