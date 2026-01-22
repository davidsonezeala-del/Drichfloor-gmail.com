"use client";

import { track } from "@/lib/analytics";
import CONFIG from "@/lib/config";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  href?: string;
  trackLocation?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  href,
  trackLocation,
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-ghana-red to-red-700 text-white hover:from-red-700 hover:to-ghana-red focus:ring-red-300 shadow-lg hover:shadow-xl",
    secondary:
      "bg-gradient-to-r from-gold-500 to-gold-600 text-slate-900 hover:from-gold-600 hover:to-gold-700 focus:ring-gold-300 shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white focus:ring-slate-300",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const handleClick = () => {
    if (trackLocation && href === CONFIG.PAYMENT_URL) {
      track("pay_cta_clicked", { location: trackLocation });
    }
    if (onClick) onClick();
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
