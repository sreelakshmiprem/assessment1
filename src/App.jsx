import React from 'react';
import Nav1 from "./Units/Nav1";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Addbloglink from './pages/Addbloglink';

export default function App(){
return (
    <div>
      <Nav1></Nav1>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addbloglink" element={<Addbloglink />} />
        
       </Routes>
    </div>
 );
};

