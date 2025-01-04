import { useParams } from 'react-router-dom';
import { MentorProfileHeader } from '../components/mentors/profile/MentorProfileHeader';
import { MentorStats } from '../components/mentors/profile/MentorStats';
import { MentorAbout } from '../components/mentors/profile/MentorAbout';
import { MentorReviews } from '../components/mentors/profile/MentorReviews';

// This would typically come from an API
const MENTOR_DATA = {
  id: '1',
  name: 'Frimpong Manso',
  role: 'Administrator',
  company: "Bell's Farm",
  location: 'London, UK',
  sessions: 189,
  reviews: 39,
  experience: 6,
  followers: 3234,
  imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
  about: "I don't just find joy in learning, also in helping people learn. I am on the mission to inspire educators and content creators to create inclusive and learner-centered experience for their learners, and also encourage everyone to take ownership of their learning journey.",
  skills: ['Project management', 'Testing', 'Accounting', 'Book keeping'],
  reviewsList: [
    {
      id: '1',
      name: 'Cynthia Lin',
      title: 'Product Design Mentee',
      content: 'Naz is an amazing person and a wonderful mentor. She is supportive and knowledgeable with extensive practical experience. Having been a manager at Netflix, she also knows a lot about working with teams at scale. Highly recommended!',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    {
      id: '2',
      name: 'Karen Harry',
      title: 'Real Estate Mentee',
      content: 'Sandrina helped me improve as an engineer. Looking back, I took a huge step, beyond my expectations.',
      imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e'
    }
  ]
};

export function MentorProfilePage() {
  const { id } = useParams();
  // In a real app, you'd fetch the mentor data based on the ID
  const mentor = MENTOR_DATA;

  if (!mentor) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Mentor not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <MentorProfileHeader mentor={mentor} />
      
      <div className="container mx-auto px-4 py-8">
        <MentorStats 
          experience={mentor.experience}
          followers={mentor.followers}
          sessions={mentor.sessions}
          reviews={mentor.reviews}
        />
        
        <MentorAbout 
          about={mentor.about}
          skills={mentor.skills}
        />
        
        <MentorReviews reviews={mentor.reviewsList} />
      </div>
    </div>
  );
}