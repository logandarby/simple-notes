import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Note } from "../../apiResources";
import NotesContext from "./context";

const NotesProvider: React.FC<{}> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const history = useHistory();

  // Fetch notes on component mount
  useEffect(() => {
    fetch("http://localhost:4000/notes", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 401) {
          history.push("/login");
        }
        return res.json();
      })
      .then((json) => {
        setNotes(json);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    state: { notes },
    actions: {},
  };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export default NotesProvider;
