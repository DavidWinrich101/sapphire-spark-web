
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import UpcomingServices from "@/components/UpcomingServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If user comes to auth page while already logged in, redirect to home
    if (user && window.location.pathname === '/auth') {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20"> {/* Add padding to account for fixed navigation */}
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <UpcomingServices />
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  );
};

export default Index;
