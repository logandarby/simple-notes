import "./Login.scss";
import Button from "../components/Button";
import Input from "../components/Input";

function Login() {
  return (
    <div className="Login">
      <Button text="submit" onClick={() => alert("Button Press")} />
      <Input placeholder="johndoe@email.com" maxLength={30} type="email" />
    </div>
  );
}

export default Login;
