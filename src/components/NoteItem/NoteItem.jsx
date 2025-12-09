import React from "react";
import "./noteItem.css";
import editButton from "../../assets/pencil-square.svg";
import deleteButton from "../../assets/trash-fill.svg";
import createButton from "../../assets/plus.svg";

function NoteItem(props) {
  return (
    <div className="note card">
      <div className="note-header">
        <div className="note-title">{props.title}</div>
        <div className="note-icons">
          <img src={editButton} alt="edit button" />
          <img src={deleteButton} alt="delete button" />
        </div>
      </div>
      <div className="content">{props.content}</div>
    </div>
  );
}

export default NoteItem;
