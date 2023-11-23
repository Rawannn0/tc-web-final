import logo from './logo.svg';
import './Contact Us/contactus.css';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import Contactus from './Contact Us/contactus';
import { useNavigate } from 'react-router-dom';
 
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
 
   
  );
}
 
export default App;
