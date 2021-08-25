import { useContext } from "react";

import NoteModalContext from "./context";

function useNoteModal() {
  return useContext(NoteModalContext);
}

export default useNoteModal;
