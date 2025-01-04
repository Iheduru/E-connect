import PropTypes from 'prop-types';

export function MentorAbout({ about, skills }) {
  return (
    <div className="space-y-8 mb-8">
      <section>
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <p className="text-gray-600">{about}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

MentorAbout.propTypes = {
  about: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};