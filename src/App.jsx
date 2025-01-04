import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { CategoryDetailPage } from './pages/CategoryDetailPage';
import { Moguls } from './pages/Moguls';
import { MogulProfilePage } from './pages/MogulProfilePage';
import { Mentors } from './pages/Mentors';
import { MentorProfilePage } from './pages/MentorProfilePage';
import { Mentees } from './pages/Mentees';
import { Services } from './pages/Services';
import { Learning } from './pages/Learning';
import { Blog } from './pages/Blog';
import { Profile } from './pages/Profile';
import { MentorSignUp } from './pages/signup/MentorSignUp';
import { MenteeSignUp } from './pages/signup/MenteeSignUp';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoryDetailPage />} />
          <Route path="/moguls" element={<Moguls />} />
          <Route path="/moguls/:id" element={<MogulProfilePage />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentors/:id" element={<MentorProfilePage />} />
          <Route path="/mentees" element={<Mentees />} />
          <Route path="/services" element={<Services />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup/mentor" element={<MentorSignUp />} />
          <Route path="/signup/mentee" element={<MenteeSignUp />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;