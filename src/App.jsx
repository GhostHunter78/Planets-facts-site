import { useState } from "react";
import "./style.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="content"></div>
    </div>
  );
}

export default App;
