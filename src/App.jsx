import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login/Login";
import Signup from "../src/pages/Signup/Signup";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import CreateArea from "./components/CreateArea/CreateArea";
import NoteItem from "./components/NoteItem/NoteItem";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-area" element={<CreateArea />} />
        <Route path="/noteItem" element={<NoteItem />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
