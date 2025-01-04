import { Link } from 'react-router-dom';

export function FooterLinks() {
  const mainLinks = [
    { to: '/mentors', label: 'find mentors' },
    { to: '/', label: 'become a mentor' },
    { to: '/community', label: 'community' },
    { to: '/blog', label: 'blog' },
  ];

  const supportLinks = [
    { to: '/', label: 'Join E-Connect' },
    { to: '/faqs', label: 'FAQs' },
    { to: '/help', label: 'help center' },
  ];

  const legalLinks = [
    { to: '/contact', label: 'Contact us' },
    { to: '/privacy', label: 'Privacy policy' },
    { to: '/terms', label: 'Terms of use' },
  ];

  return (
    <div className="hidden md:flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-12 w-full">
      <nav className="flex flex-col items-center md:items-start gap-4">
        {mainLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="text-[#1a1a1a] hover:text-indigo-600 transition"
          >
            {label}
          </Link>
        ))}
      </nav>

      <nav className="flex flex-col items-center md:items-start gap-4">
        {supportLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="text-[#1a1a1a] hover:text-indigo-600 transition"
          >
            {label}
          </Link>
        ))}
      </nav>

      <nav className="flex flex-col items-center md:items-start gap-4">
        {legalLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="text-gray-500 hover:text-indigo-600 transition"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
