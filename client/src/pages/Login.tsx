import "./Login.scss";
import Button from "../components/Button";
import Input from "../components/Input";

function Login() {
  return (
    <div className="Login">
      <form className="Login__Form">
        <label htmlFor="email" className="Login__Label">
          email
        </label>
        <Input name="email" className="Login__Input" />
        <label
          htmlFor="password"
          className="Login__Label Login__Label--password"
        >
          password
        </label>
        <Input type="password" name="password" className="Login__Input" />
        <Button className="Login__Button" text="sumbit" />
      </form>
    </div>
  );
}

export default Login;
