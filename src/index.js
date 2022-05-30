import React from 'react';
import ReactDOM from 'react-dom';
// Component
import TodoContainer from './components/TodoContainer';

// Style
import './app.css';

ReactDOM.render(
  <>
    <React.StrictMode>
      <TodoContainer />
    </React.StrictMode>
  </>, document.getElementById('root'),
);
