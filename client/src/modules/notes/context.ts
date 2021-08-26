import { createContext } from "react";
import { Note } from "../../apiResources";

interface NotesContextType {
  state: {
    notes: Note[];
  };
  actions: {
    createNote: () => Promise<Note> | void;
  };
}

const NotesContext = createContext<NotesContextType>({
  state: { notes: [] },
  actions: {
    createNote: () => {},
  },
});

export default NotesContext;
