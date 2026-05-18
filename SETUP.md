# Setup Guide

Detailed setup instructions for the User Profile Manager application.

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Supabase account (free tier available at https://supabase.com)
- Git

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/danishahmed111/v0-user-profile-page.git
cd v0-user-profile-page
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Supabase

1. Create a new project on [Supabase](https://supabase.com)
2. Get your project credentials:
   - Project URL (NEXT_PUBLIC_SUPABASE_URL)
   - Service Role Key (SUPABASE_SERVICE_ROLE_KEY)

3. Create the profiles table:

```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  bio TEXT,
  phone TEXT,
  location TEXT,
  twitter TEXT,
  linkedin TEXT,
  github TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Enable read access for all users"
  ON profiles
  FOR SELECT
  USING (true);

-- Create policy for authenticated write access
CREATE POLICY "Enable write access for service role"
  ON profiles
  FOR UPDATE
  USING (true);
```

### 4. Configure Environment Variables

1. Copy the example file:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` with your values:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Application Owner Information
NEXT_PUBLIC_APP_OWNER_NAME=DANISH AHMED KM
NEXT_PUBLIC_APP_OWNER_EMAIL=danishahmed012320@yahoo.in
```

### 5. Run Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── api/
│   │   └── profile/
│   │       └── route.ts        # API routes for profile
│   └── profile/
│       ├── page.tsx            # Profile management page
│       └── components/
│           ├── profile-form.tsx
│           └── profile-header.tsx
├── components/
│   ├── theme-provider.tsx      # Dark mode support
│   ├── ui/                     # Shadcn/ui components
│   └── ...
├── lib/
│   ├── config.ts               # Application configuration
│   └── utils.ts                # Utility functions
├── .env.example                # Environment template
├── .env.local                  # Local environment (git-ignored)
├── package.json
├── tsconfig.json
└── README.md
```

## Troubleshooting

### Issue: "Supabase URL not found"

**Solution:** Make sure you've created the `.env.local` file and added your Supabase credentials.

### Issue: "Profile not found" error

**Solution:** 
1. Verify the profiles table exists in Supabase
2. Check that Row Level Security is properly configured
3. Ensure the email parameter is being sent correctly

### Issue: Build errors

**Solution:** 
1. Delete node_modules: `rm -rf node_modules`
2. Clear npm cache: `npm cache clean --force`
3. Reinstall: `npm install`
4. Rebuild: `npm run build`

## Next Steps

1. **Customize Profile Fields** - Modify `app/profile/components/profile-form.tsx`
2. **Add Authentication** - Integrate Supabase Auth for user management
3. **Deploy** - Deploy to Vercel, Netlify, or your preferred platform
4. **Customize Styling** - Adjust Tailwind CSS configuration

## Available Commands

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint

# Maintenance
npm audit            # Check for security vulnerabilities
npm audit fix        # Fix vulnerabilities
```

## Support

For additional help:
- Check the [README.md](README.md) for overview
- Review [SECURITY.md](SECURITY.md) for security guidelines
- Contact: danishahmed012320@yahoo.in

---

**Last Updated:** 2026-05-18