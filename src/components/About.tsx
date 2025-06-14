
import { Sparkles, Award, Users, Heart, Shield, Clock, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-slate-700 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-slate-600 rounded-lg transform rotate-45 opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700 rounded-full mb-6">
            <Sparkles className="h-8 w-8 text-slate-300" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-playfair text-white mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-slate-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            At Sapphire Spark Cleaning Services, we believe that cleanliness is not just about removing dirt—it's about creating spaces where life can flourish beautifully.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-white font-playfair">
              Our Story & Vision
            </h3>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Founded with a passion for perfection and an eye for detail, we've dedicated ourselves to transforming spaces into pristine environments that reflect the elegance and sophistication our clients deserve.
              </p>
              <p>
                Every surface we touch, every corner we clean, and every service we provide is infused with our commitment to excellence. We understand that your space is more than just a place—it's your sanctuary, your workplace, your world.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-slate-300" />
                </div>
                <p className="text-sm font-semibold text-white">Professional</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-slate-300" />
                </div>
                <p className="text-sm font-semibold text-white">Trusted</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-slate-300" />
                </div>
                <p className="text-sm font-semibold text-white">Caring</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="dark-glass-effect p-8 rounded-2xl shadow-2xl border border-slate-700">
              <div className="flex items-center mb-8">
                <Sparkles className="h-8 w-8 text-slate-400 mr-4" />
                <h4 className="text-2xl font-semibold text-white">What Sets Us Apart</h4>
              </div>
              <ul className="space-y-6">
                {[
                  { icon: Shield, text: "Meticulous attention to every detail" },
                  { icon: Zap, text: "Premium, eco-friendly cleaning products" },
                  { icon: Users, text: "Trained and background-checked staff" },
                  { icon: Award, text: "100% satisfaction guarantee" },
                  { icon: Clock, text: "Flexible scheduling to fit your lifestyle" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center mr-4">
                      <item.icon className="h-5 w-5 text-slate-300" />
                    </div>
                    <span className="text-slate-300 text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Satisfied Clients" },
            { number: "2000+", label: "Spaces Cleaned" },
            { number: "5", label: "Years Experience" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center dark-glass-effect p-6 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
