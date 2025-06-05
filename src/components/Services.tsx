
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Brush, Package } from "lucide-react";

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
      available: false,
      comingSoon: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-sapphire-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-sapphire-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            From everyday cleaning to specialized care, we offer comprehensive solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card key={index} className={`relative h-full transition-all duration-300 hover:shadow-xl border-2 ${
                service.available ? 'border-sapphire-100 hover:border-sapphire-300' : 'border-gray-200'
              }`}>
                {service.comingSoon && (
                  <Badge className="absolute -top-3 left-4 bg-sparkle-pink text-sapphire-900 border border-sapphire-200">
                    Coming Soon
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4 ${
                    service.available ? 'bg-sapphire-100' : 'bg-gray-100'
                  }`}>
                    <IconComponent className={`h-8 w-8 ${
                      service.available ? 'text-sapphire-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <CardTitle className={`text-xl font-playfair ${
                    service.available ? 'text-sapphire-900' : 'text-gray-500'
                  }`}>
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                          service.available ? 'bg-sapphire-600' : 'bg-gray-400'
                        }`}></div>
                        <span className={service.available ? 'text-gray-700' : 'text-gray-500'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    className={`w-full ${
                      service.available 
                        ? 'bg-sapphire-600 hover:bg-sapphire-700 text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!service.available}
                  >
                    {service.available ? 'Book Now' : 'Notify When Available'}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
