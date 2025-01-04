import PropTypes from 'prop-types';
import { Pencil } from 'lucide-react';

export function ProfileHeader({ user }) {
  return (
    <div className="relative">
      <div className="h-48 bg-emerald-200"></div>
      <div className="container mx-auto px-4">
        <div className="relative -mt-24">
          <div className="flex justify-between items-start">
            <div className="flex items-end gap-4">
              <div className="relative">
                <img
                  src={user.imageUrl}
                  alt={user.name}
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full shadow-sm">
                  <Pencil className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  {user.verified && (
                    <span className="text-green-500">✓</span>
                  )}
                </div>
                <p className="text-gray-600">{user.title}</p>
                <p className="text-sm text-gray-500">{user.location}</p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
              Edit profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProfileHeader.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    verified: PropTypes.bool.isRequired,
  }).isRequired,
};