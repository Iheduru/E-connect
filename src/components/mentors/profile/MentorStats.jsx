import PropTypes from 'prop-types';

export function MentorStats({ experience, followers, sessions, reviews }) {
  const stats = [
    { label: 'Experience', value: `${experience} years` },
    { label: 'Followers', value: followers.toLocaleString() },
    { label: 'Sessions', value: sessions },
    { label: 'Reviews', value: reviews }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map(({ label, value }) => (
        <div key={label} className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">{label}</p>
          <p className="font-semibold">{value}</p>
        </div>
      ))}
    </div>
  );
}

MentorStats.propTypes = {
  experience: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  sessions: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};