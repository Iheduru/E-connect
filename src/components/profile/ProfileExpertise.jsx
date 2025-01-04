import PropTypes from 'prop-types';

export function ProfileExpertise({ expertise }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Expertise</h2>
      <div className="flex flex-wrap gap-2">
        {expertise.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

ProfileExpertise.propTypes = {
  expertise: PropTypes.arrayOf(PropTypes.string).isRequired,
};