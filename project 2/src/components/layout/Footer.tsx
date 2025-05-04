import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-secondary-900 py-48 mt-64">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-16">
              Jerome Odigie
            </h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-16">
              UX Designer focused on creating beautiful and functional digital experiences.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase text-secondary-700 dark:text-secondary-300 mb-16">
              Quick Links
            </h3>
            <ul className="space-y-8">
              <li><Link to="/" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</Link></li>
              <li><a href="/#about" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="/#projects" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a></li>
              <li><a href="/#contact" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase text-secondary-700 dark:text-secondary-300 mb-16">
              Case Studies
            </h3>
            <ul className="space-y-8">
              <li><Link to="/the-tiny-closet" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">The Tiny Closet</Link></li>
              <li><Link to="/plannery" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Plannery</Link></li>
              <li><Link to="/aqua-pure" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Aqua Pure</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-48 pt-16 border-t border-secondary-200 dark:border-secondary-700">
          <p className="text-sm text-secondary-500 dark:text-secondary-500 text-center">
            © {new Date().getFullYear()} Jerome Odigie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;