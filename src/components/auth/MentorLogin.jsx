import PropTypes from 'prop-types';
import { ArrowLeft } from 'lucide-react';

export function MentorLogin({ onBack }) {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>
      
      <div className="bg-white p-6 w-full max-w-md">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-blue-900">Log in</h1>
    </div>
    <div className="flex border-b mb-6">
      <button  onClick={() => onSelect('mentee')} className="flex-1 pb-2 text-center text-blue-900 ">
        Mentee
      </button>
      <button onClick={() => onSelect('mentor')} className="flex-1 pb-2 text-center text-blue-900 border-b-2 border-green-400">Mentor</button>
    </div>
    <form>
      <div className="mb-4">
        <label className="block text-blue-900 mb-2">Email address</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-full p-3 border rounded bg-gray-200"
        />
      </div>
      <div className="mb-4 relative">
        <label className="block text-blue-900 mb-2">Password</label>
        <input
          type="password"
          placeholder="********"
          className="w-full p-3 border rounded bg-gray-200"
        />
        <i className="fas fa-eye absolute right-3 top-10 text-gray-500"></i>
      </div>
      <button
        type="submit"
        className="w-full p-3 bg-green-400 text-black rounded mb-4"
      >
        Login
      </button>
      <div className="flex items-center mb-4">
        <hr className="flex-1" />
        <span className="px-2 text-gray-500">Or</span>
        <hr className="flex-1" />
      </div>
      <button
        type="button"
        className="w-full p-3 bg-gray-200 text-blue-900 rounded flex items-center justify-center"
      >
        <img
          src="https://placehold.co/20x20"
          alt="Google logo"
          className="mr-2"
        />
        Log in with Google
      </button>
    </form>
    <div className="text-center mt-4">
      <a href="#" className="text-blue-900">
        Forgot password?
      </a>
    </div>
    <div className="text-center mt-2 text-gray-700">
      Don’t have an account?{" "}
      <br></br>
      <a href="#" className="text-blue-900">
        Sign up as a mentee
      </a>{" "}
      or{" "}
      <a href="#" className="text-blue-900">
        Sign up as a mentor
      </a>
    </div>
  </div>
    </div>
  );
}

MentorLogin.propTypes = {
  onBack: PropTypes.func.isRequired,
};