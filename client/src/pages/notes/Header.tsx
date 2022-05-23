// import { createImportSpecifier } from "typescript";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import { API_URL } from "../../globals";
import "./Header.scss";

interface HeaderProps {}

function Header(props: HeaderProps) {
  const history = useHistory();

  const onSubmit = async () => {
    const res = await fetch(`${API_URL}/session`, {
      method: "DELETE",
      credentials: "include",
    });
    switch (res.status) {
      case 200:
        console.log("logout");
        history.push("/login");
    }
  };

  return (
    <>
      <header className="Header">
        <Button text="logout" className="Header__Button" onClick={onSubmit} />
        <h1 className="Header__Title">simple notes</h1>
        <span className="Header__Circle Header__Circle--Dark" />
        <span className="Header__Circle Header__Circle--Medium" />
        <span className="Header__Circle Header__Circle--Light" />
      </header>
    </>
  );
}

export default Header;
