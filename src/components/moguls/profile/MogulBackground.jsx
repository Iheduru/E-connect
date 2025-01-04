import PropTypes from 'prop-types';
import { MapPin, Users, Star } from 'lucide-react';

export function MogulBackground({ mogul }) {
  return (
    <div className="p-8 border-b border-gray-100">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <img
            src={mogul.imageUrl}
            alt={mogul.name}
            className="w-full aspect-square object-cover rounded-lg"
          />
        </div>
        
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{mogul.name}</h1>
          <p className="text-gray-600 mb-4">{mogul.title}</p>
          
          <div className="flex items-center gap-2 text-gray-600 mb-6">
            <MapPin className="h-5 w-5" />
            <span>{mogul.location}</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Experience</p>
              <p className="font-semibold">{mogul.experience} years</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Followers</p>
              <p className="font-semibold">{mogul.followers}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Sessions</p>
              <p className="font-semibold">{mogul.sessions}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Reviews</p>
              <p className="font-semibold">{mogul.reviews}</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">{mogul.background}</p>
          
          <button className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

MogulBackground.propTypes = {
  mogul: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    sessions: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
};