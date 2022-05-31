import React from 'react';
import ReactDOM from 'react-dom/client';
// Component
import TodoContainer from './components/TodoContainer';

// Style
import './app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <React.StrictMode>
      <TodoContainer />
    </React.StrictMode>
  </>,
);
