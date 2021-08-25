import { useContext } from "react";

import NotesContext from "./context";

function useNotes() {
  return useContext(NotesContext);
}

export default useNotes;
