import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";
import rootReducer from './module/allReducer';
import {createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk" 
        
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
