import { GetStarted } from '../components/sections/GetStarted';
import { TopMentors } from '../components/sections/TopMentors';
import { Hero } from '../components/sections/Hero';
import { Testimonials } from '../components/sections/Testimonials';
import { RecommendedGroups } from '../components/sections/RecommendedGroups';
import { RecommendedVideos } from '../components/sections/RecommendedVideos';

export function Home() {
  return (
    <>
      <GetStarted /> 
      <TopMentors />
      <Hero />
      <Testimonials />
      <RecommendedGroups />
      <RecommendedVideos />
    </>
  );
}