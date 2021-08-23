import React from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

function Button({ className, text, ...rest }: ButtonProps) {
  return (
    <button className={`Button ${className}`} {...rest}>
      {text}
    </button>
  );
}

export default Button;
