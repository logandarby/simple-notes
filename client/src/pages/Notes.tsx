import { useState } from "react";

import "./Notes.scss";
import Header from "./notes/Header";
import NoteContainer from "./notes/NoteContainer";
import SearchBar from "./notes/SearchBar";
import { Note } from "../apiResources";
import AddNoteButton from "./notes/AddNoteButton";
import useNotes from "../modules/notes/use";

function Notes() {
  const {
    state: { notes },
  } = useNotes();
  const [searchQuery, setSearchQuery] = useState<string>("");

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
            return <NoteContainer note={note} key={note.id} />;
          })}
        </section>
        <AddNoteButton className="Notes__AddNoteButton" />
      </main>
    </div>
  );
}

export default Notes;
