import { useParams } from 'react-router-dom';
import { CategoryHero } from '../components/categories/CategoryHero';
import { CategoryMentorGrid } from '../components/categories/CategoryMentorGrid';

const CATEGORY_BACKGROUNDS = {
  'agriculture': 'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
  // Add more categories as needed
};

const AGRICULTURE_MENTORS = [
  {
    id: '1',
    name: 'Frimpong Manso',
    role: 'Administrator',
    company: "Bell's Farm",
    location: 'London, UK',
    sessions: 189,
    reviews: 39,
    experience: 6,
    followers: 3234,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2'
  },
  {
    id: '2',
    name: 'Luther Ashley',
    role: 'Keeper',
    company: "Wendy's Bee Farm",
    location: 'Berlin, Germany',
    sessions: 189,
    reviews: 39,
    experience: 8,
    followers: 3234,
    imageUrl: 'https://images.unsplash.com/photo-1516733968668-dbdce39c4651'
  },
  {
    id: '3',
    name: 'Riley Romy',
    role: 'Owner',
    company: 'R&R Plants',
    location: 'Amsterdam, Netherlands',
    sessions: 189,
    reviews: 39,
    experience: 5,
    followers: 3234,
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04'
  },
  {
    id: '4',
    name: 'Kome',
    role: 'CEO',
    company: "Kome's Flowers",
    location: 'Paris, France',
    sessions: 189,
    reviews: 39,
    experience: 5,
    followers: 3234,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  }
];

export function CategoryDetailPage() {
  const { id } = useParams();
  const backgroundImage = CATEGORY_BACKGROUNDS[id?.toLowerCase()] || CATEGORY_BACKGROUNDS.agriculture;
  const title = id?.charAt(0).toUpperCase() + id?.slice(1) || 'Agriculture';

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHero title={title} backgroundImage={backgroundImage} />
      
      <div className="container mx-auto px-4 py-12">
        <CategoryMentorGrid mentors={AGRICULTURE_MENTORS} />
      </div>

      <div className="text-center py-8">
        <button 
          onClick={() => window.history.back()}
          className="px-6 py-2 text-indigo-600 hover:text-indigo-700 transition"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}