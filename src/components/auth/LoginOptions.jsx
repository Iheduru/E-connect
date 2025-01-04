import PropTypes from 'prop-types';

export function LoginOptions({ onSelect }) {
  return (
    <div className="text-center">
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100"
        alt="Login"
        className="w-24 h-24 rounded-full mx-auto mb-6"
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        How would you like to login?
      </h2>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => onSelect('mentor')}
          className="px-6 py-2 rounded-full border-2 border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition"
        >
          Mentor
        </button>
        <button
          onClick={() => onSelect('mentee')}
          className="px-6 py-2 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition"
        >
          Mentee
        </button>
      </div>
    </div>
  );
}

LoginOptions.propTypes = {
  onSelect: PropTypes.func.isRequired,
};