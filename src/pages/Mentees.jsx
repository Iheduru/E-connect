import { mentees } from '../data/mentees';
import { MenteeGrid } from '../components/mentees/MenteeGrid';

export function Mentees() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Connect With Mentees Like You</h1>
          <p className="text-gray-600 text-lg mb-8">
            Find and connect with other mentees in your field
          </p>
          
        </div>

        <MenteeGrid mentees={mentees} />
      </div>
    </div>
  );
}