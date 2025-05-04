import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'The Tiny Closet', href: '/the-tiny-closet' },
    { name: 'Plannery', href: '/plannery' },
    { name: 'Aqua Pure', href: '/aqua-pure' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm shadow-sm' : 
      'bg-transparent'
    }`}>
      <div className="container mx-auto px-16 py-16 md:py-24">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="relative z-10 transition-transform duration-300 hover:scale-105"
          >
            <img src="/favicon.svg" alt="Jerome Odigie" className="h-48 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-32">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary-600 dark:hover:text-primary-400 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary-600 dark:after:bg-primary-400 after:transition-all after:duration-300 ${
                  location.pathname === item.href 
                    ? 'text-primary-600 dark:text-primary-400 after:w-full' 
                    : 'text-secondary-700 dark:text-secondary-300 after:w-0'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-8 text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-8 text-secondary-700 dark:text-secondary-200 ml-8"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-secondary-800 animate-slide-down">
          <div className="container mx-auto px-16 py-16 space-y-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-base font-medium transition-colors duration-300 ${
                  location.pathname === item.href 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;