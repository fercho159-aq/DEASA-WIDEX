import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Activity } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="container flex justify-between items-center">
          <div className="navbar-contact flex gap-md">
            <span className="flex items-center gap-sm"><Phone size={16} /> (55) 1234-5678</span>
            <span className="flex items-center gap-sm"><MapPin size={16} /> Sucursales en todo México</span>
          </div>
          <div className="navbar-socials">
            {/* Social icons can go here */}
          </div>
        </div>
      </div>
      <div className="navbar-main">
        <div className="container flex justify-between items-center">
          <Link to="/" className="navbar-logo">
            <img src="/logo.png" alt="Audífonos DEASA" className="navbar-logo-img" />

          </Link>

          <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>

          <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
            <li><Link to="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link></li>
            <li><Link to="/servicios" onClick={() => setIsOpen(false)}>Servicios</Link></li>
            <li><Link to="/optica" onClick={() => setIsOpen(false)}>Óptica</Link></li>
            <li><Link to="/distribuidores" onClick={() => setIsOpen(false)}>Distribuidores</Link></li>
            <li><Link to="/contacto" onClick={() => setIsOpen(false)} className="btn btn-secondary btn-sm text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all">Agendar Cita</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
