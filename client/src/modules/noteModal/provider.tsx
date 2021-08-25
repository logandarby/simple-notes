import { useState } from "react";

import { Note } from "../../apiResources";
import NoteModalContext from "./context";
import NoteModal from "./NoteModal";

const NoteModalProvider: React.FC<{}> = ({ children }) => {
  const [note, setNote] = useState<Note>();
  const [show, setShow] = useState<boolean>(true);

  const openNoteModal = (note: Note) => {
    setShow(true);
    setNote(note);
  };

  const closeNoteModal = () => setShow(false);

  const value = {
    state: {},
    actions: { openNoteModal, closeNoteModal },
  };

  return (
    <NoteModalContext.Provider value={value}>
      {children}
      <NoteModal note={note} show={show} setShow={setShow} />
    </NoteModalContext.Provider>
  );
};

export default NoteModalProvider;
