import React from "react";

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function IconButton({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  type = "button",
}: IconButtonProps) {
  const baseClasses = "flex items-center justify-center gap-3 rounded-lg px-8 py-4 text-base font-semibold transition";
  
  const variantClasses = {
    primary: "bg-[#F97316] text-white hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed",
    secondary: "border-2 border-[#F97316] bg-white text-[#F97316] hover:bg-orange-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
