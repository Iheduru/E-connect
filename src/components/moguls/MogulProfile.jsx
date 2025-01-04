import PropTypes from 'prop-types';
import { MogulBackground } from './profile/MogulBackground';
import { MogulDetails } from './profile/MogulDetails';

export function MogulProfile({ mogul }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <MogulBackground mogul={mogul} />
          <MogulDetails mogul={mogul} />
        </div>
      </div>
    </div>
  );
}

MogulProfile.propTypes = {
  mogul: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    sessions: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
};