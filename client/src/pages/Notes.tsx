import { useState } from "react";
import { useEffect } from "react";
import { Note } from "../apiResources";

import "./Notes.scss";
import NoteContainer from "./notes/NoteContainer";

function Notes() {
  const [notes, setNotes] = useState([]);

  // Fetch notes on component mount
  useEffect(() => {
    fetch("http://localhost:4000/notes", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        setNotes(json);
      });
  }, []);

  return (
    <div className="Notes">
      <main>
        {notes.map((note: Note) => {
          return <NoteContainer note={note} key={note.id} />;
        })}
      </main>
    </div>
  );
}

export default Notes;
