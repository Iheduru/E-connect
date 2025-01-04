import PropTypes from 'prop-types';

export function Link({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-purple-600 transition-colors"
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};