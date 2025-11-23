import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';
import { NavItem } from '../types';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: '学会保护自己', path: '/protect' },
    { label: '我遇到了不舒服的事', path: '/uncomfortable' },
    { label: '我要帮助孩子/朋友', path: '/supporters' },
    { label: '求助与法律', path: '/help' },
  ];

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header className="bg-island-bg border-b border-island-warm px-4 md:px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-island-primary/10 p-2 rounded-xl group-hover:bg-island-primary/20 transition-colors">
            <Anchor className="text-island-primary" size={24} />
          </div>
          <span className="text-lg md:text-xl font-bold text-island-text tracking-wide">
            小岛 · <span className="text-island-primary font-normal">安全成长</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-island-primary text-white shadow-sm'
                  : 'text-island-text hover:bg-island-warm'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-island-text hover:bg-island-warm rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium mx-2 ${
                  isActive(item.path)
                    ? 'bg-island-primary text-white'
                    : 'bg-island-warm/50 text-island-text'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};