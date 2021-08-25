import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import NotesProvider from "./modules/notes/provider";
import Login from "./pages/Login";
import Notes from "./pages/Notes";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <NotesProvider>
              <Notes />
            </NotesProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
