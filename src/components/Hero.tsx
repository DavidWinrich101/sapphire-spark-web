
import { Button } from "@/components/ui/button";
import { Sparkles, Star, ArrowDown, Calendar, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="h-8 w-8 text-slate-400 animate-sparkle" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Star className="h-6 w-6 text-slate-300 animate-sparkle" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="h-7 w-7 text-slate-500 animate-sparkle" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <Star className="h-8 w-8 text-slate-400 animate-sparkle" />
        </div>
      </div>

      {/* Geometric background shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-800 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-700 rounded-lg transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Brand Section */}
        <div className="mb-16">
          <div className="inline-flex items-center justify-center w-32 h-32 glass-effect rounded-full mb-8 shadow-2xl">
            <div className="text-6xl font-bold text-slate-800 font-playfair">S</div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold font-playfair text-slate-800 leading-tight tracking-tight">
              Sapphire Spark
            </h1>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-0.5 bg-slate-400"></div>
              <h2 className="text-2xl md:text-4xl font-light text-slate-600 font-inter tracking-wide">
                Cleaning Services
              </h2>
              <div className="w-16 h-0.5 bg-slate-400"></div>
            </div>
          </div>
        </div>

        {/* Enhanced tagline */}
        <div className="mb-16">
          <p className="text-2xl md:text-3xl font-light mb-6 text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Flawless Spaces, Sapphire Shine.
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Premium cleaning services that transform your environment into a pristine sanctuary of elegance and comfort.
          </p>
        </div>

        {/* Enhanced CTA section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button 
            size="lg" 
            className="bg-slate-800 text-white hover:bg-slate-700 font-semibold px-12 py-6 text-xl shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-1 rounded-xl"
          >
            <Calendar className="mr-3 h-6 w-6" />
            Book a Service
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-slate-600 text-slate-700 hover:bg-slate-800 hover:text-white hover:border-slate-800 px-12 py-6 text-xl font-semibold transition-all duration-300 hover:-translate-y-1 rounded-xl"
          >
            <Phone className="mr-3 h-6 w-6" />
            Get Quote
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-effect p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-slate-800 mb-2">500+</div>
            <div className="text-slate-600">Happy Clients</div>
          </div>
          <div className="glass-effect p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-slate-800 mb-2">5★</div>
            <div className="text-slate-600">Average Rating</div>
          </div>
          <div className="glass-effect p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-slate-800 mb-2">24/7</div>
            <div className="text-slate-600">Emergency Service</div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-600 z-20">
        <div className="flex flex-col items-center space-y-3">
          <span className="text-sm font-medium tracking-wide">Discover Our Services</span>
          <div className="flex flex-col items-center animate-gentle-bounce">
            <ArrowDown className="h-6 w-6 text-slate-500" />
            <div className="w-0.5 h-8 bg-gradient-to-b from-slate-500 to-transparent rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
