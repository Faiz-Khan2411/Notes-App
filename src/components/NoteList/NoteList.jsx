import React from "react";
import "./noteList.css";
import NoteItem from "../NoteItem/NoteItem";

export default function NoteList(props) {
  return (
    <div className="notes">
      <NoteItem title={props.title} content={props.content} />
    </div>
  );
}
