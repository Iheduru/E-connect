import PropTypes from 'prop-types';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CategoryHero({ title, backgroundImage }) {
  return (
    <div className="relative h-[300px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4">
        <div className="flex flex-col h-full justify-between py-6">
          {/* Back Button */}
          <Link 
            to="/categories"
            className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors w-fit"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to categories</span>
          </Link>

          {/* Title */}
          <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
        </div>
      </div>
    </div>
  );
}

CategoryHero.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};