/* eslint-disable */

import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}></TodoItem>
        ))}
      </ul>
    );
  }
}
