import "./NoteContainer.scss";
import { Note } from "../../apiResources";

interface NoteContainerProps {
  note: Note;
}

function NoteContainer(props: NoteContainerProps) {
  return (
    <div className="Note">
      <h1 className="Note__Title">{props.note.title}</h1>
      <div className="Note__Contents">{props.note.contents}</div>
    </div>
  );
}

export default NoteContainer;
