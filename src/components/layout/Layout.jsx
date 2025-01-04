import { TopHeader } from './TopHeader';
import { MainNav } from './MainNav';
import { Footer } from '../sections/Footer';

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <TopHeader />
      <MainNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}