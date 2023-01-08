import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routing from "./routing/Routing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
