import PropTypes from 'prop-types';

export function FormField({ label, type = 'text', ...props }) {
  return (
    <div className="mb-4">
      <label className="block text-[#1a1a1a] font-medium mb-2">{label}</label>
      <input
        type={type}
        className="w-full p-3 rounded-lg bg-[#F8F9FC] border border-gray-200 focus:outline-none focus:border-indigo-500"
        {...props}
      />
    </div>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};