import "./Form.scss";
import Button from "./Button";
import Input from "./Input";
import React from "react";

interface FormProps extends React.HTMLProps<HTMLFormElement> {}

function Form({ className, ...rest }: FormProps) {
  return (
    <form className={`Form ${className}`} {...rest}>
      <label htmlFor="email" className="Form__Label">
        email
      </label>
      <Input name="email" className="Form__Input" />
      <label htmlFor="password" className="Form__Label Form__Label--password">
        password
      </label>
      <Input type="password" name="password" className="Form__Input" />
      <Button className="Form__Button" text="sumbit" />
    </form>
  );
}

export default Form;
