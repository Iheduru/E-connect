import { courses } from '../data/courseData';
import { CourseCard } from '../components/learning/CourseCard';

export function Learning() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Let's learn more</h1>
          <p className="text-gray-600 text-lg">Take a course taught by your favourite mentor today!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
}