import PropTypes from 'prop-types';
import { Heart } from 'lucide-react';

export function MentorProfileHeader({ mentor }) {
  return (
    <div className="relative">
      {/* Cover Image - Using a mint/sage green background */}
      <div className="h-48 bg-[#a8d5ba]" />
      
      <div className="container mx-auto px-4">
        <div className="relative -mt-24 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Profile Image */}
            <img
              src={mentor.imageUrl}
              alt={mentor.name}
              className="w-32 h-32 rounded-lg object-cover border-4 border-white"
            />
            
            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{mentor.name}</h1>
                  <p className="text-gray-600">{mentor.role} at {mentor.company}</p>
                  <p className="text-sm text-gray-500">{mentor.location}</p>
                </div>
                
                <div className="flex gap-2">
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                    Follow
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MentorProfileHeader.propTypes = {
  mentor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};