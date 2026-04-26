'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Avatar className="w-24 h-24">
        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="Profile avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">John Doe</h1>
        <p className="text-muted-foreground mt-2">
          Full-stack developer passionate about building beautiful web experiences.
        </p>
      </div>
    </div>
  );
}
