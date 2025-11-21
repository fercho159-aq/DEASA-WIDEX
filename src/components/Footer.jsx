import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="grid grid-4">
                    <div className="footer-col">
                        <h3>Audífonos DEASA</h3>
                        <p>40 años trabajando por tu salud auditiva. Tecnología de vanguardia y atención personalizada.</p>
                        <div className="social-icons flex gap-md mt-md">
                            <a href="#"><Facebook /></a>
                            <a href="#"><Instagram /></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Enlaces Rápidos</h4>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/nosotros">Nosotros</Link></li>
                            <li><Link to="/servicios">Servicios</Link></li>
                            <li><Link to="/optica">Óptica</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Servicios</h4>
                        <ul>
                            <li>Examen Diagnóstico</li>
                            <li>Venta de Auxiliares</li>
                            <li>Reparación y Moldes</li>
                            <li>Equipo Médico</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contacto</h4>
                        <ul className="contact-list">
                            <li><Phone size={16} /> 55 4190 3849</li>
                            <li><Mail size={16} /> contacto@deasa.com</li>
                            <li><MapPin size={16} /> Ciudad de México</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <p>&copy; {new Date().getFullYear()} Audífonos DEASA. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
