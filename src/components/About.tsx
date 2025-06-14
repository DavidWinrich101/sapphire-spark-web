
import { Sparkles, Award, Users, Heart, Shield, Clock, Zap, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section className="py-32 premium-gradient text-white relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-slate-300 rounded-2xl transform rotate-45 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full blur-2xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl mb-8 border border-white/20">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-6xl md:text-7xl font-bold font-playfair text-white mb-8">
            About Our Excellence
          </h2>
          <div className="w-32 h-1 bg-white/50 mx-auto mb-10 rounded-full"></div>
          <p className="text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed font-light">
            At Sapphire Spark Cleaning Services, we don't just clean—we create pristine environments where life and business flourish with unmatched elegance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-4xl font-semibold text-white font-playfair mb-6">
              Our Story & Vision
            </h3>
            <div className="space-y-8 text-lg text-white/80 leading-relaxed">
              <p className="text-xl">
                Founded with an unwavering passion for perfection, we've dedicated ourselves to revolutionizing the cleaning industry through meticulous attention to detail and innovative techniques.
              </p>
              <p>
                Every surface we touch becomes a canvas for excellence. We understand that your space isn't just a location—it's your sanctuary, your productivity hub, your world that deserves nothing less than perfection.
              </p>
              <p>
                Our commitment extends beyond cleaning; we create experiences that transform ordinary spaces into extraordinary environments that inspire and rejuvenate.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-10">
              {[
                { icon: Award, text: "Professional", subtitle: "Certified Excellence" },
                { icon: Users, text: "Trusted", subtitle: "500+ Happy Clients" },
                { icon: Heart, text: "Caring", subtitle: "Personal Touch" }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-white mb-1">{item.text}</p>
                  <p className="text-sm text-white/70">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="dark-glass-effect p-10 rounded-3xl shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-500">
              <div className="flex items-center mb-10">
                <Sparkles className="h-10 w-10 text-white mr-6" />
                <h4 className="text-3xl font-semibold text-white">What Sets Us Apart</h4>
              </div>
              <ul className="space-y-8">
                {[
                  { icon: Shield, text: "Comprehensive insurance coverage and bonding", highlight: "100% Protected" },
                  { icon: Zap, text: "Premium eco-friendly products that protect your family", highlight: "Safe & Green" },
                  { icon: Users, text: "Thoroughly vetted and professionally trained staff", highlight: "Elite Team" },
                  { icon: Award, text: "Unconditional satisfaction guarantee", highlight: "Risk-Free" },
                  { icon: Clock, text: "Flexible scheduling that adapts to your lifestyle", highlight: "Your Schedule" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-white/20 transition-all duration-300">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <span className="text-white text-lg leading-relaxed">{item.text}</span>
                      <div className="text-white/60 text-sm font-medium">{item.highlight}</div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-400 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { number: "500+", label: "Satisfied Clients", icon: Users },
            { number: "2000+", label: "Spaces Cleaned", icon: Sparkles },
            { number: "5", label: "Years Experience", icon: Award },
            { number: "24/7", label: "Support Available", icon: Clock }
          ].map((stat, index) => (
            <div key={index} className="text-center dark-glass-effect p-8 rounded-3xl hover:scale-105 transition-all duration-500 border border-white/10 hover:border-white/20 group">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 text-white/70 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">{stat.number}</div>
              <div className="text-white/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
