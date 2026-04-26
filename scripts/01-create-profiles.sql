-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  location TEXT,
  twitter TEXT,
  linkedin TEXT,
  github TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS profiles_email_idx ON profiles(email);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read any profile
CREATE POLICY "Profiles are readable by everyone"
  ON profiles FOR SELECT
  USING (true);

-- Policy: Users can update their own profile
CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  USING (email = current_user_email())
  WITH CHECK (email = current_user_email());

-- Insert sample profile
INSERT INTO profiles (name, bio, avatar_url, email, phone, location, twitter, linkedin, github)
VALUES (
  'John Doe',
  'Full-stack developer passionate about building beautiful web experiences.',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  'john@example.com',
  '+1 (555) 123-4567',
  'San Francisco, CA',
  'johndoe',
  'johndoe',
  'johndoe'
) ON CONFLICT DO NOTHING;
