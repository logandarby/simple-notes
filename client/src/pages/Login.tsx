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
      switch (res.status) {
        case 401:
          console.log("invalid input");
          break;
        case 200:
          console.log("redirecting to notes");
          break;
      }
    });
  };

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
