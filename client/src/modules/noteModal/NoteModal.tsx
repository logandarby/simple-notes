import debounce from "lodash.debounce";
import { useEffect, useState, useRef, useCallback } from "react";

import { Note } from "../../apiResources";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import IconButtonBar from "../../components/IconButtonBar";
import { useEscapeKey, useOutsideAlerter } from "../../utils/customHooks";
import useNotes from "../notes/use";
import "./NoteModal.scss";

const DEBOUNCE_SAVE_DELAY_MS = 3000;

export interface NoteModalProps extends React.HTMLProps<HTMLDivElement> {
  note: Note;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function NoteModal({ setShow, ...props }: NoteModalProps) {
  const [title, setTitle] = useState(props.note?.title || "");
  const [contents, setContents] = useState(props.note?.contents || "");
  const modalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    actions: { updateNote, deleteNote },
  } = useNotes();
  useOutsideAlerter(containerRef, closeNoteModal);
  useEscapeKey(closeNoteModal);

  // Update the note showing
  useEffect(() => {
    setTitle(props.note?.title || "");
    setContents(props.note?.contents || "");
  }, [props.note]);

  // Autosave notes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSave = useCallback(
    debounce((newNote: Note) => updateNote(newNote), DEBOUNCE_SAVE_DELAY_MS, {
      maxWait: DEBOUNCE_SAVE_DELAY_MS,
    }),
    []
  );
  useEffect(() => {
    if (props.note) debouncedSave({ ...props.note, contents, title });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contents, props.note, title]);

  function closeNoteModal() {
    console.log("closing");
    if (props.note) updateNote({ ...props.note, title, contents });
    setShow(false);
  }

  return (
    <div {...props} className="NoteModal" ref={modalRef}>
      <div className="NoteModal__Container" ref={containerRef}>
        <main className="NoteModal__Note">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            className="NoteModal__Title"
          />
          <textarea
            name=""
            placeholder="Contents"
            value={contents}
            onChange={(e) => setContents(e.currentTarget.value)}
            className="NoteModal__Contents"
            spellCheck={false}
          ></textarea>
        </main>
        <footer className="NoteModal__Footer">
          <Button
            text="close"
            className="NoteModal__CloseButton"
            onClick={closeNoteModal}
          />
          <IconButtonBar>
            <IconButton
              iconPath="trashIcon.svg"
              alt="delete"
              onClick={() => {
                deleteNote(props.note);
                closeNoteModal();
              }}
            />
          </IconButtonBar>
        </footer>
      </div>
    </div>
  );
}

export default NoteModal;
