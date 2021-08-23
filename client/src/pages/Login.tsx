import "./Login.scss";
import Button from "../components/Button";
import Input from "../components/Input";

function Login() {
  return (
    <div className="Login">
      <form className="Login-Form">
        <label htmlFor="email">email</label>
        <Input name="email" />
        <label htmlFor="password" id="password-label">
          password
        </label>
        <Input type="password" name="password" />
        <Button text="sumbit" />
      </form>
    </div>
  );
}

export default Login;
