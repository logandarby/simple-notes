import { useState } from "react";

import "./Notes.scss";
import Header from "./notes/Header";
import SearchBar from "./notes/SearchBar";
import AddNoteButton from "./notes/AddNoteButton";
import NotesGrid from "./notes/NotesGrid";

function Notes() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="Notes">
      <Header />
      <main>
        <SearchBar
          className="Notes__SearchBar"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <NotesGrid searchQuery={searchQuery} />
        <AddNoteButton className="Notes__AddNoteButton" />
      </main>
    </div>
  );
}

export default Notes;
