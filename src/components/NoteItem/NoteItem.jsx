import React from "react";
import "./noteItem.css";
import deleteButton from "../../assets/trash-fill.svg";
import createButton from "../../assets/plus.svg";

function NoteItem(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <div className="note-header">
        <div className="note-title">{props.title}</div>
        <div className="note-icons">
          <button onClick={handleClick}>
            <img src={deleteButton} alt="delete button" />
          </button>
        </div>
      </div>
      <div className="content">{props.content}</div>
    </div>
  );
}

export default NoteItem;
