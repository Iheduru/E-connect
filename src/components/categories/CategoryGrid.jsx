import PropTypes from 'prop-types';
import { CategoryCard } from './CategoryCard';

export function CategoryGrid({ categories }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          Icon={category.icon}
          name={category.name}
          count={category.count}
        />
      ))}
    </div>
  );
}

CategoryGrid.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
};