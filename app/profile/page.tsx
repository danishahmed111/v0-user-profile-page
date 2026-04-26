import { ProfileHeader } from './components/profile-header';
import { ProfileForm } from './components/profile-form';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <ProfileHeader />
        <ProfileForm />
      </div>
    </main>
  );
}
