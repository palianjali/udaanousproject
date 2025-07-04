import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Landing from './component/Landing';
import OurTeam from './component/OurTeam';
import Media from './component/Media';
import VolunteerPage from './component/VolunteerPage';
import { Route, Routes } from 'react-router-dom';
import Email from './component/Email';
import ContactPage from './component/ContactPage';
import About from './component/About';
import ScrollToTop from './component/ScrollToTop';
import JoinUs from './component/JoinUs';

function App() {
  return (
    <div className="App bg-white text-gray-900 pt-26">
      <Navbar />
      <ScrollToTop />
      {/* Routes start here */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/media" element={<Media />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<Email />} />
        <Route path="/join" element={<JoinUs />} />
      </Routes>
    </div>
    
  );
}

export default App;