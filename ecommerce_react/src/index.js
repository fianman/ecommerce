import React from 'react';
import ReactDOM from 'react-dom';
import 'mdbreact/dist/css/mdb.css';
import 'mdbreact/dist/mdbreact.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'mdbreact/dist/mdbreact';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css'
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
require ('./assets/js/vanilla.js');
// import '../src/assets/js/jquery-3.3.1.js';
// import '../src/assets/js/jquery-3.3.1.min.js';


window.axios = axios;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store = { store }>
  	<App/>
  </Provider>,
  document.querySelector('#root')
);
registerServiceWorker();
