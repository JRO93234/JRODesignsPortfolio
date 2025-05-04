import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  className = '',
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
    secondary: 'bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 active:bg-primary-100 dark:border-primary-500 dark:text-primary-400',
  };
  
  const sizeClasses = {
    sm: 'text-sm py-6 px-12',
    md: 'text-base py-8 px-16',
    lg: 'text-lg py-10 px-24',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    if (external) {
      return (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;