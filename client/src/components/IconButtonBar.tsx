import "./IconButtonBar.scss";

export interface IconButtonBarProps {}

const IconButtonBar: React.FC<IconButtonBarProps> = (props) => {
  return <div className="IconButtonBar">{props.children}</div>;
};

export default IconButtonBar;
