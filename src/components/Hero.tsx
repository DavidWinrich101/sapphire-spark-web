
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 opacity-20">
          <Sparkles className="h-8 w-8 text-pink-300 animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-1/3 opacity-15" style={{ animationDelay: '2s' }}>
          <Sparkles className="h-6 w-6 text-slate-300 animate-pulse" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 opacity-10" style={{ animationDelay: '4s' }}>
          <Sparkles className="h-10 w-10 text-pink-200 animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 max-w-5xl">
        {/* Professional Logo Section */}
        <div className="mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl mb-8 shadow-2xl">
            <div className="text-3xl font-bold text-white font-playfair">S</div>
          </div>
          
          {/* Improved typography hierarchy */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold font-playfair text-slate-900 leading-tight tracking-tight">
              Sapphire Spark
            </h1>
            <h2 className="text-3xl md:text-4xl font-medium text-pink-500 font-inter tracking-wide">
              Cleaning Services
            </h2>
          </div>
        </div>

        {/* Professional tagline */}
        <div className="mb-16">
          <p className="text-2xl md:text-3xl font-light mb-6 text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Flawless Spaces, Sapphire Shine
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Professional CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
          <Button 
            size="lg" 
            className="bg-slate-900 text-white hover:bg-slate-800 font-semibold px-12 py-6 text-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-xl"
          >
            Book a Service
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-12 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg rounded-xl bg-white/80 backdrop-blur-sm"
          >
            Request a Quote
          </Button>
        </div>
      </div>

      {/* Clean scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-slate-500 z-20">
        <div className="flex flex-col items-center space-y-3">
          <span className="text-sm font-medium opacity-75">Scroll to explore our services</span>
          <div className="flex flex-col items-center animate-gentle-bounce">
            <ArrowDown className="h-5 w-5 text-pink-400" />
            <div className="w-px h-8 bg-gradient-to-b from-pink-400 to-transparent rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
