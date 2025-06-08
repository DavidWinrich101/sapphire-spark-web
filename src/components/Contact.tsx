
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Calendar } from "lucide-react";
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
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    setBookingForm({
      name: '', email: '', phone: '', service: '', message: '', preferredDate: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-slate-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ready to experience the Sapphire Spark difference? Contact us today to schedule your service or ask any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-playfair mb-8 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-4 text-slate-500" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-slate-300">+1 (555) 123-CLEAN</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-4 text-slate-500" />
                  <div>
                    <p className="font-semibold text-white">WhatsApp</p>
                    <p className="text-slate-300">+1 (555) 123-CLEAN</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-4 text-slate-500" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-slate-300">hello@sapphirespark.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-4 text-slate-500" />
                  <div>
                    <p className="font-semibold text-white">Service Area</p>
                    <p className="text-slate-300">Greater Metropolitan Area</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Instagram className="h-5 w-5 mr-4 text-slate-500" />
                  <div>
                    <p className="font-semibold text-white">Instagram</p>
                    <p className="text-slate-300">@sapphiresparkclean</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 border border-slate-600">
              <h4 className="font-bold mb-4 flex items-center text-white">
                <Clock className="h-5 w-5 mr-2 text-slate-500" />
                Working Hours
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Monday - Friday</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Saturday</span>
                  <span className="text-white">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Sunday</span>
                  <span className="text-white">Emergency calls only</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                <Instagram className="h-4 w-4 mr-2" />
                Follow on Instagram
              </Button>
            </div>
          </div>

          {/* Booking Form */}
          <Card className="bg-white text-slate-800 border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-800 font-playfair flex items-center text-xl">
                <Calendar className="h-6 w-6 mr-3 text-slate-600" />
                Book Your Service
              </CardTitle>
              <CardDescription className="text-slate-600">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      value={bookingForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={bookingForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-700 font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={bookingForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service" className="text-slate-700 font-medium">Service Type *</Label>
                    <Select value={bookingForm.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="mt-1 border-2 border-slate-200 bg-white">
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
                    <Label htmlFor="date" className="text-slate-700 font-medium">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={bookingForm.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-700 font-medium">Additional Details</Label>
                  <Textarea
                    id="message"
                    value={bookingForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your space, special requirements, or any questions..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 font-semibold transition-colors">
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
