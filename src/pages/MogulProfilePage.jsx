import { useParams } from 'react-router-dom';
import { MogulProfile } from '../components/moguls/MogulProfile';
import { moguls } from '../data/mogulsData';

export function MogulProfilePage() {
  const { id } = useParams();
  const mogul = moguls.find(m => m.id === id);

  if (!mogul) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Mogul not found</h1>
      </div>
    );
  }

  return <MogulProfile mogul={mogul} />;
}