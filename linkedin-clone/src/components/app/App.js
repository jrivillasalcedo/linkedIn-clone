import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
