import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const certifications = [
  {
    title: "SQL Injection Attack",
    issuer: "EC-Council",
    type: "Web Pen-Testing",
    icon: (
      <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Certified WiFi Pentesting 101",
    issuer: "Cappriciosec University",
    type: "Wireless Audit",
    icon: (
      <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    )
  },
  {
    title: "SQL Injection (Kali Linux)",
    issuer: "DataCamp",
    type: "Database Pentesting",
    icon: (
      <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    title: "SQL Certification",
    issuer: "DataCamp",
    type: "Database Management",
    icon: (
      <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    title: "Ethical Hacking",
    issuer: "Udemy",
    type: "Pentesting Foundations",
    icon: (
      <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Prompt Engineering",
    issuer: "Coursera",
    type: "AI & LLM Workflows",
    icon: (
      <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "UI/UX Design",
    issuer: "Udemy",
    type: "Interface Engineering",
    icon: (
      <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    type: "Core Threat Defense",
    icon: (
      <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
];

const Certifications = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="certifications" className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-zinc-950">
      
      {/* Decorative Red Blur background */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-red-700/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="inline-block border border-[#ff2a2a]/30 rounded-full px-5 py-1.5 text-xs text-[#ff2a2a] font-bold mb-4 bg-red-950/20 tracking-widest uppercase">
            Validated Competencies
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Professional <span className="text-transparent [-webkit-text-stroke:1.5px_white]">Certifications</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Formally certified and verified capabilities across software engineering, AI workflows, and cybersecurity penetration testing.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between hover:border-[#ff2a2a]/30 hover:bg-zinc-950/80 transition-all duration-300 group"
            >
              <div className="flex gap-4 items-start mb-4">
                <div className="p-2.5 bg-zinc-900 rounded-xl group-hover:bg-[#ff2a2a]/10 transition-colors duration-300 shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-base font-black text-white leading-snug group-hover:text-[#ff2a2a] transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-bold text-zinc-500 mt-1 uppercase tracking-wide">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-900/60 mt-3 flex justify-between items-center text-[10px] font-bold text-zinc-400">
                <span>{cert.type}</span>
                <span className="text-[#ff2a2a]/70">Verified ✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
