import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import App from './App';
import Antd from './Antd';
import ReduxT from './ReduxT';
import { Provider  } from 'react-redux';
import store from './redux';

const ReduxPage = (
  <Provider store={store}>
    <TodoList />
    <App />
    <Antd/>
    <ReduxT />
  </Provider>
)
/*
ReactDOM.render(
  <React.StrictMode>
    <TodoList />
    <App />
    <Antd/>
    <ReduxPage/>
  </React.StrictMode>,
  document.getElementById('root')
);*/

ReactDOM.render(ReduxPage, document.getElementById('root'));
