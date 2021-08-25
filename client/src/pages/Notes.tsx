import { useState } from "react";
import { useEffect } from "react";

import "./Notes.scss";
import Header from "./notes/Header";
import NoteContainer from "./notes/NoteContainer";
import SearchBar from "./notes/SearchBar";
import { Note } from "../apiResources";
import AddNoteButton from "./notes/AddNoteButton";
import NoteModal from "./notes/NoteModal";

function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [openedNote, setOpenedNote] = useState<Note>();
  const [modalShow, setModalShow] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch notes on component mount
  useEffect(() => {
    fetch("http://localhost:4000/notes", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 401) {
          window.location.href = "/login";
        }
        return res.json();
      })
      .then((json) => {
        setNotes(json);
      });
  }, []);

  const filterNotes = (notes: Note[], query: string) => {
    if (!query) {
      return notes;
    }
    return notes.filter((note) => {
      const noteTitle = note.title.toLowerCase();
      const noteContents = note.contents.toLowerCase();
      return noteTitle.includes(query) || noteContents.includes(query);
    });
  };

  const openNote = (note: Note) => {
    setOpenedNote(note);
    setModalShow(true);
  };

  return (
    <div className="Notes">
      <Header />
      <main>
        <SearchBar
          className="Notes__SearchBar"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <section className="Notes__Grid">
          {filterNotes(notes, searchQuery).map((note: Note) => {
            return (
              <NoteContainer note={note} openNote={openNote} key={note.id} />
            );
          })}
        </section>
        <AddNoteButton className="Notes__AddNoteButton" />
      </main>
      <NoteModal note={openedNote} show={modalShow} setShow={setModalShow} />
    </div>
  );
}

export default Notes;
