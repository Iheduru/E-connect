import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function ArticleCard({ title, excerpt, image, slug, date, readTime }) {
  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <Link to={`/blog/${slug}`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime} min read</span>
          </div>
          <h3 className="text-xl font-bold mb-2 hover:text-purple-600 transition">{title}</h3>
          <p className="text-gray-600">{excerpt}</p>
        </div>
      </Link>
    </article>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired
};