import "./Login.scss";
import Form, { FormBody } from "../components/Form";
import { useHistory } from "react-router-dom";
import { API_URL } from "../globals";
import { useEffect } from "react";

function Login() {
  const history = useHistory();

  // Log out the user on page load to avoid multiple cookies

  useEffect(() => {
    let isMounted = true;
    const logout = async () => {
      const res = await fetch(`${API_URL}/session`, {
        method: "DELETE",
      });
      switch (res.status) {
        case 200:
          break;
      }
    };
    if (isMounted) logout();
    return () => {
      isMounted = false;
    };
  });

  const handleSubmit = async (body: FormBody) => {
    const res = await fetch(`${API_URL}/session`, {
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
        history.push("/");
        break;
    }
  };

  return (
    <div className="Login">
      {/* <h1 className="Login__Title">Login</h1> */}
      <Form className="Login__Form" onSubmit={handleSubmit} />
      <p className="Login__Paragraph">
        not a user yet? <br /> register an account{" "}
        <a href="/register">
          <b>here</b>
        </a>
        .
      </p>
    </div>
  );
}

export default Login;
