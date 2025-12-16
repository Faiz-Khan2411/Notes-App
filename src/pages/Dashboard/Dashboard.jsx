import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import CreateArea from "../../components/CreateArea/CreateArea";
import NoteItem from "../../components/NoteItem/NoteItem";
import { format } from "date-format-parse";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingtNote] = useState({});

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  function addNote(newNote) {
    if (newNote.title === "" && newNote.content === "") return;
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteItem(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="dashboard-page">
      <main className="main-container">
        <Sidebar open={open} />

        <section className="right-container">
          <Header open={open} setOpen={setOpen} />
          <section className="notes-section">
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => {
              return (
                <NoteItem
                  key={index}
                  id={index}
                  title={note.title}
                  content={note.content}
                  onDelete={deleteItem}
                />
              );
            })}
          </section>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
