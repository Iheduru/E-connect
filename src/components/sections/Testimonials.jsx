import { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import { Button } from '../common/Button';
import { SignUpModal } from '../auth/SignUpModal';

export function Testimonials() {

    const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
    <section className="bg-gradient-to-b from-purple-200 to-blue-900">
      <div className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <div className="text-white lg:w-1/3 text-left flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-4xl font-bold text-center lg:text-left">Don’t just take our word for it!</h1>
            <p className="mt-4 text-lg text-center lg:text-left">
              We have already connected mentees and mentors, improving their work ethics, personal development, and overall growth.
            </p>
            <Button onClick={() => setShowSignUp(true)} className="mt-6 px-6 py-2 bg-green-500 text-white rounded">Sign up</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:w-2/3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex items-start text-left transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={testimonial.image}
                  alt={`Photo of ${testimonial.name}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold">{testimonial.name}</h2>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-gray-800 mt-2">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
          {/* Sign Up Modal */}
          {showSignUp && (
            <SignUpModal isOpen={showSignUp} onClose={() => setShowSignUp(false)} />
          )}
        </>
  );
}
