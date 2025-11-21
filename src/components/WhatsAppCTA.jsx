import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppCTA.css';

const WhatsAppCTA = ({ message = 'Hola, me gustaría obtener más información sobre sus servicios.' }) => {
    const whatsappNumber = '525512345678'; // Replace with actual number
    const encodedMessage = encodeURIComponent(message);

    return (
        <section className="whatsapp-cta-section">
            <div className="container">
                <div className="whatsapp-cta-card">
                    <div className="cta-icon-wrapper">
                        <MessageCircle size={48} />
                    </div>
                    <div className="cta-content">
                        <h2>¿Tienes dudas? ¡Contáctanos ahora!</h2>
                        <p>Estamos listos para atenderte por WhatsApp y resolver todas tus preguntas.</p>
                    </div>
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp-cta"
                    >
                        <MessageCircle size={24} />
                        <span>Chatear por WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhatsAppCTA;
