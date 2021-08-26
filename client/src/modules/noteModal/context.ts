import { createContext } from "react";
import { Note } from "../../apiResources";

interface NoteModalContextType {
  state: {};
  actions: {
    openNoteModal: (note: Note) => void;
  };
}

const NoteModalContext = createContext<NoteModalContextType>({
  state: {},
  actions: {
    openNoteModal: (note: Note) => {},
  },
});

export default NoteModalContext;
