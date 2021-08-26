import { createContext } from "react";
import { Note } from "../../apiResources";

interface NotesContextType {
  state: {
    notes: Note[];
  };
  actions: {
    createNote: () => Promise<Note> | void;
    updateNote: (note: Note) => void;
  };
}

const NotesContext = createContext<NotesContextType>({
  state: { notes: [] },
  actions: {
    createNote: () => {},
    updateNote: (note: Note) => {
      console.log("The updateNote function isn't working");
    },
  },
});

export default NotesContext;
