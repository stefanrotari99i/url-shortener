import { error } from 'console';
import React from 'react'

interface ButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
    error?: boolean;
}

const Button = ({ label, className, onClick, isLoading, disabled, type, error }: ButtonProps) => {
  return (
    <button
        type={type}
        className={`${className} cursor-pointer bg-violet-500 hover:bg-violet-600 text-white text-md py-2 px-4 rounded-2xl ring-2 ring-violet-500 focus:outline-none focus:text-neutral-100  focus:ring-violet-600 focus:border-transparent ${error && "ring-2 ring-red-500"} active:scale-105 transition-all duration-100 disabled:opacity-50 disabled:cursor-default disabled:active:scale-100`}
        onClick={onClick}
        disabled={disabled}
    >
        {isLoading && (
            <span className="loader"></span>
        )}
        {label}
    </button>

  )
}

export default Button