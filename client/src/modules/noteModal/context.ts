import { createContext } from "react";
import { Note } from "../../apiResources";

interface NoteModalContextType {
  state: {};
  actions: {
    openNoteModal: (note: Note) => void;
    closeNoteModal: () => void;
  };
}

const NoteModalContext = createContext<NoteModalContextType>({
  state: {},
  actions: {
    openNoteModal: (note: Note) => {},
    closeNoteModal: () => {},
  },
});

export default NoteModalContext;
