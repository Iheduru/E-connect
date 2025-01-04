import { moguls } from '../data/mogulsData';
import { MogulGrid } from '../components/moguls/MogulGrid';

export function Moguls() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Discover Top Moguls</h1>
          <p className="text-gray-600 text-lg mb-8">
            Connect with industry leaders who are shaping the future
          </p>
        </div>

        <MogulGrid moguls={moguls} />
      </div>
    </div>
  );
}