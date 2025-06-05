
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const UpcomingServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    feedback: ''
  });
  
  const { toast } = useToast();

  const upcomingServices = [
    "Coach Brackets & Accessories Cleaning",
    "Jewelry Cleaning & Polishing", 
    "Curtain & Drape Cleaning",
    "Leather Furniture Restoration",
    "Car Interior Detailing"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll notify you when these services become available.",
    });
    setFormData({ name: '', email: '', interest: '', feedback: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-sapphire-50 to-sparkle-pink">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-sparkle-pink text-sapphire-900 border border-sapphire-200 mb-4">
            Coming Soon
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-sapphire-900 mb-4">
            Exciting New Services
          </h2>
          <div className="w-24 h-1 bg-sapphire-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're constantly expanding our services to meet your needs. Be the first to know when these premium services launch!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Upcoming Services List */}
          <div>
            <Card className="bg-white/70 backdrop-blur-sm border-sapphire-200">
              <CardHeader>
                <CardTitle className="flex items-center text-sapphire-900 font-playfair">
                  <Sparkles className="h-6 w-6 mr-3 text-sapphire-600" />
                  What's Coming Next
                </CardTitle>
                <CardDescription>
                  Premium services in development to serve you better
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {upcomingServices.map((service, index) => (
                    <li key={index} className="flex items-center p-3 bg-white/50 rounded-lg border border-sapphire-100">
                      <div className="w-2 h-2 bg-sapphire-600 rounded-full mr-4"></div>
                      <span className="text-gray-700 font-medium">{service}</span>
                      <Badge variant="outline" className="ml-auto text-xs border-sapphire-300 text-sapphire-700">
                        Soon
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Feedback Form */}
          <div>
            <Card className="bg-white border-sapphire-200">
              <CardHeader>
                <CardTitle className="flex items-center text-sapphire-900 font-playfair">
                  <MessageSquare className="h-6 w-6 mr-3 text-sapphire-600" />
                  Tell Us What You Think
                </CardTitle>
                <CardDescription>
                  Would you be interested in our upcoming services? Your feedback helps us prioritize!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="interest">Which service interests you most?</Label>
                    <Input
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => handleInputChange('interest', e.target.value)}
                      placeholder="e.g., Coach Brackets Cleaning"
                    />
                  </div>

                  <div>
                    <Label htmlFor="feedback">Additional feedback or suggestions</Label>
                    <Textarea
                      id="feedback"
                      value={formData.feedback}
                      onChange={(e) => handleInputChange('feedback', e.target.value)}
                      placeholder="Tell us about any other cleaning services you'd love to see..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-sapphire-600 hover:bg-sapphire-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Notify Me When Available
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingServices;
