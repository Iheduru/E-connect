import PropTypes from 'prop-types';
import { MapPin } from 'lucide-react';

export function CategoryMentorCard({ 
  name, 
  role, 
  company, 
  location, 
  sessions,
  reviews,
  experience,
  followers,
  imageUrl 
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600">{role} at {company}</p>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 mb-4">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div>
            <span className="font-semibold">{sessions}</span> sessions
          </div>
          <div>
            <span className="font-semibold">{reviews}</span> reviews
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Experience</p>
            <p className="font-semibold">{experience} years</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Followers</p>
            <p className="font-semibold">{followers}</p>
          </div>
        </div>

        <button className="w-full py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
          Follow
        </button>
      </div>
    </div>
  );
}

CategoryMentorCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  sessions: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  experience: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};