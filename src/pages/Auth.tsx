
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Mail, Lock, User } from 'lucide-react';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { error } = await signIn(email, password);
    if (error) {
      toast({
        title: "Sign in failed",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in."
      });
      navigate('/');
    }
    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string;

    const { error } = await signUp(email, password, fullName);
    if (error) {
      toast({
        title: "Sign up failed",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Account created!",
        description: "Please check your email to verify your account."
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-slate-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-300 rounded-lg transform rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200 rounded-full"></div>
      </div>

      <div className="w-full max-w-lg p-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 glass-effect rounded-full mb-6 shadow-2xl">
            <Sparkles className="h-10 w-10 text-slate-700" />
          </div>
          <h1 className="text-4xl font-bold font-playfair text-slate-800 mb-3">Sapphire Spark</h1>
          <p className="text-lg text-slate-600">Welcome to premium cleaning services</p>
        </div>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl p-1">
            <TabsTrigger 
              value="signin" 
              className="text-slate-600 data-[state=active]:bg-slate-800 data-[state=active]:text-white rounded-lg py-3 font-semibold transition-all duration-300"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger 
              value="signup" 
              className="text-slate-600 data-[state=active]:bg-slate-800 data-[state=active]:text-white rounded-lg py-3 font-semibold transition-all duration-300"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <Card className="border-2 border-slate-200 shadow-2xl glass-effect rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-white/90 to-slate-50/90 backdrop-blur-sm p-8">
                <CardTitle className="text-slate-800 text-2xl font-playfair">Welcome Back</CardTitle>
                <CardDescription className="text-slate-600 text-base">
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-white/90 backdrop-blur-sm p-8">
                <form onSubmit={handleSignIn} className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="signin-email" className="text-slate-700 font-semibold">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input 
                        id="signin-email" 
                        name="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                        className="pl-10 border-2 border-slate-200 focus:border-slate-600 focus:ring-slate-600 bg-white/80 backdrop-blur-sm rounded-xl py-3 text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="signin-password" className="text-slate-700 font-semibold">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input 
                        id="signin-password" 
                        name="password" 
                        type="password" 
                        placeholder="Your password" 
                        required 
                        className="pl-10 border-2 border-slate-200 focus:border-slate-600 focus:ring-slate-600 bg-white/80 backdrop-blur-sm rounded-xl py-3 text-base"
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card className="border-2 border-slate-200 shadow-2xl glass-effect rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-white/90 to-slate-50/90 backdrop-blur-sm p-8">
                <CardTitle className="text-slate-800 text-2xl font-playfair">Join Sapphire Spark</CardTitle>
                <CardDescription className="text-slate-600 text-base">
                  Create your account to access premium cleaning services
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-white/90 backdrop-blur-sm p-8">
                <form onSubmit={handleSignUp} className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="signup-name" className="text-slate-700 font-semibold">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input 
                        id="signup-name" 
                        name="fullName" 
                        type="text" 
                        placeholder="Your full name" 
                        required 
                        className="pl-10 border-2 border-slate-200 focus:border-slate-600 focus:ring-slate-600 bg-white/80 backdrop-blur-sm rounded-xl py-3 text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="signup-email" className="text-slate-700 font-semibold">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input 
                        id="signup-email" 
                        name="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                        className="pl-10 border-2 border-slate-200 focus:border-slate-600 focus:ring-slate-600 bg-white/80 backdrop-blur-sm rounded-xl py-3 text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="signup-password" className="text-slate-700 font-semibold">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input 
                        id="signup-password" 
                        name="password" 
                        type="password" 
                        placeholder="Create a secure password" 
                        required 
                        minLength={6} 
                        className="pl-10 border-2 border-slate-200 focus:border-slate-600 focus:ring-slate-600 bg-white/80 backdrop-blur-sm rounded-xl py-3 text-base"
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating account...' : 'Create Account'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
