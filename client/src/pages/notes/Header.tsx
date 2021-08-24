import "./Header.scss";

interface HeaderProps {}

function Header(props: HeaderProps) {
  return (
    <header className="Header">
      <h1 className="Header__Title">simple notes</h1>
      <span className="Header__Circle Header__Circle--Dark" />
      <span className="Header__Circle Header__Circle--Medium" />
      <span className="Header__Circle Header__Circle--Light" />
    </header>
  );
}

export default Header;
