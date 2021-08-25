import "./AddNoteButton.scss";

export interface AddNoteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
}

function AddNoteButton(props: AddNoteButtonProps) {
  return (
    <button {...props} className={`AddNoteButton ${props.className}`}>
      <img className="AddNoteButon__Icon" src="plusIcon.svg" alt="" />
    </button>
  );
}

export default AddNoteButton;
