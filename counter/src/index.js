import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Counter from './counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
 root.render(
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Counter/>}></Route>
        </Routes>
    </BrowserRouter>)

 