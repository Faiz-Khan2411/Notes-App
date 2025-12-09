import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login/Login";
import Signup from "../src/pages/Signup/Signup";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import CreateArea from "./components/CreateArea/CreateArea";
import NoteItem from "./components/NoteItem/NoteItem";
import NoteList from "./components/NoteList/NoteList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-area" element={<CreateArea />} />
        <Route path="/noteItem" element={<NoteItem />} />
        <Route path="/noteList" element={<NoteList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
