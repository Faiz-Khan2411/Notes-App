import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import NoteList from "../../components/NoteList/NoteList";
import CreateArea from "../../components/CreateArea/CreateArea";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    if (newNote.title === "" && newNote.content === "") return;
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div className="dashboard-page">
      <main className="main-container">
        <Sidebar open={open} />

        <section className="right-container">
          <Header open={open} setOpen={setOpen} />
          <CreateArea onAdd={addNote} />
          {notes.map((note, index) => {
            return <NoteList title={note.title} content={note.content} />;
          })}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
