import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
  onOpenHireMe: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onOpenHireMe }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'My Blog', href: '#blog', id: 'blog' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/5'
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="text-2xl font-black tracking-widest text-slate-900 hover:text-blue-600 transition duration-200 uppercase"
          data-purpose="brand-logo"
        >
          {PERSONAL_INFO.brandName}
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-7 text-sm font-medium tracking-wide"
          data-purpose="main-navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "text-blue-600 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Fast CTA on desktop */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onOpenHireMe}
            className="px-5 py-2.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-xs hover:shadow-blue-500/20 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          aria-label="Toggle navigation"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg"
          type="button"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2 text-base font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 font-semibold'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-4 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenHireMe();
              }}
              className="w-full py-3 rounded-full bg-blue-600 text-white font-semibold text-xs tracking-wider uppercase text-center hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
            >
              LET'S TALK
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
