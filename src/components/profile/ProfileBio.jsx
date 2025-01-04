import PropTypes from 'prop-types';

export function ProfileBio({ bio }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Bio</h2>
      <p className="text-gray-600">{bio}</p>
    </section>
  );
}

ProfileBio.propTypes = {
  bio: PropTypes.string.isRequired,
};