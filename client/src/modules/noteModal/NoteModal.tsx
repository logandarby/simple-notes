import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import { Note } from "../../apiResources";
import Button from "../../components/Button";
import { useOutsideAlerter } from "../../utils/customHooks";
import useNotes from "../notes/use";
import "./NoteModal.scss";

export interface NoteModalProps extends React.HTMLProps<HTMLDivElement> {
  note: Note | undefined;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function NoteModal({ show, setShow, ...props }: NoteModalProps) {
  const [title, setTitle] = useState(props.note?.title || "");
  const [contents, setContents] = useState(props.note?.contents || "");
  const modalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    actions: { updateNote },
  } = useNotes();
  useOutsideAlerter(containerRef, closeNoteModal);

  function closeNoteModal() {
    console.log("closing");
    if (props.note) updateNote({ ...props.note, title, contents });
    setShow(false);
  }

  // Update show, title, contents, and key listeners
  useEffect(() => {
    const _handleEscKey = (event: any) => {
      if (event.keyCode === 27) {
        closeNoteModal();
      }
    };
    if (show) {
      modalRef.current!.style.display = "flex";
      document.addEventListener("keydown", _handleEscKey, false);
    } else {
      modalRef.current!.style.display = "none";
      document.addEventListener("keydown", _handleEscKey, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, setShow]);

  useEffect(() => {
    setTitle(props.note?.title || "");
    setContents(props.note?.contents || "");
  }, [props.note]);

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
        <footer className="NoteModal_Footer">
          <Button
            text="close"
            className="NoteModal__CloseButton"
            onClick={closeNoteModal}
          />
        </footer>
      </div>
    </div>
  );
}

export default NoteModal;
