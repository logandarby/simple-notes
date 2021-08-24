import React, { useState } from "react";

import "./Form.scss";
import Button from "./Button";
import Input from "./Input";

export interface FormBody {
  email: string;
  password: string;
}

export type FormSubmitFunction = (body: FormBody) => void;

export interface FormProps {
  onSubmit: FormSubmitFunction;
  className?: string;
}

function Form({ className, onSubmit }: FormProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handlePasswordChange: React.FormEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.currentTarget.value);
  };

  const handleEmailChange: React.FormEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEmail(event.currentTarget.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form
      className={`Form ${className}`}
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="Form__Label">
        email
      </label>
      <Input
        name="email"
        className="Form__Input"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="password" className="Form__Label Form__Label--password">
        password
      </label>
      <Input
        type="password"
        name="password"
        className="Form__Input"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button className="Form__Button" text="sumbit" />
    </form>
  );
}

export default Form;
