import PropTypes from 'prop-types';
import { MentorCard } from './MentorCard';

export function MentorsList({ mentors }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">My Mentors</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </section>
  );
}

MentorsList.propTypes = {
  mentors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      sessions: PropTypes.number.isRequired,
      reviews: PropTypes.number.isRequired,
      experience: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ).isRequired,
};