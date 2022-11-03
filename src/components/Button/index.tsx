import React, { ReactNode } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button
      type={ type }
      className={ style.botao }
      onClick={ onClick }
    >
      { children }
    </button>
  )
}