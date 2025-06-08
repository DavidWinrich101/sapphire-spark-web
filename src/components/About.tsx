
import { Sparkles, Award, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-slate-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            At Sapphire Spark Cleaning Services, we believe that cleanliness is not just about removing dirt—it's about creating spaces where life can flourish beautifully.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white font-playfair">
              Our Story & Vision
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Founded with a passion for perfection and an eye for detail, we've dedicated ourselves to transforming spaces into pristine environments that reflect the elegance and sophistication our clients deserve.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Every surface we touch, every corner we clean, and every service we provide is infused with our commitment to excellence. We understand that your space is more than just a place—it's your sanctuary, your workplace, your world.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-slate-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-white">Professional</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-slate-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-white">Trusted</p>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-slate-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-white">Caring</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-600">
              <div className="flex items-center mb-6">
                <Sparkles className="h-6 w-6 text-slate-600 mr-3" />
                <h4 className="text-xl font-semibold text-slate-800">What Sets Us Apart</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-700">Meticulous attention to every detail</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-700">Premium, eco-friendly cleaning products</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-700">Trained and background-checked staff</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-700">100% satisfaction guarantee</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-700">Flexible scheduling to fit your lifestyle</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
