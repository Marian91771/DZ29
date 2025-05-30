import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import counterReducer from './store/counterSlice.js'
import ToDoReducer from './store/ToDoSlice.js'


const store = configureStore({
  reducer: {
  counter: counterReducer,
  ToDos: ToDoReducer,
}
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
)
