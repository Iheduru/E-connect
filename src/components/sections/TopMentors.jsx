import { MentorCard } from '../mentors/MentorCard';
import { topMentors } from '../../data/mentors';

export function TopMentors() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Discover Top Mentors</h2>
        <div className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {topMentors.slice(0, 6).map((mentor, index) => (
            <div key={index} className="min-w-[250px]">
              <MentorCard {...mentor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
