
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Brush, Package, Check, Clock, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Home & Office Cleaning",
      icon: Home,
      description: "Comprehensive cleaning solutions for residential and commercial spaces",
      features: [
        "Deep cleaning services",
        "Regular maintenance cleaning", 
        "Post-construction cleanup",
        "Carpet & upholstery cleaning",
        "Window cleaning",
        "Sanitization services"
      ],
      price: "Starting at $89",
      available: true
    },
    {
      title: "Bags & Shoes Cleaning",
      icon: Brush,
      description: "Specialized care for your luxury bags, shoes, and leather goods",
      features: [
        "Leather bag restoration",
        "Designer shoe cleaning",
        "Stain removal",
        "Color restoration",
        "Protective coating",
        "Professional care"
      ],
      price: "Starting at $45",
      available: true
    },
    {
      title: "Laundry Services",
      icon: Package,
      description: "Premium laundry care for beddings, rugs, and specialty items",
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
      comingSoon: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-slate-400 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-300 rounded-lg transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6">
            <Star className="h-8 w-8 text-slate-700" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-playfair text-slate-800 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-slate-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            From everyday cleaning to specialized care, we offer comprehensive solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card key={index} className={`relative h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white border-2 ${
                service.available 
                  ? 'border-slate-200 hover:border-slate-400 hover:shadow-slate-200/25' 
                  : 'border-slate-100 opacity-75'
              } rounded-2xl overflow-hidden group`}>
                {service.comingSoon && (
                  <Badge className="absolute -top-3 left-6 bg-slate-700 text-white border border-slate-600 z-10">
                    Coming Soon
                  </Badge>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mx-auto mb-6 transition-all duration-300 ${
                    service.available 
                      ? 'bg-slate-100 group-hover:bg-slate-200 group-hover:scale-110' 
                      : 'bg-slate-50'
                  }`}>
                    <IconComponent className={`h-10 w-10 ${
                      service.available ? 'text-slate-700' : 'text-slate-400'
                    }`} />
                  </div>
                  <CardTitle className={`text-2xl font-playfair mb-3 ${
                    service.available ? 'text-slate-800' : 'text-slate-500'
                  }`}>
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  {service.available && (
                    <div className="text-2xl font-bold text-slate-800 mt-3">
                      {service.price}
                    </div>
                  )}
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-base">
                        <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${
                          service.available ? 'text-slate-600' : 'text-slate-400'
                        }`} />
                        <span className={service.available ? 'text-slate-700' : 'text-slate-500'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="relative z-10">
                  <Button 
                    className={`w-full text-lg py-6 rounded-xl transition-all duration-300 ${
                      service.available 
                        ? 'bg-slate-800 hover:bg-slate-700 text-white shadow-lg hover:shadow-xl' 
                        : 'bg-slate-300 text-slate-500 cursor-not-allowed hover:bg-slate-300'
                    }`}
                    disabled={!service.available}
                  >
                    {service.available ? (
                      <>
                        <Clock className="mr-2 h-5 w-5" />
                        Book Now
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

        {/* Process section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold font-playfair text-slate-800 mb-12">
            Our Simple Process
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Book Online", description: "Schedule your service in just a few clicks" },
              { step: "02", title: "We Clean", description: "Our professional team handles everything" },
              { step: "03", title: "Enjoy Results", description: "Relax in your pristine, sparkling space" }
            ].map((process, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl">
                <div className="text-4xl font-bold text-slate-700 mb-4">{process.step}</div>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">{process.title}</h4>
                <p className="text-slate-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
