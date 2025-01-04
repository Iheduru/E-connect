import PropTypes from 'prop-types';
import { Clock, Users, BookOpen } from 'lucide-react';

export function CourseCard({ title, instructor, university, sessions, reviews, description, duration }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="relative h-48">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt={instructor}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{instructor}</p>
            <p className="text-sm text-gray-600">{university}</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{sessions} sessions</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{reviews} reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  sessions: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired
};