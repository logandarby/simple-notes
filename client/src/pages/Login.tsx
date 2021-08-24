import "./Login.scss";
import Form, { FormBody } from "../components/Form";

function Login() {
  const handleSubmit = async (body: FormBody) => {
    const res = await fetch("http://localhost:4000/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    });

    switch (res.status) {
      case 401:
        console.log("invalid input");
        break;
      case 200:
        console.log("redirecting to notes");
        window.location.href = "/";
        break;
    }
  };

  return (
    <div className="Login">
      <Form className="Login__Form" onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
