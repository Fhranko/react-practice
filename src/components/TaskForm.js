import React, { Component } from "react";

export default class TaskForm extends Component {
  state = {
    title: "",
    description: ""
  };

  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} action="">
        <input
          name="title"
          type="text"
          placeholder="Write a Task"
          onChange={this.onChange}
          value={this.state.title}
        />
        <br />
        <textarea
          name="description"
          placeholder="White a Description"
          onChange={this.onChange}
          value={this.state.description}
        ></textarea>
        <input type="submit" />
      </form>
    );
  }
}
