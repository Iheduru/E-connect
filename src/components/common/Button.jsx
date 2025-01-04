import PropTypes from 'prop-types';

export function Button({ children, variant = 'primary', className = '', onClick }) {
  const baseClasses = 'px-8 py-3 rounded-full transition';
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    secondary: 'bg-white text-purple-900 hover:bg-purple-50'
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};