import "./IconButton.scss";

export interface IconButtonProps {
  iconPath: string;
  alt: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function IconButton(props: IconButtonProps) {
  return (
    <div className="IconButton" onClick={props.onClick}>
      <img className="IconButton__Icon" src={props.iconPath} alt={props.alt} />
    </div>
  );
}

export default IconButton;
