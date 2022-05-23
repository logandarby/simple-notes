import { useHistory } from "react-router-dom";

import "./Register.scss";
import Form, { FormBody } from "../components/Form";
import { API_URL } from "../globals";

export interface RegisterProps {}

const Register: React.FC<RegisterProps> = (props) => {
  const history = useHistory();

  const handleSubmit = async (body: FormBody) => {
    const res = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    });

    switch (res.status) {
      case 400:
        console.log("invalid input");
        break;
      case 200:
        console.log("redirecting to notes");
        history.push(`/login`);
        break;
    }
  };

  return (
    <div className="Register">
      <Form
        className="Register__Form"
        onSubmit={handleSubmit}
        submitText="register"
      />
    </div>
  );
};

export default Register;
