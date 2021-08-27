import { useEffect, useState } from "react";

import { Note } from "../../apiResources";
import useNotes from "../../modules/notes/use";
import NoteContainer from "./notesGrid/NoteContainer";
import "./NotesGrid.scss";

export interface NotesGridProps {
  searchQuery: string;
}

function NotesGrid(props: NotesGridProps) {
  const {
    state: { notes },
  } = useNotes();
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);

  useEffect(() => {
    setFilteredNotes(filterNotes(notes, props.searchQuery));
  }, [notes, props.searchQuery]);

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
    <section className="NotesGrid">
      {filteredNotes.length !== 0 ? (
        filteredNotes.map((note: Note) => {
          return <NoteContainer note={note} key={note.id} />;
        })
      ) : (
        <p>Seems like there's nothing here...</p>
      )}
    </section>
  );
}

export default NotesGrid;
