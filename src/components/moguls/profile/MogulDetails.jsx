import PropTypes from 'prop-types';

export function MogulDetails({ mogul }) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Details</h2>
      <div className="prose max-w-none">
        <p className="text-gray-700 whitespace-pre-line">{mogul.details}</p>
      </div>
    </div>
  );
}

MogulDetails.propTypes = {
  mogul: PropTypes.shape({
    details: PropTypes.string.isRequired,
  }).isRequired,
};