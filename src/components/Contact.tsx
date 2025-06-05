
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
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Ready to experience the Sapphire Spark difference? Contact us today to schedule your service or ask any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-playfair mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-4 text-pink-400" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-white/80">+1 (555) 123-CLEAN</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-4 text-pink-400" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-white/80">+1 (555) 123-CLEAN</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-4 text-pink-400" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/80">hello@sapphirespark.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-4 text-pink-400" />
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-white/80">Greater Metropolitan Area</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Instagram className="h-5 w-5 mr-4 text-pink-400" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-white/80">@sapphiresparkclean</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="font-bold mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-pink-400" />
                Working Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency calls only</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                <Instagram className="h-4 w-4 mr-2" />
                Follow on Instagram
              </Button>
            </div>
          </div>

          {/* Booking Form */}
          <Card className="bg-white text-gray-900">
            <CardHeader>
              <CardTitle className="text-slate-900 font-playfair flex items-center">
                <Calendar className="h-6 w-6 mr-3" />
                Book Your Service
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={bookingForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={bookingForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={bookingForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service">Service Type *</Label>
                    <Select value={bookingForm.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
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
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={bookingForm.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    value={bookingForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your space, special requirements, or any questions..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600">
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
