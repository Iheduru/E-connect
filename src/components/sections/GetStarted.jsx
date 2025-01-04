import { useState } from 'react';
import { Button } from '../common/Button';
import { SignUpModal } from '../auth/SignUpModal';

export function GetStarted() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <section className="py-10 bg-purple-50">
        <div className="text-center">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <img
              src="https://placehold.co/150x150"
              alt="Profile of a young woman with a hairpin"
              className="rounded-lg"
            />
            <img
              src="https://placehold.co/150x150"
              alt="Profile of a person teaching"
              className="rounded-lg opacity-20"
            />
            <img
              src="https://placehold.co/150x150"
              alt="Profile of a person painting"
              className="rounded-lg opacity-20"
            />
            <img
              src="https://placehold.co/150x150"
              alt="Profile of a ballet teacher and student"
              className="rounded-lg opacity-20"
            />
            <div className="col-span-1 flex flex-col items-center justify-center gap-4">
              <h1 className="text-6xl font-bold text-blue-900">
                Build the future together
              </h1>
              <Button onClick={() => setShowSignUp(true)}>Sign up</Button>
            </div>
            <img
              src="https://placehold.co/150x150"
              alt="Profile of a person playing soccer"
              className="rounded-lg opacity-20"
            />
            <img
              src="https://placehold.co/150x150"
              alt="Profile of a graduate"
              className="rounded-lg opacity-20"
            />
                        <img
              src="https://placehold.co/150x150"
              alt="Profile of a graduate"
              className="rounded-lg opacity-20"
            />
                        <img
              src="https://placehold.co/150x150"
              alt="Profile of a graduate"
              className="rounded-lg opacity-20"
            />
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
