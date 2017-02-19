import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import image from '../images/example.jpg';

import menuData from './menu_data';

ReactDOM.render(
  <App menuData={menuData}/>,
  document.getElementById('root')
);
