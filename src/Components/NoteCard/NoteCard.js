import React, { Component } from "react";
import NoteItem from "../NoteItem/NoteItem";
import { fetchDeleteNote } from "../../Api/fetch/fetchDeleteNote";

class NoteCard extends Component {
  state = { title: "", delete: false };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  renderListItems = () => {
    const { tasks } = this.props.data;
    return tasks.map(task => <NoteItem key={task.id} tasks={task} />);
  };

  handleMouseOver = () => {
    this.setState({ delete: !this.state.delete });
  };

  handleDelete = noteId => {
    fetchDeleteNote(noteId)
  };

  render() {
    const { title, id } = this.props.data;

    return (
      <div className="note-card-component">
        <section className="note-card">
          <input
            type="text"
            className="note-title"
            value={title}
            onChange={this.handleChange}
            placeholder="Title"
            name="title"
          />
          {this.renderListItems()}
          <section className="note-options">
            <input type="submit" className="btn" value="Save" />
            {this.state.delete === true ? (
              <div
                className="red-delete-btn"
                onMouseOver={this.handleMouseOver}
                onMouseLeave={this.handleMouseOver}
                onClick={() => this.handleDelete(id)}
              />
            ) : (
              <div className="delete-btn" onMouseOver={this.handleMouseOver} />
            )}
          </section>
        </section>
      </div>
    );
  }
}

export default NoteCard;
