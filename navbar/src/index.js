import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';

import Home from './view/Home/Home';
import About from './view/About/About';
import Contact from './view/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
   </BrowserRouter>
);

