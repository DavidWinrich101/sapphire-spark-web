
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Sapphire Spark transformed my home! Their attention to detail is incredible, and the team is so professional. My house has never looked better.",
      rating: 5,
      image: "S"
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "We've been using their commercial cleaning services for our office for over a year. Reliable, thorough, and our employees love coming to a spotless workplace.",
      rating: 5,
      image: "M"
    },
    {
      name: "Emma Williams",
      role: "Fashion Enthusiast",
      content: "They restored my vintage leather handbag to perfect condition! I thought it was ruined, but their specialized cleaning brought it back to life. Amazing service!",
      rating: 5,
      image: "E"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it—hear from satisfied clients who trust us with their most precious spaces
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-pink-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-pink-300 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-slate-700 text-slate-700" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Before & After Gallery Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold font-playfair text-gray-800 text-center mb-12">
            Before & After Gallery
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative group cursor-pointer">
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">Gallery Image {item}</span>
                </div>
                <div className="absolute inset-0 bg-slate-800 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                    View Details
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
