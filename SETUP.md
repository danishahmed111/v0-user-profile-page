# Setup Guide

This guide will help you set up the User Profile Manager application.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
NEXT_PUBLIC_APP_OWNER_NAME=DANISH AHMED KM
NEXT_PUBLIC_APP_OWNER_EMAIL=danishahmed012320@yahoo.in
```

### 3. Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Setting Up Supabase

### Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Note your project URL and Service Role Key

### Create the Profiles Table

1. Go to the SQL Editor in Supabase
2. Run this SQL:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  bio TEXT,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  location VARCHAR(255),
  twitter VARCHAR(255),
  linkedin VARCHAR(255),
  github VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX profiles_email_idx ON profiles(email);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policy for reading profiles
CREATE POLICY "Allow public to read profiles"
  ON profiles FOR SELECT
  USING (true);

-- Create policy for updating profiles
CREATE POLICY "Allow updates to own profile"
  ON profiles FOR UPDATE
  USING (auth.jwt() ->> 'email' = email)
  WITH CHECK (auth.jwt() ->> 'email' = email);
```

3. Click "Run" to execute the SQL

### Add Sample Data

```sql
INSERT INTO profiles (name, bio, email, phone, location, twitter, linkedin, github)
VALUES (
  'DANISH AHMED KM',
  'Passionate developer building amazing web applications',
  'danishahmed012320@yahoo.in',
  '+91-XXXXXXXXXX',
  'India',
  'danishahmed',
  'danishahmed',
  'danishahmed111'
);
```

## Running Tests

### Type Checking
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## Build for Production

### Build
```bash
npm run build
```

### Run Production Build Locally
```bash
npm run start
```

## Common Issues

### Issue: "NEXT_PUBLIC_SUPABASE_URL is not set"

**Solution:**
1. Check if `.env.local` exists in the root directory
2. Verify you have the correct environment variables
3. Restart the development server after changing `.env.local`

### Issue: "Failed to update profile"

**Solution:**
1. Check your Supabase URL and Service Role Key
2. Verify the `profiles` table exists in your database
3. Check browser console for detailed error messages

### Issue: Port 3000 is already in use

**Solution:**
```bash
npm run dev -- -p 3001
```

## Deployment

### Deploy to Vercel

1. **Connect Repository**
   - Push your code to GitHub
   - Sign in to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Set Environment Variables**
   - Go to project settings
   - Add environment variables from `.env.local`
   - Keep `SUPABASE_SERVICE_ROLE_KEY` as secret only

3. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
```

#### Railway
```bash
npm run build
npm run start
```

#### Render
```bash
npm run build
```

## Next Steps

1. **Customize Profile Fields**
   - Edit the `profileSchema` in `app/profile/components/profile-form.tsx`
   - Update the database schema accordingly

2. **Add Authentication**
   - Use Supabase Auth for user authentication
   - Implement user registration and login

3. **Enhance Features**
   - Add profile picture upload
   - Add resume/CV upload
   - Add project showcase section

4. **Improve Styling**
   - Customize Tailwind configuration
   - Add custom CSS variables
   - Implement your brand colors

## Support

- **Email:** danishahmed012320@yahoo.in
- **GitHub:** https://github.com/danishahmed111

---

**Application Owner:** DANISH AHMED KM
