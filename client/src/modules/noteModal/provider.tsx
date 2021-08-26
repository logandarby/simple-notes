import { useState } from "react";

import { Note } from "../../apiResources";
import NoteModalContext from "./context";
import NoteModal from "./NoteModal";

const NoteModalProvider: React.FC<{}> = ({ children }) => {
  const [note, setNote] = useState<Note>({ id: "", title: "", contents: "" });
  const [show, setShow] = useState<boolean>(false);

  const openNoteModal = (note: Note) => {
    setShow(true);
    setNote(note);
  };

  const value = {
    state: {},
    actions: { openNoteModal },
  };

  return (
    <NoteModalContext.Provider value={value}>
      {children}
      {show && <NoteModal note={note} setShow={setShow} />}
    </NoteModalContext.Provider>
  );
};

export default NoteModalProvider;
