import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Converter from "./components/converter";

function App() {
  return (
    <div >
     <Converter/>
    </div>
  );
}

export default App;
