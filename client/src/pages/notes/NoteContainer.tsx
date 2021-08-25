import "./NoteContainer.scss";
import { Note } from "../../apiResources";

interface NoteContainerProps {
  note: Note;
  openNote: (note: Note) => void;
}

function NoteContainer(props: NoteContainerProps) {
  return (
    <div className="Note" onClick={() => props.openNote(props.note)}>
      <h1 className="Note__Title">{props.note.title}</h1>
      <div className="Note__Contents">{props.note.contents}</div>
    </div>
  );
}

export default NoteContainer;
