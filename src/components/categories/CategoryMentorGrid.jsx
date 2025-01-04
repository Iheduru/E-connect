import PropTypes from 'prop-types';
import { CategoryMentorCard } from './CategoryMentorCard';

export function CategoryMentorGrid({ mentors }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {mentors.map((mentor) => (
        <CategoryMentorCard key={mentor.id} {...mentor} />
      ))}
    </div>
  );
}

CategoryMentorGrid.propTypes = {
  mentors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      sessions: PropTypes.number.isRequired,
      reviews: PropTypes.number.isRequired,
      experience: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};