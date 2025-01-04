import PropTypes from 'prop-types';
import { Users, Star } from 'lucide-react';

export function MentorCard({ mentor }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <img
        src={mentor.imageUrl}
        alt={mentor.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">{mentor.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{mentor.title}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{mentor.sessions} sessions</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400" />
            <span>{mentor.reviews} reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center text-sm">
          <div className="p-2 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Experience</p>
            <p className="font-semibold">{mentor.experience} years</p>
          </div>
          <div className="p-2 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Followers</p>
            <p className="font-semibold">{mentor.followers}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

MentorCard.propTypes = {
  mentor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    sessions: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    experience: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};