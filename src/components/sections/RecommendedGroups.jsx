import PropTypes from 'prop-types';

export function GroupCard({ title, description, members, events }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{members} members</span>
          <span>{events} events</span>
        </div>
        <button className="mt-4 w-full px-4 py-2 bg-[#1a1a1a] text-white rounded-full hover:bg-gray-800 transition">
          Join
        </button>
      </div>
    </div>
  );
}

GroupCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  members: PropTypes.number.isRequired,
  events: PropTypes.number.isRequired,
};

const groups = [
  {
    title: 'The tech mentees',
    description: 'Get acquainted with tech mentees like you',
    members: 36,
    events: 8,
  },
  {
    title: 'The tech mentees',
    description: 'Get acquainted with tech mentees like you',
    members: 36,
    events: 8,
  },
  {
    title: 'The tech mentees',
    description: 'Get acquainted with tech mentees like you',
    members: 36,
    events: 8,
  },
  {
    title: 'The tech mentees',
    description: 'Get acquainted with tech mentees like you',
    members: 36,
    events: 8,
  },
];

export function RecommendedGroups() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Groups You Might Like</h2>
        <div className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {groups.map((group, index) => (
            <div key={index} className="min-w-[250px]">
              <GroupCard {...group} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              alt="Discover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-4">
                Discover who is whom<br />in Nigeria
              </h3>
              <button className="w-fit px-6 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition">
                EXPLORE
              </button>
            </div>
          </div>

          <div className="relative h-80 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18"
              alt="Meet"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-4">
                Meet the influencials of<br />Nigeria
              </h3>
              <button className="w-fit px-6 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition">
                View events
              </button>
            </div>
          </div>
        </div>
 </section>
  );
}
