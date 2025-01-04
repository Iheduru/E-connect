import { topMentors } from '../data/mentors';
import { MentorGrid } from '../components/mentors/MentorGrid';


export function Mentors() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Discover Top Mentors</h1>
          <p className="text-gray-600 text-lg mb-8">
            Connect with industry experts who can guide you on your journey
          </p>
          
        </div>

        <MentorGrid mentors={topMentors} />
      </div>
    </div>
  );
}