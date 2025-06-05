
import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="h-6 w-6 text-pink-400 animate-sparkle" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Star className="h-4 w-4 text-slate-700/50 animate-sparkle" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="h-5 w-5 text-slate-600 animate-sparkle" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <Star className="h-6 w-6 text-pink-400 animate-sparkle" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center text-gray-800 relative z-10">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
            <div className="text-6xl font-bold text-pink-600 font-playfair">S</div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-4 text-gray-800">
            Sapphire Spark
            <span className="block text-2xl md:text-4xl font-light text-pink-600">Cleaning Services</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-light mb-8 text-gray-700">
          Flawless Spaces, Sapphire Shine.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-pink-500 text-white hover:bg-pink-600 font-semibold px-8 py-3 text-lg"
          >
            Book a Service
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg"
          >
            Request a Quote
          </Button>
        </div>

        {/* Scroll indicator - moved to prevent overlap */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-gray-600 animate-bounce z-20">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-1 h-8 bg-pink-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
