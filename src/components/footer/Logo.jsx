import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div>
        <Link to="/" className="text-[#1a1a1a] hover:text-indigo-600"> 
        <img 
              src="/src/assets/images/Logo.png" 
              alt="Logo" 
              className="h-8 w-auto"
            />
         E-Connect</Link>
        <p className="text-sm text-gray-600 max-w-md">
          Your trusted source to find highly-vetted mentors & industry professionals to move your career ahead.
        </p>
      </div>
    </div>
  );
}