
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Projects from './pages/projects/Project';
import Contact from './pages/contacts/Contact';
import Err404 from './pages/Err404';

import { Routes, Route} from "react-router-dom";


function App() {
  return (
    < >
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} /> 
       <Route path="/projects" element={<Projects />} /> 
       <Route path="/contact" element={<Contact />} /> 
       <Route path="*" element={<Err404 />} />
      </Routes>
    </>
    
  );
}

export default App;