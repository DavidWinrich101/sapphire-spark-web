
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, User } from "lucide-react";

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
    <section className="py-24 bg-slate-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-200 to-slate-100"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-slate-300 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-400 rounded-lg transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg">
            <User className="h-8 w-8 text-slate-700" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-playfair text-slate-800 mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-slate-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it—hear from satisfied clients who trust us with their most precious spaces
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-2 border-slate-200 hover:border-slate-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden group">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="h-10 w-10 text-slate-300 group-hover:text-slate-400 transition-colors duration-300" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-slate-700 text-slate-700" />
                    ))}
                  </div>
                </div>
                
                <p className="text-slate-700 mb-8 leading-relaxed italic text-lg">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center text-white font-semibold mr-4 text-xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg">{testimonial.name}</h4>
                    <p className="text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Before & After Gallery Section */}
        <div className="text-center">
          <h3 className="text-4xl font-bold font-playfair text-slate-800 mb-12">
            Before & After Gallery
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative group cursor-pointer">
                <div className="bg-gradient-to-br from-slate-200 to-slate-300 h-64 rounded-2xl flex items-center justify-center border-2 border-slate-300 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <span className="text-slate-600 font-semibold text-lg">Gallery Image {item}</span>
                </div>
                <div className="absolute inset-0 bg-slate-800 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-lg">
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
