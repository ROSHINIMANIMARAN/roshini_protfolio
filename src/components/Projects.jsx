import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: "Phoenix Project",
    subtitle: "Multi-Vendor E-Commerce Platform",
    tech: ["React.js", "Node.js", "MySQL", "Google Pay", "Apple Pay", "VGS Gateway", "JWT Auth"],
    description: "Architected a scalable storefront supporting independent catalogs, checkout, and order management for multiple merchants.",
    bullets: [
      "Built 8+ responsive frontend modules including product listings, shopping cart, checkout, and order tracking.",
      "Integrated Node.js RESTful APIs supporting independent checkout operations for multiple merchants.",
      "Configured payment flows (Google Pay, Apple Pay, VGS) and implemented RBAC authentication.",
      "Optimized MySQL database queries for product catalog and order tables to handle high-volume operations."
    ]
  },
  {
    title: "ThinkArgument",
    subtitle: "Online Learning & Quiz Platform",
    tech: ["Laravel", "PHP", "MySQL", "WordPress", "Elementor", "Formidable Forms", "MVC Architecture"],
    description: "Delivered a fully functional LMS with student enrollment, dynamic quiz engine, and instructor workflows.",
    bullets: [
      "Developed 5+ LMS modules including student profiles, instructor dashboards, course management, and quiz workflows.",
      "Engineered quiz management system with dynamic question rendering, answer validation, and score calculation.",
      "Built CRUD operations for student and course data enabling efficient management of 100+ student records.",
      "Customized WordPress dashboards with Elementor to streamline instructor-specific content publishing."
    ],
    liveUrl: "https://learn.thinkeru.org/outcomes-impact"
  },
  {
    title: "Web Application Security Testing",
    subtitle: "Vulnerability Assessment",
    tech: ["OWASP ZAP", "Burp Suite", "Kali Linux", "Browser DevTools"],
    description: "Conducted security scans and vulnerability assessments on target web assets to map attack vectors and outline fixes.",
    bullets: [
      "Analyzed web application entry points, endpoints, and input parameters for potential security risks.",
      "Utilized Burp Suite and OWASP ZAP to inspect and intercept HTTP/HTTPS traffic for headers validation and injection flags.",
      "Gained hands-on experience identifying OWASP Top 10 security flaws and drafting mitigation guidelines.",
      "Utilized Browser Developer Tools to inspect DOM structures, local storage, cookie safety, and client-side scripts."
    ]
  },
  {
    title: "Phishing Attack Analysis",
    subtitle: "Threat Simulation & Defense",
    tech: ["Zphisher", "Email Header Analyzer", "Google Workspace Security", "WHOIS Lookup"],
    description: "Investigated phishing attack strategies, simulated vectors, and drafted security awareness reports.",
    bullets: [
      "Simulated social engineering vectors using credential harvesting tools in local sandboxed environments.",
      "Analyzed raw email headers to identify spoofed domains, DKIM/SPF/DMARC status, and routing hops.",
      "Utilized WHOIS and DNS lookup tools to trace suspicious domains and map malicious hosting infrastructures.",
      "Documented prevention mechanisms, email security filtering guidelines, and incident response checklists."
    ]
  },
  {
    title: "Wi-Fi Security Assessment",
    subtitle: "Wireless Penetration Testing",
    tech: ["Wireshark", "Aircrack-ng", "Kali Linux", "Network Adapter (Monitor Mode)"],
    description: "Evaluated security postures of wireless networks through packet capturing, frame analysis, and protocol audits.",
    bullets: [
      "Configured external wireless adapters in Monitor Mode to perform raw RF sniffing and signal strength analysis.",
      "Conducted detailed capturing of 802.11 management, control, and data frames utilizing Wireshark.",
      "Identified weak configurations (WEP/WPA/WPA2-PSK) and security gaps in public/corporate networks.",
      "Compiled comprehensive security assessment reports summarizing network vulnerability risks and encryption fixes."
    ]
  },
  {
    title: "SQL Injection Attack Testing",
    subtitle: "Database Vulnerability Penetration",
    tech: ["SQLMap", "Burp Suite", "Kali Linux", "MySQL", "PostgreSQL"],
    description: "Tested lab environments and target databases to check input validation flaws and database exposure risks.",
    bullets: [
      "Employed automated testing suites like SQLMap to detect and exploit blind, error-based, and time-based SQLi flags.",
      "Crafted custom payload signatures manually in injection fields to bypass authentication filters.",
      "Analyzed backend database structures, schemas, and schemas data tables to evaluate information leakage scope.",
      "Provided remediation instructions detailing parameterized queries and input sanitization practices."
    ]
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="projects" className="bg-[#0f0f0f] text-white py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-zinc-900">
      
      {/* Background visual element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-700/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-20">
          <div className="inline-block border border-[#ff2a2a]/30 rounded-full px-5 py-1.5 text-xs text-[#ff2a2a] font-bold mb-4 bg-red-950/20 tracking-widest uppercase">
            My Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Work Experience & <span className="text-transparent [-webkit-text-stroke:1.5px_white]">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            A comprehensive index of engineering deployments and security evaluations conducted in active production and sandbox environments.
          </p>
        </div>

        {/* Timeline: Experience & Workshops */}
        <div data-aos="fade-up" className="mb-24 bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 md:p-12 space-y-10">
          
          {/* SoftSuave Intern */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 pb-8 border-b border-zinc-900">
            <div>
              <span className="text-[10px] font-bold text-[#ff2a2a] uppercase tracking-wider bg-[#ff2a2a]/10 px-3.5 py-1.5 rounded-full">
                Software Development Intern
              </span>
              <h3 className="text-2xl font-black mt-3">Software Developer Intern</h3>
              <p className="text-gray-400 font-semibold mt-1">SoftSuave Technologies</p>
            </div>
            <div className="text-left md:text-right">
              <span className="text-zinc-500 font-mono text-xs bg-zinc-900 px-3.5 py-1.5 rounded-xl border border-zinc-800">
                Jan 2025 – Jun 2025
              </span>
            </div>
          </div>

          {/* Cyber Security Internship */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 pb-8 border-b border-zinc-900">
            <div>
              <span className="text-[10px] font-bold text-[#ff2a2a] uppercase tracking-wider bg-[#ff2a2a]/10 px-3.5 py-1.5 rounded-full">
                Security Internship
              </span>
              <h3 className="text-2xl font-black mt-3">Cyber Security Intern</h3>
              <p className="text-gray-400 font-semibold mt-1">Future Interns</p>
            </div>
            <div className="text-left md:text-right">
              <span className="text-zinc-500 font-mono text-xs bg-zinc-900 px-3.5 py-1.5 rounded-xl border border-zinc-800">
                Threat Mitigation
              </span>
            </div>
          </div>

          {/* Ethical Hacking Workshop */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <span className="text-[10px] font-bold text-[#ff2a2a] uppercase tracking-wider bg-[#ff2a2a]/10 px-3.5 py-1.5 rounded-full">
                Workshop & Training
              </span>
              <h3 className="text-2xl font-black mt-3">Ethical Hacking Workshop</h3>
              <p className="text-gray-400 font-semibold mt-1">Hacking Flix</p>
            </div>
            <div className="text-left md:text-right">
              <span className="text-zinc-500 font-mono text-xs bg-zinc-900 px-3.5 py-1.5 rounded-xl border border-zinc-800">
                Hacking Lab Drills
              </span>
            </div>
          </div>

        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-zinc-950/80 border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between hover:border-[#ff2a2a]/30 transition-all duration-500 group shadow-xl"
            >
              <div>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-white group-hover:text-[#ff2a2a] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 text-[10px] font-bold bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Brief description */}
                <p className="text-sm font-semibold text-zinc-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 list-none pl-0 text-xs md:text-sm text-zinc-400 font-medium mb-6">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0 mt-2"></span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button for LMS */}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center w-full px-5 py-3.5 rounded-2xl bg-white text-black hover:bg-[#ff2a2a] hover:text-white font-bold transition-all duration-300 shadow-md text-sm cursor-pointer mt-4"
                >
                  Visit Live Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
