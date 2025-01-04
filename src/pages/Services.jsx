import { Star } from 'lucide-react';

const services = [
  {
    title: '1-on-1 Mentorship',
    description: 'Get personalized guidance from experienced professionals',
    price: 'From $50/hour'
  },
  {
    title: 'Group Sessions',
    description: 'Learn with peers in interactive group settings',
    price: 'From $30/session'
  },
  {
    title: 'Code Review',
    description: 'Get expert feedback on your projects',
    price: 'From $40/review'
  },
  {
    title: 'Career Guidance',
    description: 'Plan your career path with industry experts',
    price: 'From $60/session'
  }
];

export function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ title, description, price }) => (
          <div key={title} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <Star className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <p className="text-purple-600 font-semibold">{price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}