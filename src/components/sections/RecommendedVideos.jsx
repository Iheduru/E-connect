import { Play } from 'lucide-react';

export function RecommendedVideos() {
  const videos = Array(4).fill({
    title: 'Tech school \'23',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8">Watch videos you may like</h2>
        <div className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {videos.map((video, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden group">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-between">
                <div className="self-center opacity-0 group-hover:opacity-100 transition">
                  <Play className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" />
                </div>
                <h3 className="text-white font-medium text-lg sm:text-xl md:text-2xl">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
