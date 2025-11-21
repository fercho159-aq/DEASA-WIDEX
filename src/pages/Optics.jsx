import React from 'react';
import { Eye, Glasses, Sparkles, CheckCircle2, Award, Clock } from 'lucide-react';
import WhatsAppCTA from '../components/WhatsAppCTA';
import './Optics.css';

const Optics = () => {
    return (
        <div className="optics-page">
            {/* Hero Section */}
            <section className="optics-hero">
                <div className="container">
                    <h1 className="text-5xl font-bold mb-md animate-fade-in">Óptica y Salud Visual</h1>
                    <p className="text-xl max-w-3xl animate-fade-in">
                        Cuidamos tus sentidos de manera integral. <strong>Visión clara, vida plena.</strong>
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container">

                    {/* Introduction Card */}
                    <div className="intro-card">
                        <div className="intro-content">
                            <h2>Tu Salud Visual en Manos Expertas</h2>
                            <p>
                                Entendemos que la <strong>audición y la visión</strong> son fundamentales para tu conexión con el mundo.
                                Por eso, hemos integrado servicios de <strong>óptica de alta calidad</strong> para ofrecerte una
                                <strong> atención completa y profesional</strong>.
                            </p>
                            <div className="intro-features">
                                <div className="intro-feature">
                                    <Award size={24} className="feature-icon" />
                                    <div>
                                        <strong>Marcas Premium</strong>
                                        <span>Las mejores marcas del mercado</span>
                                    </div>
                                </div>
                                <div className="intro-feature">
                                    <Clock size={24} className="feature-icon" />
                                    <div>
                                        <strong>Servicio Rápido</strong>
                                        <span>Entrega en tiempo récord</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="intro-image">
                            <img
                                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Óptica profesional"
                            />
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="optics-services">
                        <h2 className="section-title text-center mb-xl">Nuestros Servicios de Óptica</h2>

                        <div className="services-row">
                            {/* Examen Visual */}
                            <div className="optics-service-card">
                                <div className="service-card-icon">
                                    <Eye size={40} />
                                </div>
                                <h3>Examen de la Vista</h3>
                                <p>
                                    <strong>Evaluación binocular completa</strong> con tecnología computarizada de última generación
                                    para detectar problemas refractivos y garantizar tu salud visual.
                                </p>
                                <ul className="service-features">
                                    <li>
                                        <CheckCircle2 size={16} />
                                        <span><strong>Examen computarizado</strong> preciso</span>
                                    </li>
                                    <li>
                                        <CheckCircle2 size={16} />
                                        <span><strong>Detección temprana</strong> de problemas</span>
                                    </li>
                                    <li>
                                        <CheckCircle2 size={16} />
                                        <span><strong>Asesoría profesional</strong> personalizada</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Lentes y Armazones */}
                            <div className="optics-service-card">
                                <div className="service-card-icon">
                                    <Glasses size={40} />
                                </div>
                                <h3>Lentes y Armazones</h3>
                                <p>
                                    <strong>Gran variedad de estilos</strong> y marcas de prestigio internacional con la
                                    <strong> mejor tecnología en micas</strong> para todo tipo de necesidades visuales.
                                </p>
                                <ul className="service-features">
                                    <li>
                                        <CheckCircle2 size={16} />
                                        <span><strong>Armazones de marca</strong> reconocidas</span>
                                    </li>
                                    <li>
                                        <CheckCircle2 size={16} />
                                        <span><strong>Lentes progresivos</strong> y bifocales</span>
                                    </li>
                                    <li>
                                        <CheckCircle2 size={16} />
                                        <span><strong>Tratamientos especiales</strong> antirreflejante</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Lentes de Contacto */}
                            <div className="optics-service-card">
                                <div className="service-card-icon">
                                    <Sparkles size={40} />
                                </div>
                                <h3>Lentes de Contacto</h3>
                                <p>
                                    <strong>Adaptación personalizada</strong> de lentes de contacto con seguimiento profesional
                                    para garantizar tu <strong>comodidad y salud ocular</strong>.
                                </p>
                                <ul className="service-features">
                                    <li>
                                        <CheckCircle2 size={16} />
                                        <span><strong>Adaptación profesional</strong> guiada</span>
                                    </li>
                                    <li>
                                        <CheckCircle2 size={16} />
                                        <span><strong>Lentes desechables</strong> diarios/mensuales</span>
                                    </li>
                                    <li>
                                        <CheckCircle2 size={16} />
                                        <span><strong>Seguimiento continuo</strong> incluido</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="optics-cta">
                        <div className="cta-content">
                            <h2>¿Listo para ver el mundo con claridad?</h2>
                            <p>Agenda tu examen de la vista hoy mismo y descubre cómo podemos mejorar tu visión.</p>
                            <a href="/contacto" className="btn btn-secondary btn-lg">Agendar Cita</a>
                        </div>
                    </div>

                </div>
            </section>

            <WhatsAppCTA message="Hola, me gustaría agendar un examen de la vista." />
        </div>
    );
};

export default Optics;
