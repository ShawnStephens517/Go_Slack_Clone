import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Welcome to the Channel</h1>
            </Route>
          </Switch>
        </div>
      </Router>

      {/* React-Router ->Chat Screen*/}
    </div>
  );
}

export default App;
