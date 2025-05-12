
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, GraduationCap, Book, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Mock login function - will be replaced with real auth
  const handleAuthAction = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      navigate('/login');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-learn-primary" />
          <span className="text-xl font-bold text-learn-dark">LearnHub</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-learn-dark" />
          ) : (
            <Menu className="h-6 w-6 text-learn-dark" />
          )}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink 
            to="/"
            className={({ isActive }) => 
              cn("font-medium hover:text-learn-primary transition-colors", 
                isActive ? "text-learn-primary" : "text-learn-dark")
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/courses"
            className={({ isActive }) => 
              cn("font-medium hover:text-learn-primary transition-colors", 
                isActive ? "text-learn-primary" : "text-learn-dark")
            }
          >
            Courses
          </NavLink>
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              cn("font-medium hover:text-learn-primary transition-colors", 
                isActive ? "text-learn-primary" : "text-learn-dark")
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact"
            className={({ isActive }) => 
              cn("font-medium hover:text-learn-primary transition-colors", 
                isActive ? "text-learn-primary" : "text-learn-dark")
            }
          >
            Contact
          </NavLink>
        </div>
        
        <div className="hidden lg:flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <NavLink 
                to="/dashboard"
                className="flex items-center space-x-1 text-learn-dark hover:text-learn-primary transition-colors"
              >
                <Book className="h-5 w-5" />
                <span>My Learning</span>
              </NavLink>
              <Button 
                variant="outline" 
                onClick={handleAuthAction}
                className="border-learn-primary text-learn-primary hover:bg-learn-primary hover:text-white"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Button 
                onClick={handleAuthAction}
                className="bg-learn-primary hover:bg-learn-primary/90 text-white"
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button 
                onClick={() => navigate('/register')}
                variant="outline" 
                className="border-learn-primary text-learn-primary hover:bg-learn-primary hover:text-white"
              >
                Register
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                cn("font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors", 
                  isActive ? "text-learn-primary bg-gray-50" : "text-learn-dark")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/courses"
              className={({ isActive }) => 
                cn("font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors", 
                  isActive ? "text-learn-primary bg-gray-50" : "text-learn-dark")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) => 
                cn("font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors", 
                  isActive ? "text-learn-primary bg-gray-50" : "text-learn-dark")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                cn("font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors", 
                  isActive ? "text-learn-primary bg-gray-50" : "text-learn-dark")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            {isLoggedIn ? (
              <>
                <NavLink 
                  to="/dashboard"
                  className={({ isActive }) => 
                    cn("font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center", 
                      isActive ? "text-learn-primary bg-gray-50" : "text-learn-dark")
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Book className="h-5 w-5 mr-2" />
                  My Learning
                </NavLink>
                <Button 
                  onClick={() => {
                    handleAuthAction();
                    setIsMenuOpen(false);
                  }}
                  variant="outline" 
                  className="w-full border-learn-primary text-learn-primary hover:bg-learn-primary hover:text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button 
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-learn-primary hover:bg-learn-primary/90 text-white"
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button 
                  onClick={() => {
                    navigate('/register');
                    setIsMenuOpen(false);
                  }}
                  variant="outline" 
                  className="w-full border-learn-primary text-learn-primary hover:bg-learn-primary hover:text-white"
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
