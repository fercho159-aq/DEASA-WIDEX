import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Placeholder components for other pages to avoid errors until they are created
import About from './pages/About';
import Services from './pages/Services';
import Optics from './pages/Optics';
import Distributors from './pages/Distributors';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<About />} />
          <Route path="servicios" element={<Services />} />
          <Route path="optica" element={<Optics />} />
          <Route path="distribuidores" element={<Distributors />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
