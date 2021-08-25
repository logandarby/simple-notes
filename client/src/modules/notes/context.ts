import { createContext } from "react";
import { Note } from "../../apiResources";

interface NotesContextType {
  state: {
    notes: Note[];
  };
  actions: {};
}

const NotesContext = createContext<NotesContextType>({
  state: { notes: [] },
  actions: {},
});

export default NotesContext;
