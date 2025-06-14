
import { Sparkles, Phone, Mail, MapPin, Instagram, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-slate-700 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-slate-600 rounded-lg transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-bold font-playfair text-white">S</span>
              </div>
              <div>
                <h3 className="font-bold font-playfair text-xl text-white">Sapphire Spark</h3>
                <p className="text-sm text-slate-400">Cleaning Services</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Flawless Spaces, Sapphire Shine.
            </p>
            <div className="flex items-center text-slate-300">
              <Sparkles className="h-5 w-5 mr-3" />
              <span className="text-sm">Premium Cleaning Excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Our Services</h4>
            <ul className="space-y-3 text-slate-300">
              {[
                "Home Cleaning",
                "Office Cleaning", 
                "Deep Cleaning",
                "Post-Construction",
                "Bags & Shoes",
                "Carpet Cleaning"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                    <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Contact Us</h4>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <Phone className="h-5 w-5 mr-3 text-slate-400 group-hover:text-white" />
                <span>+1 (555) 123-CLEAN</span>
              </div>
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <Mail className="h-5 w-5 mr-3 text-slate-400 group-hover:text-white" />
                <span>hello@sapphirespark.com</span>
              </div>
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <MapPin className="h-5 w-5 mr-3 text-slate-400 group-hover:text-white" />
                <span>Greater Metro Area</span>
              </div>
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5 mr-3 text-slate-400 group-hover:text-white" />
                <span>@sapphiresparkclean</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-bold mb-6 flex items-center text-lg text-white">
              <Clock className="h-5 w-5 mr-3 text-slate-400" />
              Working Hours
            </h4>
            <div className="space-y-3 text-slate-300 mb-6">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="font-semibold">8AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold">9AM - 4PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold text-slate-400">Emergency</span>
              </div>
            </div>
            
            <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 mb-6">
              <p className="text-sm text-slate-300 font-semibold">24/7 Emergency Services Available</p>
            </div>
            
            <Button variant="outline" className="w-full border-2 border-slate-600 hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 text-white rounded-xl py-3">
              <Instagram className="h-5 w-5 mr-2" />
              Follow on Instagram
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-slate-400">
              © 2024 Sapphire Spark Cleaning Services. All rights reserved.
            </p>
            <div className="flex space-x-8 text-slate-400">
              {["Privacy Policy", "Terms of Service", "Satisfaction Guarantee"].map((link, index) => (
                <a key={index} href="#" className="hover:text-white transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center text-slate-500 text-sm">
            Professional • Reliable • Elegant • Licensed & Insured
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
