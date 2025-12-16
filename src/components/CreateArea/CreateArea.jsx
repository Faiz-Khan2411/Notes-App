import React, { useState } from "react";
import "../../index.css";
import "./createArea.css";
import createButton from "../../assets/plus.svg";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="create-area">
      <div className="note-header">
        <input
          className="note-title"
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
      </div>
      <textarea
        className="content"
        name="content"
        rows={7}
        onChange={handleChange}
        placeholder="Description"
        value={note.content}
      ></textarea>
      <button type="submit" id="create-btn" onClick={handleClick}>
        <img src={createButton} alt="create icon" />
      </button>
    </div>
  );
}

export default CreateArea;
