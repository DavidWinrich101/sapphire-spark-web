
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/15551234567', '_blank');
  };

  return (
    <div 
      className="whatsapp-float"
      onClick={handleWhatsAppClick}
      role="button"
      tabIndex={0}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </div>
  );
};

export default WhatsAppFloat;
