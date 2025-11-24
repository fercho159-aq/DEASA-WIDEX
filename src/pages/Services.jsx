import React from 'react';
import { Activity, Headphones, Settings, Eye, CheckCircle2 } from 'lucide-react';
import WhatsAppCTA from '../components/WhatsAppCTA';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <section className="services-hero">
                <div className="container">
                    <h1 className="text-5xl font-bold mb-md animate-fade-in">Nuestros Servicios</h1>
                    <p className="text-xl max-w-3xl animate-fade-in">
                        Soluciones integrales para tu <strong>salud auditiva y visual</strong> con tecnología de vanguardia.
                    </p>
                </div>
            </section>

            <section className="section services-grid">
                <div className="container">
                    {/* Evaluación y Diagnóstico */}
                    <div className="service-card-modern left">
                        <div className="card-icon">
                            <Activity size={48} />
                        </div>
                        <div className="card-content">
                            <h2>Evaluación y Diagnóstico</h2>
                            <p>
                                Realizamos <strong>estudios completos</strong> para determinar con precisión el estado de tu audición.
                                Nuestro equipo de diagnóstico <strong className="text-primary">Interacoustics</strong> garantiza <strong>resultados fiables</strong>.
                            </p>
                            <div className="features-grid">
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Examen Diagnóstico</strong> Completo</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Audiometría</strong> vía aérea y vía ósea</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Prueba</strong> de auxiliares</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Asesoría</strong> personalizada</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-image">
                            <img
                                src="./images/filters_quality(40).webp"
                                alt="Evaluación auditiva profesional"
                            />
                        </div>
                    </div>

                    {/* Productos y Venta */}
                    <div className="service-card-modern right">
                        <div className="card-icon">
                            <Headphones size={48} />
                        </div>
                        <div className="card-content">
                            <h2>Productos y Venta</h2>
                            <p>
                                Somos <strong>distribuidores autorizados</strong> de <strong className="text-primary">WIDEX</strong>, ofreciendo
                                <strong> auxiliares auditivos premium</strong> que se adaptan a tu estilo de vida.
                            </p>
                            <div className="features-grid">
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Auxiliares Auditivos</strong> premium</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Modelos Recargables</strong> Bluetooth</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Accesorios</strong> TV Play, Com-Dex</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Pilas y limpieza</strong> especializados</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-image">
                            <img
                                src="./images/widex-moment_product-range_flatlay_1920x1080.webp"
                                alt="Auxiliares auditivos Widex"
                            />
                        </div>
                    </div>

                    {/* Servicio Técnico */}
                    <div className="service-card-modern left">
                        <div className="card-icon">
                            <Settings size={48} />
                        </div>
                        <div className="card-content">
                            <h2>Servicio Técnico y Laboratorio</h2>
                            <p>
                                Contamos con <strong>laboratorio propio</strong> equipado para <strong>reparaciones y mantenimiento</strong>
                                de tus aparatos auditivos, asegurando su <strong>óptimo funcionamiento</strong>.
                            </p>
                            <div className="features-grid">
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Reparación</strong> todas las marcas</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Mantenimiento</strong> especializado</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Moldes a medida</strong> en laboratorio</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Refacciones</strong> originales</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-image">
                            <img
                                src="./images/widex-moment_mric_dinning-table_v3_1920x1080.webp"
                                alt="Laboratorio de reparación profesional"
                            />
                        </div>
                    </div>

                    {/* Óptica */}
                    <div className="service-card-modern right">
                        <div className="card-icon">
                            <Eye size={48} />
                        </div>
                        <div className="card-content">
                            <h2>Óptica</h2>
                            <p>
                                Cuidamos de tu <strong>salud visual</strong> con <strong>exámenes profesionales</strong> y una gran variedad de
                                armazones y lentes de las <strong>mejores marcas</strong>.
                            </p>
                            <div className="features-grid">
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Examen computarizado</strong> de vista</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Lentes de contacto</strong> personalizados</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Armazones de marca</strong> reconocidas</span>
                                </div>
                                <div className="feature-item">
                                    <CheckCircle2 size={18} />
                                    <span><strong>Lentes progresivos</strong> alta calidad</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-image">
                            <img
                                src="https://images.unsplash.com/photo-1599243315159-faa0eac09ec1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9wdGljYXxlbnwwfHwwfHx8MA%3D%3D"
                                alt="Examen de la vista profesional"
                            />
                        </div>
                    </div>

                </div>
            </section>
            <WhatsAppCTA message="Hola, me gustaría conocer más sobre sus servicios de audiología." />
        </div>
    );
};

export default Services;
