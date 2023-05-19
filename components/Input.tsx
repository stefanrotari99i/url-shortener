import React from 'react'

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    palceholder?: string;
    disabled?: boolean;
    error?: boolean;
}

const Input = ({ value, onChange, className, palceholder, disabled, error }: InputProps) => {
  return (
    <input 
        className={`${className} bg-transparent backdrop-blur-lg h-12 text-white text-md py-2 px-4 rounded-2xl ring-2 ring-violet-500 focus:outline-none focus:text-neutral-100  focus:ring-violet-600 focus:border-transparent placeholder:text-gray-300 ${error && "ring-2 ring-red-500"}`}
        type="text"
        placeholder={palceholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
    />

  )
}

export default Input