import useNoteModal from "../../modules/noteModal/use";
import useNotes from "../../modules/notes/use";
import "./AddNoteButton.scss";

export interface AddNoteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
}

function AddNoteButton(props: AddNoteButtonProps) {
  const {
    actions: { createNote },
  } = useNotes();
  const {
    actions: { openNoteModal },
  } = useNoteModal();

  const handleClick = async () => {
    const newNote = await createNote();
    if (newNote) openNoteModal(newNote);
  };

  return (
    <button
      {...props}
      className={`AddNoteButton ${props.className}`}
      onClick={handleClick}
    >
      <img className="AddNoteButon__Icon" src="plusIcon.svg" alt="" />
    </button>
  );
}

export default AddNoteButton;
