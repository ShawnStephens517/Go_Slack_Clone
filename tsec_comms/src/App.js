import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <h1>TSecLabs Community Chat</h1>
      {/* Header */}
      <Header />
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* React-Router ->Chat Screen*/}
      </div>
    </div>
  );
}

export default App;
