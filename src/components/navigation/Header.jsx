import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavLinks } from './NavLinks';
import { SearchBar } from './SearchBar';
import { MobileNav } from './MobileNav';
import { SignUpModal } from './SignUpModal'; // Import the SignUpModal component

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="border-b border-gray-100 py-4 relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-8">
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold"
              onClick={closeMobileMenu}
              aria-label="Go to home page"
            >
              <img
                src="/assets/images/Logo.png" // Update path for production
                alt="Logo"
                className="h-8 w-auto"
              />
              mentorHub
            </Link>
            <NavLinks />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <SearchBar />
            <button
              className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
              onClick={() => setIsSignUpOpen(true)}
            >
              Sign up
            </button>
            <button className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <SignUpModal
          isOpen={isSignUpOpen}
          onClose={() => setIsSignUpOpen(false)}
        />
      )}
    </header>
  );
}
