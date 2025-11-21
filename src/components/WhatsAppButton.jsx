import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = '525541903849';
    const message = 'Hola, me gustaría recibir más información sobre sus servicios y agendar una cita.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="whatsapp-tooltip">¡Agenda tu cita aquí!</span>
        </a>
    );
};

export default WhatsAppButton;
