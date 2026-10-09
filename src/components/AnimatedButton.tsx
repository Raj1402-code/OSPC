import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface AnimatedButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'lime';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-400 hover:to-saffron-500 text-white font-semibold shadow-lg shadow-saffron-500/25 hover:shadow-saffron-500/40 border border-saffron-400/30',
    secondary:
      'bg-charcoal-800/90 hover:bg-charcoal-700/90 text-cream-100 font-medium border border-white/10 hover:border-white/20 backdrop-blur-md',
    outline:
      'bg-transparent hover:bg-white/5 text-cream-200 hover:text-white font-medium border border-cream-200/20 hover:border-cream-200/40',
    lime:
      'bg-gradient-to-r from-lime-accent to-lime-glow hover:brightness-110 text-charcoal-950 font-bold shadow-lg shadow-lime-accent/20 border border-lime-400/40',
  }[variant];

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  const baseClasses = `group inline-flex items-center justify-center rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide ${sizeClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Link to={to} className={baseClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
};
