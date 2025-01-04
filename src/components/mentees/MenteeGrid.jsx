import PropTypes from 'prop-types';
import { MenteeCard } from './MenteeCard';

export function MenteeGrid({ mentees }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {mentees.map((mentee) => (
        <MenteeCard key={mentee.id} {...mentee} />
      ))}
    </div>
  );
}

MenteeGrid.propTypes = {
  mentees: PropTypes.arrayOf(
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