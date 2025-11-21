import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const whatsappNumber = '525541903849';
    const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
    const email = 'contacto@deasa.com';

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <h1 className="text-5xl font-bold mb-md animate-fade-in">Contáctanos</h1>
                    <p className="text-xl max-w-3xl animate-fade-in">
                        Estamos listos para <strong>escucharte y asesorarte</strong>. Agenda tu cita hoy mismo.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container">

                    {/* Contact Cards */}
                    <div className="contact-grid">

                        {/* Phone Card */}
                        <div className="contact-card">
                            <div className="contact-icon">
                                <Phone size={32} />
                            </div>
                            <h3>Teléfono</h3>
                            <p className="contact-detail">55 4190 3849</p>
                            <div className="contact-hours">
                                <Clock size={16} />
                                <span>Lunes a Viernes: 9:00 AM - 7:00 PM</span>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="contact-card">
                            <div className="contact-icon">
                                <Mail size={32} />
                            </div>
                            <h3>Correo Electrónico</h3>
                            <p className="contact-detail">{email}</p>
                            <a
                                href={`mailto:${email}`}
                                className="contact-link"
                            >
                                Enviar correo
                            </a>
                        </div>

                        {/* Location Card */}
                        <div className="contact-card">
                            <div className="contact-icon">
                                <MapPin size={32} />
                            </div>
                            <h3>Ubicación Principal</h3>
                            <p className="contact-detail">
                                Av. Insurgentes Sur 123<br />
                                Col. Roma, Ciudad de México
                            </p>
                        </div>

                    </div>

                    {/* CTA Buttons */}
                    <div className="cta-section">
                        <h2>¿Listo para mejorar tu audición?</h2>
                        <p>Contáctanos ahora por tu canal preferido</p>
                        <div className="cta-buttons">
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-cta whatsapp"
                            >
                                <MessageCircle size={24} />
                                <div>
                                    <span className="btn-label">Escríbenos por</span>
                                    <span className="btn-title">WhatsApp</span>
                                </div>
                            </a>
                            <a
                                href={`mailto:${email}`}
                                className="btn-cta email"
                            >
                                <Mail size={24} />
                                <div>
                                    <span className="btn-label">Envíanos un</span>
                                    <span className="btn-title">Correo</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Info Banner */}
                    <div className="info-banner">
                        <h3>¿Por qué elegirnos?</h3>
                        <div className="info-features">
                            <div className="info-item">
                                <strong>40+ años</strong>
                                <span>de experiencia</span>
                            </div>
                            <div className="info-item">
                                <strong>Tecnología WIDEX</strong>
                                <span>de vanguardia</span>
                            </div>
                            <div className="info-item">
                                <strong>Atención personalizada</strong>
                                <span>por especialistas</span>
                            </div>
                            <div className="info-item">
                                <strong>Laboratorio propio</strong>
                                <span>para reparaciones</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
