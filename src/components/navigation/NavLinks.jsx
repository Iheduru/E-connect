import { Link } from 'react-router-dom';

export function NavLinks() {
  return (
    <div className="hidden lg:flex items-center gap-6">
      <Link to="/categories" className="text-gray-600 hover:text-purple-600 transition-colors">
        Categories
      </Link>
      <Link to="/mentors" className="text-gray-600 hover:text-purple-600 transition-colors">
        Mentors
      </Link>
      <Link to="/mentees" className="text-gray-600 hover:text-purple-600 transition-colors">
        Mentees
      </Link>
      <Link to="/services" className="text-gray-600 hover:text-purple-600 transition-colors">
        Services
      </Link>
      <Link to="/learning" className="text-gray-600 hover:text-purple-600 transition-colors">
        Learning
      </Link>
      <Link to="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
        Blog
      </Link>
      <Link to="/profile" className="text-gray-600 hover:text-purple-600 transition-colors">
        My Profile
      </Link>
    </div>
  );
}