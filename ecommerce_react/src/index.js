import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'mdbreact/dist/mdbreact.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'mdbreact/dist/mdbreact';
import 'bootstrap-social/bootstrap-social.css';
import App from './app/App.Routes';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import 'jquery/dist/jquery.js';
import 'jquery/dist/jquery.min.js';
import 'jquery/dist/jquery.slim.min.js';
import 'jspdf/dist/jspdf.min.js';
import 'jspdf/dist/jspdf.debug.js'; 
import 'html2canvas/dist/html2canvas.js';
import 'html2canvas/dist/html2canvas.min.js';
import '../src/assets/css/custome.css';
import './assets/js/vanilla.js';

window.axios = axios;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store = { store }>
  	<App/>
  </Provider>,
  document.querySelector('#root')
);
registerServiceWorker();
