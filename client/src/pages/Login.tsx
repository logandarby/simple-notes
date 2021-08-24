import "./Login.scss";
import Form, { FormBody } from "../components/Form";

function Login() {
  const handleSubmit = (body: FormBody) => {
    fetch("http://localhost:4000/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      console.log(res.json());
    });
  };

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
