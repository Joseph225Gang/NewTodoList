import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import App from './App';
import Antd from './Antd'

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
    <App />
    <Antd/>
  </React.StrictMode>,
  document.getElementById('root')
);
