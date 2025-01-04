import PropTypes from 'prop-types';
import { MentorCard } from '../mentors/MentorCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CategoryDetail({ category, mentors }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[300px] bg-cover bg-center relative"
        style={{ 
          backgroundImage: `url(${category.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-end pb-8">
            <h1 className="text-4xl font-bold text-white">{category.name}</h1>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 py-4 overflow-x-auto">
            <Link to="/categories" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <nav className="flex items-center gap-8">
              <a href="#mentors" className="text-indigo-600">Mentors</a>
              <a href="#mentees" className="text-gray-600 hover:text-indigo-600">Mentees</a>
              <a href="#learning" className="text-gray-600 hover:text-indigo-600">Learning</a>
              <a href="#blog" className="text-gray-600 hover:text-indigo-600">Blog</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} {...mentor} />
          ))}
        </div>
      </div>
    </div>
  );
}

CategoryDetail.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  mentors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      sessions: PropTypes.number.isRequired,
      reviews: PropTypes.number.isRequired,
      experience: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};