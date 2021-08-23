import React from "react";
import "./Input.scss";

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

function Input({ className, ...rest }: InputProps) {
  return <input className={`Input ${className}`} {...rest} />;
}

export default Input;
