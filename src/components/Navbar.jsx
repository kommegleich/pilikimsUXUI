import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero image is roughly 100vh, we transition when scrolled past 50px for a sticky feel
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 md:px-8">
      <nav
        className={`pointer-events-auto w-full max-w-[1800px] transition-all duration-500 rounded-full border ${scrolled
          ? 'bg-white/70 backdrop-blur-xl py-4 px-8 md:px-10 border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-[#121212]'
          : 'bg-white/40 backdrop-blur-md py-5 px-8 md:px-10 border-white/20 shadow-sm text-[#121212]'
          }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 text-3xl md:text-4xl font-black tracking-tighter text-[#121212]" style={{ fontFamily: 'Inter, sans-serif' }}>
            PL<span>K</span>
          </Link>

          <a href="#contact" className="px-6 py-3 bg-[#121212] text-white text-sm font-bold rounded-full hover:bg-black transition-colors shrink-0">
            Get in Touch
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
