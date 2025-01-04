import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/categories', label: 'Categories' },
  { path: '/moguls', label: 'Moguls' },
  { path: '/mentors', label: 'Mentors' },
  { path: '/mentees', label: 'Mentees' },
  { path: '/learning', label: 'Learning' },
  { path: '/blog', label: 'Blog' },
  { path: '/profile', label: 'My Profile' }
];

export function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-100 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center h-14">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center py-4">
          <div className="flex items-center space-x-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 z-50">
            <div className="container mx-auto px-4 py-2">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="block py-3 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}