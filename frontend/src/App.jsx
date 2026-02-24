import { useState } from "react";
import {Routes,Route} from "react-router";
import HomePage from "./pages/HomePage";
import CreateNote from "./pages/CreateNote";
import NoteInfo from "./pages/NoteInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        
      </Routes>
    </>
  )
}

export default App
