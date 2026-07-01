import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skillCategories = [
  {
    title: "Programming & Frontend",
    skills: ["Java", "Python", "JavaScript", "PHP", "React.js", "HTML5", "CSS3", "State Management", "Responsive Web Design"],
    icon: (
      <svg className="w-8 h-8 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Backend Architectures",
    skills: ["Laravel", "Node.js", "REST API Development", "MVC Architecture", "CRUD Operations"],
    icon: (
      <svg className="w-8 h-8 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 012-2h10a2 2 0 012 2m-14 0a2 2 0 002 2h10a2 2 0 002-2M7 8h10M7 16h10" />
      </svg>
    )
  },
  {
    title: "Databases & CMS",
    skills: ["MySQL", "SQL", "Database Optimization", "Schema Design", "WordPress", "Elementor", "Formidable Forms"],
    icon: (
      <svg className="w-8 h-8 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    title: "Cybersecurity Domains",
    skills: ["Web Application Security Testing", "SQL Injection Testing", "Phishing Attack Analysis", "Wireshark Network Analysis", "WiFi Pentesting"],
    icon: (
      <svg className="w-8 h-8 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Penetration Testing Tools",
    skills: ["Burp Suite", "OWASP ZAP", "SQLMap", "Wireshark", "Aircrack-ng", "Network Adapter (Monitor Mode)"],
    icon: (
      <svg className="w-8 h-8 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  },
  {
    title: "OS, CLI & Workflows",
    skills: ["Kali Linux", "Linux & Terminal", "Git & GitHub", "VS Code", "API Testing", "Agile Methodology", "Git Workflow", "Communication", "Teamwork"],
    icon: (
      <svg className="w-8 h-8 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="skills" className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-950">
      {/* Decorative red glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-red-700/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-red-700/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-20">
          <div className="inline-block border border-[#ff2a2a]/30 rounded-full px-5 py-1.5 text-xs text-[#ff2a2a] font-bold mb-4 bg-red-950/20 tracking-widest uppercase">
            My Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Dual Stack <span className="text-transparent [-webkit-text-stroke:1.5px_white]">Expertise</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Full-stack engineering workflows and cybersecurity testing methodologies integrated into one developer.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-zinc-950/60 border border-zinc-900 rounded-3xl p-8 hover:border-[#ff2a2a]/40 hover:bg-zinc-950 transition-all duration-500 group shadow-lg"
            >
              {/* Card Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-zinc-900 rounded-2xl group-hover:bg-[#ff2a2a]/10 transition-colors duration-500">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills Badges list */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3.5 py-1.5 text-xs font-semibold bg-zinc-900/80 border border-zinc-800 text-zinc-300 rounded-xl hover:border-zinc-700 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
