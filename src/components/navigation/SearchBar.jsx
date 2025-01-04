import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="hidden md:block relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      <input
        type="search"
        placeholder="Search"
        className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-purple-500"
      />
    </div>
  );
}