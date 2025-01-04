import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/categories', label: 'Categories' },
  { to: '/mentors', label: 'Mentors' },
  { to: '/mentees', label: 'Mentees' },
  { to: '/services', label: 'Services' },
  { to: '/learning', label: 'Learning' },
  { to: '/blog', label: 'Blog' },
  { to: '/profile', label: 'My Profile' }
];

export function MobileNav({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/20 lg:hidden" 
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="fixed inset-x-0 top-[4rem] z-40 lg:hidden">
        <div className="bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map(({ to, label }) => (
                <Link 
                  key={to}
                  to={to} 
                  className="text-gray-600 hover:text-purple-600 transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg"
                  onClick={onClose}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};