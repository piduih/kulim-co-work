import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  // Base: Bold border, hard shadow, neo-brutalist transition
  const baseStyles = "inline-flex items-center justify-center font-bold border-2 border-black transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus:outline-none";
  
  const variants = {
    primary: "bg-black text-white shadow-neo hover:bg-gray-900",
    secondary: "bg-neo-bg text-black shadow-neo hover:bg-yellow-400",
    outline: "bg-white text-black shadow-neo hover:bg-gray-50",
    ghost: "border-transparent shadow-none hover:bg-gray-200 hover:border-black hover:shadow-neo",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};