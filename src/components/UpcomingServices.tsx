
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Mail, MessageSquare, Clock } from "lucide-react";
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
    "Leather Furniture Restoration"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll notify you when these services become available."
    });
    setFormData({ name: '', email: '', interest: '', feedback: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-slate-700 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-slate-600 rounded-lg transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <Badge className="bg-slate-700 text-white border-slate-600 mb-6 px-6 py-2 text-lg">
            <Clock className="mr-2 h-5 w-5" />
            Coming Soon
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold font-playfair text-white mb-6">
            Exciting New Services
          </h2>
          <div className="w-24 h-1 bg-slate-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We're constantly expanding our services to meet your evolving needs. Be the first to know when these premium services launch!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Upcoming Services List */}
          <div>
            <Card className="bg-white border-2 border-slate-200 shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-white p-8">
                <CardTitle className="flex items-center text-slate-800 font-playfair text-2xl">
                  <Sparkles className="h-8 w-8 mr-4 text-slate-600" />
                  What's Coming Next
                </CardTitle>
                <CardDescription className="text-slate-600 text-lg">
                  Premium services in development to serve you better
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-6">
                  {upcomingServices.map((service, index) => (
                    <li key={index} className="flex items-center p-4 bg-slate-50 rounded-xl border-2 border-slate-100 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
                      <div className="w-3 h-3 bg-slate-600 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-slate-700 font-medium text-lg flex-grow">{service}</span>
                      <Badge variant="outline" className="border-slate-400 text-slate-600 font-semibold">
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
            <Card className="bg-white border-2 border-slate-200 shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-white p-8">
                <CardTitle className="flex items-center text-slate-800 font-playfair text-2xl">
                  <MessageSquare className="h-8 w-8 mr-4 text-slate-600" />
                  Tell Us What You Think
                </CardTitle>
                <CardDescription className="text-slate-600 text-lg">
                  Would you be interested in our upcoming services? Your feedback helps us prioritize!
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-700 font-semibold text-base">Name</Label>
                      <Input 
                        id="name" 
                        value={formData.name} 
                        onChange={(e) => handleInputChange('name', e.target.value)} 
                        placeholder="Your name" 
                        required 
                        className="mt-2 border-2 border-slate-200 focus:border-slate-600 rounded-xl py-3 text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-700 font-semibold text-base">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={(e) => handleInputChange('email', e.target.value)} 
                        placeholder="your.email@example.com" 
                        required 
                        className="mt-2 border-2 border-slate-200 focus:border-slate-600 rounded-xl py-3 text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="interest" className="text-slate-700 font-semibold text-base">Which service interests you most?</Label>
                    <Input 
                      id="interest" 
                      value={formData.interest} 
                      onChange={(e) => handleInputChange('interest', e.target.value)} 
                      placeholder="e.g., Coach Brackets Cleaning" 
                      className="mt-2 border-2 border-slate-200 focus:border-slate-600 rounded-xl py-3 text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="feedback" className="text-slate-700 font-semibold text-base">Additional feedback or suggestions</Label>
                    <Textarea 
                      id="feedback" 
                      value={formData.feedback} 
                      onChange={(e) => handleInputChange('feedback', e.target.value)} 
                      placeholder="Tell us about any other cleaning services you'd love to see..." 
                      rows={4} 
                      className="mt-2 border-2 border-slate-200 focus:border-slate-600 rounded-xl text-base"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Mail className="h-5 w-5 mr-3" />
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
