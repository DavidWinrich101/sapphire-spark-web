import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { User, LogOut } from 'lucide-react';
const Navigation = () => {
  const {
    user,
    signOut
  } = useAuth();
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const handleSignOut = async () => {
    const {
      error
    } = await signOut();
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
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-4 flex justify-between items-center bg bg-slate-50">
        <Link to="/" className="text-2xl font-bold font-playfair text-slate-800">
          Sapphire Spark
        </Link>
        
        <div className="flex items-center gap-4">
          {user ? <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-700">
                <User className="h-4 w-4" />
                <span className="text-sm">{user.email}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleSignOut} className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div> : <Link to="/auth">
              <Button variant="outline" size="sm" className="text-gray-50 bg-slate-900 hover:bg-slate-800">
                Sign In
              </Button>
            </Link>}
        </div>
      </div>
    </nav>;
};
export default Navigation;