import "./Login.scss";
import Button from "../components/Button";

function Login() {
  return (
    <div className="Login">
      <Button text="submit" onClick={() => alert("Button Press")} />
    </div>
  );
}

export default Login;
