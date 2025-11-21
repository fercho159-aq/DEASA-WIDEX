import React from 'react';
import { MapPin, Phone, Mail, Building2, CheckCircle2 } from 'lucide-react';
import WhatsAppCTA from '../components/WhatsAppCTA';
import './Distributors.css';

const Distributors = () => {
    const locations = [
        {
            state: 'Michoacán',
            cities: ['Morelia', 'Uruapan', 'Zamora'],
            highlight: true
        },
        {
            state: 'Chiapas',
            cities: ['Tuxtla Gutiérrez', 'San Cristóbal de las Casas']
        },
        {
            state: 'Jalisco',
            cities: ['Guadalajara', 'Zapopan']
        },
        {
            state: 'Guanajuato',
            cities: ['León', 'Irapuato']
        },
        {
            state: 'San Luis Potosí',
            cities: ['San Luis Potosí']
        },
    ];

    return (
        <div className="distributors-page">
            {/* Hero Section */}
            <section className="distributors-hero">
                <div className="container">
                    <h1 className="text-5xl font-bold mb-md animate-fade-in">Distribuidores Autorizados</h1>
                    <p className="text-xl max-w-3xl animate-fade-in">
                        Encuentra al <strong>especialista más cercano</strong> a ti. Contamos con una <strong>red de médicos y sucursales</strong> en todo el país.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container">

                    {/* Benefits Section */}
                    <div className="benefits-section">
                        <h2 className="section-title text-center mb-lg">¿Por qué elegir nuestros distribuidores?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <CheckCircle2 size={32} className="benefit-icon" />
                                <h3>Certificación Oficial</h3>
                                <p>Todos nuestros distribuidores están <strong>certificados y autorizados</strong> por WIDEX</p>
                            </div>
                            <div className="benefit-card">
                                <CheckCircle2 size={32} className="benefit-icon" />
                                <h3>Atención Profesional</h3>
                                <p>Personal <strong>capacitado y especializado</strong> en salud auditiva</p>
                            </div>
                            <div className="benefit-card">
                                <CheckCircle2 size={32} className="benefit-icon" />
                                <h3>Garantía de Calidad</h3>
                                <p>Productos <strong>originales</strong> con garantía del fabricante</p>
                            </div>
                        </div>
                    </div>

                    {/* Locations Section */}
                    <div className="locations-section">
                        <h2 className="section-title text-center mb-xl">Nuestras Ubicaciones</h2>
                        <div className="locations-grid">
                            {locations.map((loc, index) => (
                                <div
                                    key={index}
                                    className={`location-card ${loc.highlight ? 'featured' : ''}`}
                                >
                                    {loc.highlight && (
                                        <div className="featured-badge">
                                            <Building2 size={16} />
                                            <span>Matriz</span>
                                        </div>
                                    )}
                                    <div className="location-header">
                                        <div className="location-icon">
                                            <MapPin size={28} />
                                        </div>
                                        <h3>{loc.state}</h3>
                                    </div>
                                    <div className="location-cities">
                                        {loc.cities.map((city, idx) => (
                                            <div key={idx} className="city-item">
                                                <CheckCircle2 size={16} />
                                                <span>{city}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {loc.highlight && (
                                        <div className="location-contact">
                                            <div className="contact-item">
                                                <Phone size={14} />
                                                <span>Contacto disponible</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="distributors-cta">
                        <div className="cta-content">
                            <Mail size={48} className="cta-icon" />
                            <h2>¿Quieres ser distribuidor autorizado?</h2>
                            <p>
                                Si estás interesado en formar parte de nuestra <strong>red de distribuidores</strong>,
                                contáctanos para conocer los requisitos y beneficios.
                            </p>
                            <a href="/contacto" className="btn btn-secondary btn-lg">Contactar</a>
                        </div>
                    </div>

                </div>
            </section>

            <WhatsAppCTA message="Hola, me gustaría información sobre distribuidores en mi zona." />
        </div>
    );
};

export default Distributors;
