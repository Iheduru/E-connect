import PropTypes from 'prop-types';
import { MapPin, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MogulCard({ 
  id,
  name, 
  title, 
  location, 
  sessions, 
  reviews,
  experience,
  followers,
  imageUrl 
}) {
  return (
    <Link to={`/moguls/${id}`} className="block">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm mb-3">{title}</p>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
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

          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{sessions} sessions</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>{reviews} reviews</span>
            </div>
          </div>

          <button className="w-full py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
            Follow
          </button>
        </div>
      </div>
    </Link>
  );
}

MogulCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  sessions: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  experience: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};