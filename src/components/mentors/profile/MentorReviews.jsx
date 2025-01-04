import PropTypes from 'prop-types';
import { Star } from 'lucide-react';

export function MentorReviews({ reviews }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.imageUrl}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-600">{review.title}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-2">{review.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

MentorReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};