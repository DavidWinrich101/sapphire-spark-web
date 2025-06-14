
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Brush, Package, Check, Clock, Star, Sparkles, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Home & Office Cleaning",
      icon: Home,
      description: "Comprehensive cleaning solutions for residential and commercial spaces that exceed expectations",
      features: [
        "Deep cleaning services",
        "Regular maintenance cleaning", 
        "Post-construction cleanup",
        "Carpet & upholstery cleaning",
        "Window cleaning",
        "Sanitization services"
      ],
      price: "Starting at $89",
      available: true,
      popular: true
    },
    {
      title: "Bags & Shoes Cleaning",
      icon: Brush,
      description: "Specialized luxury care for your precious bags, shoes, and leather goods with expert restoration",
      features: [
        "Leather bag restoration",
        "Designer shoe cleaning",
        "Stain removal",
        "Color restoration",
        "Protective coating",
        "Professional care"
      ],
      price: "Starting at $45",
      available: true,
      popular: false
    },
    {
      title: "Laundry Services",
      icon: Package,
      description: "Premium laundry care for beddings, rugs, and specialty items with delicate attention",
      features: [
        "Bedding cleaning",
        "Rug cleaning & restoration",
        "Delicate fabric care",
        "Stain treatment",
        "Fresh pressing",
        "Pickup & delivery"
      ],
      price: "Starting at $35",
      available: false,
      comingSoon: true,
      popular: false
    }
  ];

  return (
    <section className="py-32 light-premium-gradient relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 premium-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-slate-600 rounded-3xl transform rotate-12 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-slate-400 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 floating-card mb-8">
            <Star className="h-10 w-10 text-slate-700" />
          </div>
          <h2 className="text-6xl md:text-7xl font-bold font-playfair text-slate-800 mb-8">
            Premium Services
          </h2>
          <div className="w-32 h-1 premium-gradient mx-auto mb-10 rounded-full"></div>
          <p className="text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-light">
            From everyday excellence to specialized luxury care, we offer comprehensive solutions crafted for perfection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card key={index} className={`relative h-full transition-all duration-700 hover:shadow-3xl hover:-translate-y-4 bg-white/95 backdrop-blur-sm border-2 ${
                service.available 
                  ? 'border-slate-200/50 hover:border-slate-400/70 shadow-2xl' 
                  : 'border-slate-100/50 opacity-80'
              } rounded-3xl overflow-hidden group animate-fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                
                {service.popular && (
                  <Badge className="absolute -top-3 left-8 bg-slate-800 text-white border-2 border-slate-700 z-10 px-4 py-1 text-sm font-semibold">
                    <Sparkles className="h-4 w-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                {service.comingSoon && (
                  <Badge className="absolute -top-3 right-8 bg-slate-600 text-white border-2 border-slate-500 z-10 px-4 py-1 text-sm">
                    Coming Soon
                  </Badge>
                )}
                
                <div className="absolute inset-0 premium-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
                
                <CardHeader className="text-center pb-6 relative z-10 p-8">
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl mx-auto mb-8 transition-all duration-500 ${
                    service.available 
                      ? 'floating-card group-hover:scale-110 group-hover:rotate-6' 
                      : 'bg-slate-100 border border-slate-200'
                  }`}>
                    <IconComponent className={`h-12 w-12 ${
                      service.available ? 'text-slate-700 group-hover:text-slate-800' : 'text-slate-400'
                    }`} />
                  </div>
                  <CardTitle className={`text-3xl font-playfair mb-4 ${
                    service.available ? 'text-slate-800' : 'text-slate-500'
                  }`}>
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  {service.available && (
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {service.price}
                    </div>
                  )}
                </CardHeader>

                <CardContent className="relative z-10 px-8">
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-lg group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                        <Check className={`h-6 w-6 mr-4 flex-shrink-0 ${
                          service.available ? 'text-slate-600' : 'text-slate-400'
                        }`} />
                        <span className={service.available ? 'text-slate-700' : 'text-slate-500'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="relative z-10 p-8">
                  <Button 
                    className={`w-full text-lg py-6 rounded-2xl transition-all duration-500 group/button ${
                      service.available 
                        ? 'premium-button group-hover:bg-slate-700' 
                        : 'bg-slate-300 text-slate-500 cursor-not-allowed hover:bg-slate-300'
                    }`}
                    disabled={!service.available}
                  >
                    {service.available ? (
                      <>
                        <Clock className="mr-3 h-6 w-6 group-hover/button:rotate-12 transition-transform duration-300" />
                        Book Now
                        <ArrowRight className="ml-3 h-6 w-6 group-hover/button:translate-x-1 transition-transform duration-300" />
                      </>
                    ) : (
                      'Notify When Available'
                    )}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Enhanced process section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-4xl font-bold font-playfair text-slate-800 mb-16">
            Our Simple Process
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: "01", title: "Book Online", description: "Schedule your service in just a few clicks with our seamless booking system", icon: Clock },
              { step: "02", title: "We Clean", description: "Our elite professional team handles everything with precision and care", icon: Sparkles },
              { step: "03", title: "Enjoy Results", description: "Relax and enjoy your pristine, sparkling space that exceeds expectations", icon: Star }
            ].map((process, index) => (
              <div key={index} className="floating-card p-10 group hover:scale-105 transition-all duration-500" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-6">
                  <process.icon className="h-12 w-12 text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
                </div>
                <div className="text-5xl font-bold text-gradient mb-6">{process.step}</div>
                <h4 className="text-2xl font-semibold text-slate-800 mb-4 font-playfair">{process.title}</h4>
                <p className="text-slate-600 leading-relaxed text-lg">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
