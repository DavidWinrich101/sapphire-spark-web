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
  const {
    toast
  } = useToast();
  const upcomingServices = ["Coach Brackets & Accessories Cleaning", "Jewelry Cleaning & Polishing", "Curtain & Drape Cleaning", "Leather Furniture Restoration"];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll notify you when these services become available."
    });
    setFormData({
      name: '',
      email: '',
      interest: '',
      feedback: ''
    });
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <section className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-pink-500 text-white border-pink-400 mb-4">
            Coming Soon
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-4">
            Exciting New Services
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto mb-8"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We're constantly expanding our services to meet your needs. Be the first to know when these premium services launch!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Upcoming Services List */}
          <div>
            <Card className="bg-white border-slate-600">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800 font-playfair">
                  <Sparkles className="h-6 w-6 mr-3 text-pink-500" />
                  What's Coming Next
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Premium services in development to serve you better
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {upcomingServices.map((service, index) => <li key={index} className="flex items-center p-3 bg-slate-50 rounded-lg border border-pink-100">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-4"></div>
                      <span className="text-slate-700 font-medium">{service}</span>
                      <Badge variant="outline" className="ml-auto text-xs border-pink-300 text-pink-600">
                        Soon
                      </Badge>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Feedback Form */}
          <div>
            <Card className="bg-white border-slate-600">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800 font-playfair">
                  <MessageSquare className="h-6 w-6 mr-3 text-pink-500" />
                  Tell Us What You Think
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Would you be interested in our upcoming services? Your feedback helps us prioritize!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="">
                      <Label htmlFor="name" className="text-slate-700">Name</Label>
                      <Input id="name" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} placeholder="Your name" required className="bg-pink-300" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-700">Email</Label>
                      <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} placeholder="your.email@example.com" required className="bg-pink-300" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="interest" className="text-slate-700">Which service interests you most?</Label>
                    <Input id="interest" value={formData.interest} onChange={e => handleInputChange('interest', e.target.value)} placeholder="e.g., Coach Brackets Cleaning" className="bg-pink-300" />
                  </div>

                  <div>
                    <Label htmlFor="feedback" className="text-slate-700">Additional feedback or suggestions</Label>
                    <Textarea id="feedback" value={formData.feedback} onChange={e => handleInputChange('feedback', e.target.value)} placeholder="Tell us about any other cleaning services you'd love to see..." rows={4} />
                  </div>

                  <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                    <Mail className="h-4 w-4 mr-2" />
                    Notify Me When Available
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default UpcomingServices;