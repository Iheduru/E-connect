import { useState } from 'react';
import { Button } from '../common/Button';
import { SignUpModal } from '../auth/SignUpModal';

export function Hero() {
  const images = [
    { src: "https://placehold.co/50x50", alt: "Person 1" },
    { src: "https://placehold.co/50x50", alt: "Person 2" },
    { src: "https://placehold.co/50x50", alt: "Person 3" },
    { src: "https://placehold.co/50x50", alt: "Person 4" },
    { src: "https://placehold.co/50x50", alt: "Person 5" },
    { src: "https://placehold.co/50x50", alt: "Person 6" },
    { src: "https://placehold.co/50x50", alt: "Person 7" },
    { src: "https://placehold.co/50x50", alt: "Person 8" },
  ];

  const icons = [
    "fas fa-music",
    "fas fa-clock",
    "fas fa-briefcase",
    "fas fa-utensils",
    "fas fa-mobile-alt",
    "fas fa-cut",
    "fas fa-robot",
    "fas fa-smile",
    "fas fa-ice-cream",
  ];

  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="relative text-center p-6">
          {/* Hero Text and Button */}
          <div className="relative z-10 mb-10">
            <h1 className="text-3xl font-bold text-blue-900">Get started</h1>
            <p className="text-2xl text-blue-900">in less than 1 minute today</p>
            <Button onClick={() => setShowSignUp(true)}>Sign up</Button>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-4 gap-10 absolute top-0 left-0 w-full">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="rounded-full w-12 h-12"
                style={{
                  gridColumn: (index % 4) + 1, // Distribute images evenly across columns
                }}
              />
            ))}
          </div>

          {/* Icons Grid */}
          <div className="grid grid-cols-4 gap-10 absolute bottom-0 left-0 w-full">
            {icons.map((icon, index) => (
              <i
                key={index}
                className={`${icon} text-green-500 text-2xl`}
                style={{
                  gridColumn: (index % 4) + 1, // Distribute icons evenly across columns
                }}
                aria-hidden="true"
              ></i>
            ))}
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
