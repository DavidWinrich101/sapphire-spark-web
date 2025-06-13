import { Sparkles, Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-lg font-bold font-playfair">S</span>
              </div>
              <div>
                <h3 className="font-bold font-playfair">Sapphire Spark</h3>
                <p className="text-xs text-gray-400">Cleaning Services</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Flawless Spaces, Sapphire Shine.
            </p>
            <div className="flex items-center text-pink-400">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm">Premium Cleaning Excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Office Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Deep Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Post-Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bags & Shoes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carpet Cleaning</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-pink-400" />
                <span>+1 (555) 123-CLEAN</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-pink-400" />
                <span>hello@sapphirespark.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-pink-400" />
                <span>Greater Metro Area</span>
              </div>
              <div className="flex items-center">
                <Instagram className="h-4 w-4 mr-2 text-pink-400" />
                <span>@sapphiresparkclean</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-bold mb-4 flex items-center">
              <Clock className="h-4 w-4 mr-2 text-pink-400" />
              Working Hours
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>8AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9AM - 4PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Emergency</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-pink-900/30 rounded border border-pink-800">
              <p className="text-xs text-pink-400 font-semibold">24/7 Emergency Services Available</p>
            </div>
            
            {/* Fixed Instagram Button */}
            <div className="mt-4">
              <Button variant="outline" className="w-full border-pink-500 hover:bg-pink-500 transition-colors text-slate-50">
                <Instagram className="h-4 w-4 mr-2" />
                Follow on Instagram
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Sapphire Spark Cleaning Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Satisfaction Guarantee</a>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            Professional • Reliable • Elegant • Licensed & Insured
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;