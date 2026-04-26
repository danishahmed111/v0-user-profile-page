'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FieldGroup, FieldLabel } from '@/components/ui/field';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  bio: z.string().max(500, 'Bio must be less than 500 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  location: z.string().optional(),
  twitter: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export function ProfileForm() {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: 'John Doe',
      bio: 'Full-stack developer passionate about building beautiful web experiences.',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      twitter: 'johndoe',
      linkedin: 'johndoe',
      github: 'johndoe',
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to update profile');

      toast.success('Profile updated successfully');
      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update profile');
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  if (!isEditing) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Your public profile details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-foreground">john@example.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="text-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="text-foreground">San Francisco, CA</p>
            </div>
          </div>
          <div className="border-t pt-4 space-y-3">
            <div className="flex items-center space-x-3">
              <Twitter className="w-5 h-5 text-muted-foreground" />
              <a href="https://twitter.com/johndoe" className="text-blue-600 hover:underline">
                @johndoe
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="w-5 h-5 text-muted-foreground" />
              <a href="https://linkedin.com/in/johndoe" className="text-blue-600 hover:underline">
                johndoe
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Github className="w-5 h-5 text-muted-foreground" />
              <a href="https://github.com/johndoe" className="text-blue-600 hover:underline">
                johndoe
              </a>
            </div>
          </div>
          <Button onClick={() => setIsEditing(true)} className="w-full mt-6">
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>Update your personal information</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FieldGroup>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              placeholder="Your name"
              {...register('name')}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </FieldGroup>

          <FieldGroup>
            <FieldLabel htmlFor="bio">Bio</FieldLabel>
            <textarea
              id="bio"
              placeholder="Tell us about yourself"
              {...register('bio')}
              className="w-full px-3 py-2 border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              rows={4}
            />
            {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
          </FieldGroup>

          <FieldGroup>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              {...register('email')}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </FieldGroup>

          <FieldGroup>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <Input
              id="phone"
              placeholder="+1 (555) 123-4567"
              {...register('phone')}
            />
          </FieldGroup>

          <FieldGroup>
            <FieldLabel htmlFor="location">Location</FieldLabel>
            <Input
              id="location"
              placeholder="City, Country"
              {...register('location')}
            />
          </FieldGroup>

          <div className="border-t pt-4 space-y-4">
            <h3 className="font-semibold text-foreground">Social Links</h3>

            <FieldGroup>
              <FieldLabel htmlFor="twitter">Twitter</FieldLabel>
              <Input
                id="twitter"
                placeholder="username"
                {...register('twitter')}
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="linkedin">LinkedIn</FieldLabel>
              <Input
                id="linkedin"
                placeholder="username"
                {...register('linkedin')}
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="github">GitHub</FieldLabel>
              <Input
                id="github"
                placeholder="username"
                {...register('github')}
              />
            </FieldGroup>
          </div>

          <div className="flex gap-2 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setIsEditing(false);
                reset();
              }}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSaving} className="flex-1">
              {isSaving ? (
                <>
                  <Spinner className="mr-2" />
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
