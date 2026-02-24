import { useState } from "react";
import {Routes,Route} from "react-router";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage";
import CreateNote from "./pages/CreateNote";
import NoteInfo from "./pages/NoteInfo";

function App() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreateNote/>}/>
        <Route path="/note/:id" element={<NoteInfo/>}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
