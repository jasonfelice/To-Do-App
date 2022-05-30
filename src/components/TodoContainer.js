/* eslint-disable no-param-reassign */
import React from 'react';
import Header from './Header';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: true,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: true,
        },
      ],
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  delTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <>
        <Header />
        <InputTodo />
        <TodosList
          handleChangeProps={this.handleChange}
          todos={todos}
          deleteTodoProps={this.delTodo}
        />
      </>
    );
  }
}

export default TodoContainer;
