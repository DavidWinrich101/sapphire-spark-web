
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { User, LogOut, Sparkles, Menu } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200/30">
      <div className="container mx-auto px-6 flex justify-between items-center py-8">
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="relative w-12 h-12 premium-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
            <Sparkles className="h-7 w-7 text-white group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-slate-300 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div>
            <span className="text-3xl font-bold font-playfair text-slate-800 group-hover:text-slate-700 transition-colors duration-300">
              Sapphire Spark
            </span>
            <div className="text-sm text-slate-500 font-medium tracking-wide">Cleaning Services</div>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {user ? (
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4 glass-effect px-6 py-3 rounded-2xl border border-slate-200/50">
                <div className="w-8 h-8 premium-gradient rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-800">{user.email}</span>
                  <div className="text-xs text-slate-500">Premium Member</div>
                </div>
              </div>
              <Button 
                onClick={handleSignOut} 
                className="outline-premium-button flex items-center gap-3"
              >
                <LogOut className="h-5 w-5" />
                Sign Out
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button className="premium-button flex items-center gap-3">
                <User className="h-5 w-5" />
                Sign In
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-700 hover:text-slate-800"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-t border-slate-200/30 p-6">
          {user ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 glass-effect rounded-xl">
                <User className="h-5 w-5 text-slate-600" />
                <span className="text-sm font-medium text-slate-800">{user.email}</span>
              </div>
              <Button 
                onClick={handleSignOut} 
                className="w-full outline-premium-button"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full premium-button">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
