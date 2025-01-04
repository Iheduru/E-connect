import { useState } from 'react';
import { X } from 'lucide-react';
import { LoginOptions } from './LoginOptions';
import { MentorLogin } from './MentorLogin';
import { MenteeLogin } from './MenteeLogin';

export function LoginModal({ isOpen, onClose }) {
  const [loginType, setLoginType] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        {!loginType ? (
          <LoginOptions onSelect={setLoginType} />
        ) : loginType === 'mentor' ? (
          <MentorLogin onBack={() => setLoginType(null)} />
        ) : (
          <MenteeLogin onBack={() => setLoginType(null)} />
        )}
      </div>
    </div>
  );
}