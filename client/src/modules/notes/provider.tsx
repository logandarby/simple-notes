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

  const createNote = async () => {
    const noteRequest = { title: "", contents: "" };
    return await fetch("http://localhost:4000/notes", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteRequest),
    })
      .then((res) => res.json())
      .then((newNote: Note) => {
        setNotes([newNote, ...notes]);
        return newNote;
      });
  };

  const updateNote = async (updatedNote: Note) => {
    console.log("updating");
    const res = await fetch(`http://localhost:4000/notes/${updatedNote.id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedNote),
    });
    console.log(res);
    switch (res.status) {
      case 400:
        console.log("Update Note: Bad Request");
        break;
      case 401:
        console.log("Update Note: Note was not found");
        break;
      case 200:
        const newNoteArray = notes.map((originalNote) =>
          updatedNote.id === originalNote.id ? updatedNote : originalNote
        );
        setNotes([...newNoteArray]);
        break;
    }
  };

  const deleteNote = async (deletedNote: Note) => {
    console.log("deleting note");
    const res = await fetch(`http://localhost:4000/notes/${deletedNote.id}`, {
      method: "DELETE",
      credentials: "include",
    });
    console.log(res);
    switch (res.status) {
      case 400:
        console.log("Delete Note: Invalid request (Note ID)");
        break;
      case 404:
        console.log("Delete Note: Note was not found");
        break;
      case 200:
        console.log("Note successfully deleted");
        let newNotesArray = notes;
        newNotesArray = newNotesArray.filter(
          (originalNote) => originalNote.id !== deletedNote.id
        );
        console.log(newNotesArray);
        setNotes([...newNotesArray]);
        break;
    }
  };

  const value = {
    state: { notes },
    actions: { createNote, updateNote, deleteNote },
  };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export default NotesProvider;
