
import { Button } from "@/components/ui/button";
import { Sparkles, Star, ArrowDown, Calendar, Phone, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden light-premium-gradient">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float-gentle">
          <Sparkles className="h-12 w-12 text-slate-400 animate-sparkle-enhanced" />
        </div>
        <div className="absolute top-40 right-20 animate-float-gentle" style={{ animationDelay: '1.5s' }}>
          <Star className="h-8 w-8 text-slate-300 animate-sparkle-enhanced" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float-gentle" style={{ animationDelay: '3s' }}>
          <Sparkles className="h-10 w-10 text-slate-500 animate-sparkle-enhanced" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-gentle" style={{ animationDelay: '0.8s' }}>
          <Star className="h-12 w-12 text-slate-400 animate-sparkle-enhanced" />
        </div>
        <div className="absolute top-1/2 left-1/3 animate-float-gentle" style={{ animationDelay: '2.2s' }}>
          <div className="w-4 h-4 bg-slate-300 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-3/4 right-1/3 animate-float-gentle" style={{ animationDelay: '1.8s' }}>
          <div className="w-6 h-6 bg-slate-400 rounded-full opacity-40"></div>
        </div>
      </div>

      {/* Premium geometric background shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 premium-gradient rounded-full transform rotate-45 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 premium-gradient rounded-2xl transform -rotate-12 blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-slate-600 rounded-3xl transform rotate-12 blur-xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Enhanced Brand Section */}
        <div className="mb-20 animate-fade-in-up">
          <div className="relative inline-flex items-center justify-center w-40 h-40 floating-card mb-12 group">
            <div className="absolute inset-0 premium-gradient rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="text-7xl font-bold text-gradient font-playfair relative z-10 group-hover:scale-110 transition-transform duration-500">S</div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-800 rounded-full animate-pulse"></div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-6xl md:text-9xl font-bold font-playfair text-slate-800 leading-tight tracking-tight mb-8">
              <span className="inline-block animate-fade-in-up">Sapphire</span>{" "}
              <span className="inline-block animate-fade-in-up text-gradient" style={{ animationDelay: '0.2s' }}>Spark</span>
            </h1>
            <div className="flex items-center justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-1 premium-gradient rounded-full"></div>
              <h2 className="text-2xl md:text-5xl font-light text-slate-600 font-inter tracking-wide">
                Cleaning Services
              </h2>
              <div className="w-20 h-1 premium-gradient rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Enhanced tagline */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-3xl md:text-4xl font-light mb-8 text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Flawless Spaces, <span className="text-gradient font-semibold">Sapphire Shine</span>.
          </p>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Premium cleaning services that transform your environment into a pristine sanctuary of elegance and unmatched sophistication.
          </p>
        </div>

        {/* Enhanced CTA section */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button className="premium-button text-xl px-16 py-6 group">
            <Calendar className="mr-4 h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
            Book a Service
          </Button>
          <Button className="outline-premium-button text-xl px-16 py-6 group">
            <Phone className="mr-4 h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
            Get Quote
          </Button>
        </div>

        {/* Enhanced trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="floating-card p-8 group hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
            </div>
            <div className="text-4xl font-bold text-slate-800 mb-3">500+</div>
            <div className="text-slate-600 font-medium">Happy Clients</div>
          </div>
          <div className="floating-card p-8 group hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
            </div>
            <div className="text-4xl font-bold text-slate-800 mb-3">5★</div>
            <div className="text-slate-600 font-medium">Average Rating</div>
          </div>
          <div className="floating-card p-8 group hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
            </div>
            <div className="text-4xl font-bold text-slate-800 mb-3">24/7</div>
            <div className="text-slate-600 font-medium">Emergency Service</div>
          </div>
        </div>

        {/* Premium features showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          {[
            { icon: Shield, text: "Fully Insured" },
            { icon: Award, text: "Certified Team" },
            { icon: Sparkles, text: "Eco-Friendly" },
            { icon: Clock, text: "Punctual Service" }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-4 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 group">
              <feature.icon className="h-6 w-6 text-slate-600 mb-2 group-hover:text-slate-800 transition-colors duration-300" />
              <span className="text-sm font-medium text-slate-700">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-slate-600 z-20 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
        <div className="flex flex-col items-center space-y-4">
          <span className="text-sm font-medium tracking-wide">Discover Our Excellence</span>
          <div className="flex flex-col items-center animate-bounce">
            <ArrowDown className="h-7 w-7 text-slate-500" />
            <div className="w-1 h-12 premium-gradient rounded-full mt-3 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
