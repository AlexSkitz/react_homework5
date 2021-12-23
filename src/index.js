import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';
import ToDo from './Components/ToDo/ToDo'
import ToDoContentTable from './Components/ToDo/ToDoContentTable'
import {store} from './Store/index.js'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='todo' element={<ToDo />}>
            <Route path="home" element={<ToDoContentTable name={'Купить носки'} time={'На неделе'} />} />
            <Route path="work" element={<ToDoContentTable name='Сделать презентацию' time='через час' />} />
            <Route path="need" element={<ToDoContentTable name='Составить план' time='28.02.2014' />} />
            <Route path="next" element={<ToDoContentTable name='Купить форму' time='в начале месяца' />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
);

