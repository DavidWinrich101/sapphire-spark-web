
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Calendar, Send, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: ''
  });
  const { toast } = useToast();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Received!",
      description: "We'll contact you within 24 hours to confirm your appointment."
    });
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      preferredDate: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingForm(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+1 (555) 123-CLEAN", type: "phone" },
    { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 123-CLEAN", type: "whatsapp" },
    { icon: Mail, label: "Email", value: "hello@sapphirespark.com", type: "email" },
    { icon: MapPin, label: "Service Area", value: "Greater Metropolitan Area", type: "location" },
    { icon: Instagram, label: "Instagram", value: "@sapphiresparkclean", type: "social" }
  ];

  return (
    <section className="py-32 premium-gradient text-white relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-slate-300 rounded-2xl transform rotate-45 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full blur-2xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl mb-8 border border-white/20">
            <MessageCircle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-6xl md:text-7xl font-bold font-playfair mb-8">
            Get in Touch
          </h2>
          <div className="w-32 h-1 bg-white/50 mx-auto mb-10 rounded-full"></div>
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to experience the Sapphire Spark difference? Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Information */}
          <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-3xl font-bold font-playfair mb-10 text-white">Contact Information</h3>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center p-6 dark-glass-effect rounded-2xl hover:scale-105 transition-all duration-300 border border-white/10 hover:border-white/20 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-white/20 transition-all duration-300">
                      <info.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg mb-1">{info.label}</p>
                      <p className="text-white/80">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Working Hours */}
            <div className="dark-glass-effect rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500">
              <h4 className="font-bold mb-8 flex items-center text-white text-xl">
                <Clock className="h-6 w-6 mr-3 text-white" />
                Working Hours
              </h4>
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
                  { day: "Saturday", time: "9:00 AM - 4:00 PM" },
                  { day: "Sunday", time: "Emergency calls only" }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                    <span className="text-white/90">{schedule.day}</span>
                    <span className="text-white font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/20">
                <div className="flex items-center mb-3">
                  <Star className="h-5 w-5 text-white mr-2" />
                  <span className="text-white font-semibold">24/7 Emergency Services</span>
                </div>
                <p className="text-white/80 text-sm">Available for urgent cleaning needs</p>
              </div>
            </div>

            {/* Social Media Button */}
            <Button className="w-full bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white transition-all duration-300 py-4 rounded-2xl backdrop-blur-sm">
              <Instagram className="h-5 w-5 mr-3" />
              Follow on Instagram
            </Button>
          </div>

          {/* Enhanced Booking Form */}
          <Card className="bg-white/95 backdrop-blur-sm text-slate-800 border-2 border-white/30 shadow-2xl rounded-3xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="p-8">
              <CardTitle className="text-slate-800 font-playfair flex items-center text-3xl">
                <Calendar className="h-8 w-8 mr-4 text-slate-700" />
                Book Your Service
              </CardTitle>
              <CardDescription className="text-slate-600 text-lg">
                Fill out the form below and we'll get back to you within 24 hours with a personalized quote
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleBookingSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 font-semibold text-base">Full Name *</Label>
                    <Input 
                      id="name" 
                      value={bookingForm.name} 
                      onChange={e => handleInputChange('name', e.target.value)} 
                      placeholder="Your full name" 
                      required 
                      className="mt-2 border-2 border-slate-200 focus:border-slate-600 rounded-xl py-3 text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-slate-700 font-semibold text-base">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={bookingForm.phone} 
                      onChange={e => handleInputChange('phone', e.target.value)} 
                      placeholder="(555) 123-4567" 
                      required 
                      className="mt-2 border-2 border-slate-200 focus:border-slate-600 rounded-xl py-3 text-base"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-700 font-semibold text-base">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={bookingForm.email} 
                    onChange={e => handleInputChange('email', e.target.value)} 
                    placeholder="your.email@example.com" 
                    required 
                    className="mt-2 border-2 border-slate-200 focus:border-slate-600 rounded-xl py-3 text-base"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="service" className="text-slate-700 font-semibold text-base">Service Type *</Label>
                    <Select value={bookingForm.service} onValueChange={value => handleInputChange('service', value)}>
                      <SelectTrigger className="mt-2 border-2 border-slate-200 focus:border-slate-600 rounded-xl py-3 text-base">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home-cleaning">Home Cleaning</SelectItem>
                        <SelectItem value="office-cleaning">Office Cleaning</SelectItem>
                        <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                        <SelectItem value="post-construction">Post-Construction</SelectItem>
                        <SelectItem value="bags-shoes">Bags & Shoes Cleaning</SelectItem>
                        <SelectItem value="carpet-upholstery">Carpet & Upholstery</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date" className="text-slate-700 font-semibold text-base">Preferred Date</Label>
                    <Input 
                      id="date" 
                      type="date" 
                      value={bookingForm.preferredDate} 
                      onChange={e => handleInputChange('preferredDate', e.target.value)} 
                      className="mt-2 border-2 border-slate-200 focus:border-slate-600 rounded-xl py-3 text-base"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-700 font-semibold text-base">Additional Details</Label>
                  <Textarea 
                    id="message" 
                    value={bookingForm.message} 
                    onChange={e => handleInputChange('message', e.target.value)} 
                    placeholder="Tell us about your space, special requirements, or any questions..." 
                    rows={4} 
                    className="mt-2 border-2 border-slate-200 focus:border-slate-600 rounded-xl text-base"
                  />
                </div>

                <Button type="submit" className="w-full premium-button text-lg py-4 group">
                  <Send className="h-6 w-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
