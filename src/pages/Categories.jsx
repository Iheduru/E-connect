import { CategoryGrid } from '../components/categories/CategoryGrid';
import { categories } from '../data/categoryData';

export function Categories() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Let's find some mentors to follow!</h1>
          <p className="text-gray-600 text-lg">Select your interests and discover mentors</p>
        </div>
        <CategoryGrid categories={categories} />
      </div>
    </div>
  );
}