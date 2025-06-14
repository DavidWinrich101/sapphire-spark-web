
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { User, LogOut, Sparkles } from 'lucide-react';

const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account."
      });
      navigate('/');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200/20">
      <div className="container mx-auto px-4 flex justify-between items-center py-6">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="text-2xl font-bold font-playfair text-slate-800 group-hover:text-slate-700 transition-colors duration-300">
              Sapphire Spark
            </span>
          </div>
        </Link>
        
        <div className="flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 text-slate-700 dark-glass-effect px-4 py-2 rounded-xl">
                <User className="h-5 w-5" />
                <span className="text-sm font-medium">{user.email}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleSignOut} 
                className="flex items-center gap-2 border-2 border-slate-600 text-slate-700 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-300 rounded-xl px-6 py-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-slate-800 text-white border-2 border-slate-800 hover:bg-slate-700 hover:border-slate-700 transition-all duration-300 rounded-xl px-6 py-2 font-semibold"
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
