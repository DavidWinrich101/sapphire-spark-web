
import { Button } from "@/components/ui/button";
import { Sparkles, Star, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="h-6 w-6 text-pink-300 animate-sparkle" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Star className="h-4 w-4 text-slate-400 animate-sparkle" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="h-5 w-5 text-slate-600 animate-sparkle" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <Star className="h-6 w-6 text-pink-300 animate-sparkle" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo Section */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-white/40 backdrop-blur-sm rounded-full mb-8 border border-white/50 shadow-lg">
            <div className="text-5xl font-bold text-slate-800 font-playfair">S</div>
          </div>
          
          {/* Improved typography hierarchy */}
          <div className="space-y-3">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair text-slate-800 leading-tight">
              Sapphire Spark
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-pink-500 font-inter">
              Cleaning Services
            </h2>
          </div>
        </div>

        {/* Enhanced tagline */}
        <p className="text-xl md:text-2xl font-medium mb-12 text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Flawless Spaces, Sapphire Shine.
        </p>

        {/* Consistent CTA buttons with better hierarchy */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-slate-800 text-white hover:bg-slate-700 font-semibold px-10 py-4 text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Book a Service
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-slate-600 text-slate-700 hover:bg-slate-50 hover:border-slate-700 px-10 py-4 text-lg font-semibold transition-all duration-300"
          >
            Request a Quote
          </Button>
        </div>

        {/* Improved scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-600 z-20">
          <div className="flex flex-col items-center space-y-3">
            <span className="text-sm font-medium">Discover our sparkle below</span>
            <div className="flex flex-col items-center animate-gentle-bounce">
              <ArrowDown className="h-5 w-5 text-pink-400" />
              <div className="w-0.5 h-6 bg-gradient-to-b from-pink-400 to-transparent rounded-full mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
