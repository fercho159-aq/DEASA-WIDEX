import React from 'react';
import { Award, Heart, Users } from 'lucide-react';
import WhatsAppCTA from '../components/WhatsAppCTA';

const About = () => {
    return (
        <div className="about-page">
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center mb-xl">
                        <h1 className="section-title">Nuestra Historia</h1>
                        <p className="lead-text max-w-2xl mx-auto">
                            40 años de compromiso inquebrantable con la salud auditiva de México.
                        </p>
                    </div>

                    <div className="grid grid-2 gap-xl items-center">
                        <div>
                            <img
                                src="https://plus.unsplash.com/premium_photo-1726797723292-b2dc29e3dff2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGFwYXJhdG9zJTIwYXVkaXRpdm9zfGVufDB8fDB8fHww"
                                alt="Equipo médico"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="mb-md text-primary">Grupo Deasa Widex</h2>
                            <p className="mb-md">
                                Fundada con la visión de ofrecer soluciones auditivas de clase mundial, Audífonos DEASA se ha consolidado como un referente en el sector. Nuestra alianza con <strong>WIDEX</strong> nos permite traer a nuestros pacientes la tecnología más avanzada del mundo, directamente desde Dinamarca.
                            </p>
                            <p>
                                A lo largo de cuatro décadas, hemos evolucionado de ser un proveedor de aparatos auditivos a convertirnos en un centro integral de salud sensorial, incorporando servicios de óptica y un laboratorio propio de alta tecnología.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title text-center mb-xl">Nuestra Filosofía</h2>
                    <div className="grid grid-3 text-center">
                        <div className="p-lg">
                            <Award size={48} className="text-secondary mb-md mx-auto" />
                            <h3>Calidad Total</h3>
                            <p>No comprometemos la calidad. Desde el diagnóstico hasta el dispositivo final, buscamos la excelencia.</p>
                        </div>
                        <div className="p-lg">
                            <Heart size={48} className="text-secondary mb-md mx-auto" />
                            <h3>Trato Humano</h3>
                            <p>Entendemos que cada paciente es único. Ofrecemos un trato cálido, ético y personalizado.</p>
                        </div>
                        <div className="p-lg">
                            <Users size={48} className="text-secondary mb-md mx-auto" />
                            <h3>Profesionalismo</h3>
                            <p>Nuestro equipo está en constante capacitación para dominar las últimas tecnologías audiológicas.</p>
                        </div>
                    </div>
                </div>
            </section>

            <WhatsAppCTA message="Hola, me gustaría conocer más sobre su trayectoria y servicios." />
        </div>
    );
};

export default About;
