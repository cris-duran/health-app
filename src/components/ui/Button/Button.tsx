import type React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
          px-4 py-2 
          bg-blue-500 
          text-white 
          rounded-md 
          hover:bg-blue-600 
          disabled:opacity-50 
          disabled:cursor-not-allowed
          transition-colors
          ${className}
        `}
    >
      {children}
    </button>
  );
};

export default Button;
