import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { appConfig } from '@/lib/config';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Welcome to User Profile Manager
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage and showcase your professional profile with ease
          </p>
        </div>

        {/* Application Info Card */}
        <Card className="mx-auto w-full">
          <CardHeader>
            <CardTitle>Application Owner</CardTitle>
            <CardDescription>This application is managed by</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground font-medium">Owner Name</p>
                <p className="text-lg font-semibold text-foreground">{appConfig.owner.name}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground font-medium">Contact Email</p>
                <p className="text-lg font-semibold text-foreground">{appConfig.owner.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Profile Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Create and manage your professional profile with all essential information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Social Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Link your social media profiles and online presence in one place.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Real-time Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Update your information instantly with real-time data synchronization.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-4">
          <Link href="/profile">
            <Button size="lg" className="px-8">
              Go to Your Profile
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground">
            Manage your profile information and connect your social accounts
          </p>
        </div>
      </div>
    </main>
  );
}
