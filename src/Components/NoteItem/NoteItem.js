import React, { Component } from "react";
// import "./NoteItem.scss";

class NoteItem extends Component {
  render() {
    return (
      <div className="note-item-component">
        <input type="checkbox" />
        <input type="text" placeholder="List Item" className="list-item"/>
      </div>
    );
  }
}

export default NoteItem;
