import React from 'react';
import stackImage from '../assets/about/profile.jpg';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">About Me</h2>
          <p className="text-lg font-bold mb-6 leading-relaxed max-w-3xl text-red-50">
            Hi, my name is <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">Roshini M</span>, a versatile Full Stack Developer and Cybersecurity Analyst based in Chennai, India.
          </p>
          <p className="text-base font-semibold mb-6 leading-relaxed max-w-3xl text-red-50/90">
            I am currently Completed my <b>Bachelor of Technology in Information Technology</b> at <b>Rathinam Technical Campus</b> (2022–2026) holding a <b>CGPA of 8.47 / 10.0</b>. I bridge the gap between building high-performance web systems and securing them.
          </p>
          <p className="text-base font-semibold mb-12 leading-relaxed max-w-3xl text-red-50/80">
            I have 6 months of internship experience as a Software Developer at SoftSuave Technologies, building scalable multi-vendor E-Commerce platforms and LMS systems, alongside cybersecurity training in ethical hacking, vulnerability assessments, and network penetration testing. I focus on developing clean, secure backend architectures and designing responsive user interfaces.
          </p>

          {/* Horizontal Skills Row (Transparent & Large) */}
          <div className="flex flex-wrap items-center gap-6 mt-8">
            {/* React */}
            <img 
              data-aos="zoom-in" data-aos-delay="200"
              src={reactImage} 
              alt="React" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" 
            />
            {/* Node */}
            <img 
              data-aos="zoom-in" data-aos-delay="300"
              src={nodeImage} 
              alt="Node.js" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" 
            />
            {/* Laravel */}
            <div 
              data-aos="zoom-in" data-aos-delay="400"
              title="Laravel"
              className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
            >
              <svg viewBox="0 0 24 24" className="w-10 h-10 md:w-14 md:h-14 fill-black">
                <path d="M22.8 1.2c-.3-.2-.7-.2-1 0L12 7.1 2.2 1.2c-.3-.2-.7-.2-1 0-.3.2-.5.5-.5.9v11.8c0 .3.2.7.5.9l9.8 5.9 9.8-5.9c.3-.2.5-.5.5-.9V2.1c0-.4-.2-.7-.5-.9zM12 9.1L3.7 4.1l8.3-5 8.3 5-8.3 5zm-1 9V10l7.3-4.4v8.1l-7.3 4.4zm9.3-5.3l-1 .6V7.1l1-.6v6.1z"/>
              </svg>
            </div>
            {/* Security Shield */}
            <div 
              data-aos="zoom-in" data-aos-delay="500"
              title="Vulnerability Assessment & Defense"
              className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl bg-black/10 rounded-xl p-2 border border-black/10"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 fill-black">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
            </div>
            {/* Terminal */}
            <div 
              data-aos="zoom-in" data-aos-delay="600"
              title="Ethical Hacking & CLI"
              className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl bg-black/10 rounded-xl p-2 border border-black/10"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 fill-black">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zm-8-3.5L6.5 17 5 15.5l2-2-2-2L6.5 10 10 13.5z"/>
              </svg>
            </div>
            {/* Database Guard */}
            <div 
              data-aos="zoom-in" data-aos-delay="700"
              title="SQL Injection Testing & MySQL Database Security"
              className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl bg-black/10 rounded-xl p-2 border border-black/10"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 fill-black">
                <path d="M12 2C6.5 2 2 3.8 2 6v12c0 2.2 4.5 4 10 4s10-1.8 10-4V6c0-2.2-4.5-4-10-4zm0 2c4.4 0 8 1.3 8 2s-3.6 2-8 2-8-1.3-8-2 3.6-2 8-2zm0 14c-4.4 0-8-1.3-8-2v-2.8c1.7 1.1 4.7 1.8 8 1.8s6.3-.7 8-1.8V16c0 .7-3.6 2-8 2zm0-4.8c-4.4 0-8-1.3-8-2V8.4c1.7 1.1 4.7 1.8 8 1.8s6.3-.7 8-1.8V11c0 .7-3.6 2-8 2z"/>
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
