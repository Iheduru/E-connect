import { useState } from 'react';
import { Search, Home, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LoginModal } from '../auth/LoginModal';

export function TopHeader() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <>
      <header className="border-b border-gray-100 py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
            <img 
              src="/src/assets/images/Logo.png" 
              alt="Logo" 
              className="h-8 w-auto"
            />
              <span className="text-lg font-semibold">E-Connect</span>
            </Link>
            
            {/* Search - Desktop */}
            <div className="hidden md:block flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="flex flex-col items-center text-indigo-900 hover:text-indigo-700"
              >
                <Home className="h-5 w-5" />
                <span className="text-sm">Home</span>
              </Link>
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="px-6 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition font-medium"
              >
                LOGIN
              </button>
            </div>
          </div>

          {/* Search - Mobile */}
          <div className="mt-4 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}