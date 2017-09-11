import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './store';
import reducer from './reducers'


const store = configureStore({});

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('app'));