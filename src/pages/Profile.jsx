import { userData, myMentors } from '../data/profileData';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileBio } from '../components/profile/ProfileBio';
import { ProfileExpertise } from '../components/profile/ProfileExpertise';
import { MentorsList } from '../components/profile/MentorsList';

export function Profile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeader user={userData} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl">
          <ProfileBio bio={userData.bio} />
          <ProfileExpertise expertise={userData.expertise} />
          <MentorsList mentors={myMentors} />
        </div>
      </div>
    </div>
  );
}