import React from 'react';

interface IButtonProps {
  label: string;
  onClick?: () => void;
}

function Button({ label, onClick }: IButtonProps) {
  return (
    <button
      className="btn-primary h-14 rounded-md text-white text-[18px] w-[296px]"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
