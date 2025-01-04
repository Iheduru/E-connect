import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function CategoryCard({ Icon, name, count, image }) {
  return (
    <Link to={`/categories/${name.toLowerCase()}`}>
      <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
        <Icon className="h-8 w-8 text-teal-400" />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600">{count} mentors</p>
        </div>
      </div>
    </Link>
  );
}

CategoryCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};