import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Activity, Headphones, Settings, Eye } from 'lucide-react';
import WhatsAppCTA from '../components/WhatsAppCTA';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Banner */}
            <section className="hero-section">
                <div className="container hero-content text-center">
                    <h1 className="hero-title animate-fade-in">Nuevos Horizontes de Audición</h1>
                    <p className="hero-subtitle animate-fade-in">
                        Recupera la calidad de vida con la mejor tecnología auditiva.
                        <br />
                        <strong>Grupo Deasa Widex</strong>: 40 años trabajando por tu salud.
                    </p>
                    <div className="hero-actions animate-fade-in">
                        <Link to="/contacto" className="btn btn-primary">Agendar Cita Gratuita</Link>
                        <Link to="/servicios" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">Nuestros Servicios</Link>
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* Introduction */}
            <section className="section intro-section">
                <div className="container">
                    <div className="grid grid-2 items-center gap-xl">
                        <div className="intro-text">
                            <h2 className="section-title">Experiencia y Tecnología a tu Servicio</h2>
                            <p className="lead-text">
                                En <strong>Audífonos DEASA</strong>, no solo vendemos aparatos; facilitamos calidad de vida.
                                Como aliados estratégicos de <strong>WIDEX</strong>, ofrecemos sonido natural y tecnología danesa de vanguardia.
                            </p>
                            <p>
                                Nuestra trayectoria de 40 años nos respalda como una institución sólida y confiable.
                                Contamos con laboratorio propio para moldes y reparaciones, garantizando un servicio integral y rápido.
                            </p>
                            <Link to="/nosotros" className="btn btn-secondary mt-md">Conoce nuestra historia</Link>
                        </div>
                        <div className="intro-image-container relative">
                            <img
                                src="./images/widex-moment_product-range_flatlay_1920x1080.webp"
                                alt="Especialista en audición"
                                className="rounded-xl shadow-xl relative z-10 w-full object-cover h-[400px]"
                            />

                            <div className="experience-badge">
                                <Activity size={28} className="text-primary mb-xs" />
                                <div className="text-4xl font-bold text-primary mb-xs">40+</div>
                                <div className="text-sm text-gray-700 font-semibold">Años de Experiencia</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Summary */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-xl">Nuestros Servicios Destacados</h2>
                    <div className="grid grid-4">
                        <div className="service-card">
                            <Activity size={48} className="service-icon" />
                            <h3>Evaluación y Diagnóstico</h3>
                            <p>Exámenes precisos y audiometrías completas para entender tu salud auditiva.</p>
                            <Link to="/servicios" className="link-arrow">Saber más <ArrowRight size={16} /></Link>
                        </div>
                        <div className="service-card">
                            <Headphones size={48} className="service-icon" />
                            <h3>Auxiliares Auditivos</h3>
                            <p>Venta y adaptación de la mejor tecnología Widex con sonido natural.</p>
                            <Link to="/servicios" className="link-arrow">Ver productos <ArrowRight size={16} /></Link>
                        </div>
                        <div className="service-card">
                            <Settings size={48} className="service-icon" />
                            <h3>Servicio Técnico</h3>
                            <p>Laboratorio propio para reparaciones, mantenimiento y elaboración de moldes.</p>
                            <Link to="/servicios" className="link-arrow">Servicios <ArrowRight size={16} /></Link>
                        </div>
                        <div className="service-card">
                            <Eye size={48} className="service-icon" />
                            <h3>Óptica</h3>
                            <p>Cuidado integral de tu salud sensorial: lentes y exámenes visuales.</p>
                            <Link to="/optica" className="link-arrow">Ir a Óptica <ArrowRight size={16} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section">
                <div className="container">
                    <h2 className="section-title text-center mb-xl">Historias de Quienes Vuelven a Escuchar</h2>
                    <div className="grid grid-3">
                        <div className="testimonial-card">
                            <div className="stars text-warning mb-sm">
                                <Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} />
                            </div>
                            <p className="testimonial-text">"La atención fue excelente. Volver a escuchar las voces de mis nietos no tiene precio. Gracias DEASA."</p>
                            <p className="testimonial-author">- María G.</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars text-warning mb-sm">
                                <Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} />
                            </div>
                            <p className="testimonial-text">"Su servicio técnico es muy rápido. Me arreglaron mi auxiliar en el mismo día. Muy recomendados."</p>
                            <p className="testimonial-author">- Roberto L.</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars text-warning mb-sm">
                                <Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} />
                            </div>
                            <p className="testimonial-text">"Me asesoraron con mucha paciencia para elegir el mejor aparato para mí. Se nota la experiencia."</p>
                            <p className="testimonial-author">- Carmen R.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section text-center">
                <div className="container">
                    <h2 className="text-white mb-md">Que tu audición no te limite</h2>
                    <p className="text-white mb-lg text-xl">Agenda hoy tu asesoría gratuita y descubre cómo podemos ayudarte.</p>
                    <Link to="/contacto" className="btn btn-secondary btn-lg">Agendar Cita Ahora</Link>
                </div>
            </section>

            <WhatsAppCTA message="Hola, me gustaría agendar una cita para evaluación auditiva." />
        </div>
    );
};

export default Home;
