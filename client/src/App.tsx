import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import NotesProvider from "./modules/notes/provider";
import Login from "./pages/Login";
import Notes from "./pages/Notes";

function App() {
  return (
    <NotesProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Notes />
            </Route>
          </Switch>
        </Router>
      </div>
    </NotesProvider>
  );
}

export default App;
