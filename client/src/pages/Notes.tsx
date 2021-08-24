import { useState } from "react";
import { useEffect } from "react";
import { Note } from "../apiResources";

import "./Notes.scss";
import Header from "./notes/Header";
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
      <Header />
      <main>
        <div className="Notes__Grid">
          {notes.map((note: Note) => {
            return <NoteContainer note={note} key={note.id} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default Notes;
