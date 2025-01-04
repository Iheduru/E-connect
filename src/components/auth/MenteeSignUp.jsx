import PropTypes from 'prop-types';
import { ArrowLeft } from 'lucide-react';

export function MenteeSignUp({ onBack }) {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Sign up as Mentee</h2>
      
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition"
        >
          Sign up
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <a href="#" className="text-emerald-600 hover:text-emerald-700">
          Log in
        </a>
      </p>
    </div>
  );
}

MenteeSignUp.propTypes = {
  onBack: PropTypes.func.isRequired,
};