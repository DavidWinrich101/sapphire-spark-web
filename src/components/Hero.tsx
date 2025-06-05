
import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sapphire-900 via-sapphire-700 to-sapphire-500">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="h-6 w-6 text-sparkle-pink animate-sparkle" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Star className="h-4 w-4 text-white/30 animate-sparkle" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="h-5 w-5 text-sparkle-silver animate-sparkle" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <Star className="h-6 w-6 text-sparkle-pink animate-sparkle" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <div className="text-6xl font-bold text-white font-playfair">S</div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-4">
            Sapphire Spark
            <span className="block text-2xl md:text-4xl font-light">Cleaning Services</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-light mb-8 text-white/90">
          Where Clean Meets Class
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-sapphire-900 hover:bg-sparkle-silver font-semibold px-8 py-3 text-lg"
          >
            Book a Service
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
          >
            Request a Quote
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-1 h-8 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
