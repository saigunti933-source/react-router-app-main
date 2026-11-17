
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Students from './pages/Students';
import StudentDetails from './pages/StudentDetails';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/students" element={<Students />} />
          <Route path="/details/:id" element={<StudentDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
