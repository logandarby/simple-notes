import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import NotesProvider from "./modules/notes/provider";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import NoteModalProvider from "./modules/noteModal/provider";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <NotesProvider>
              <NoteModalProvider>
                <Notes />
              </NoteModalProvider>
            </NotesProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
