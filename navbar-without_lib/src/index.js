import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './view/Home/Home';
import About from './view/About/About' 
import Contact from './view/Contact/Contact'

const root = ReactDOM.createRoot(document.getElementById('root'));
const currentPath = window.location.pathname

if(currentPath=='/'){
   root.render(<Home/>)
}else if(currentPath=='/about'){
   root.render(<About/>)
}else if(currentPath =='/contact'){
  root.render(<Contact/>)
}
