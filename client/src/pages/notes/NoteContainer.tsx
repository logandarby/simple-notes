import "./NoteContainer.scss";
import { Note } from "../../apiResources";
import useNoteModal from "../../modules/noteModal/use";

interface NoteContainerProps {
  note: Note;
}

function NoteContainer(props: NoteContainerProps) {
  const {
    actions: { openNoteModal },
  } = useNoteModal();
  return (
    <div className="Note" onClick={() => openNoteModal(props.note)}>
      <h1 className="Note__Title">{props.note.title}</h1>
      <div className="Note__Contents">{props.note.contents}</div>
    </div>
  );
}

export default NoteContainer;
