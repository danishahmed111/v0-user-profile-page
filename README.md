# User Profile Manager

A professional user profile management application built with Next.js, React, and Supabase.

**Application Owner:** DANISH AHMED KM  
**Email:** danishahmed012320@yahoo.in

## Features

✨ **Profile Management** - Create and manage your professional profile  
🔗 **Social Integration** - Link social media profiles (Twitter, LinkedIn, GitHub)  
🌓 **Dark Mode** - Theme switching support  
📱 **Responsive Design** - Mobile-first approach  
🔐 **Secure** - Environment-based configuration for sensitive data  

## Tech Stack

- **Framework:** Next.js 16.2.6
- **UI Components:** Shadcn/ui + Radix UI
- **Styling:** Tailwind CSS
- **Database:** Supabase
- **Forms:** React Hook Form + Zod
- **Notifications:** Sonner
- **Icons:** Lucide React
- **Type Safety:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd v0-user-profile-page
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your Supabase credentials
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# App Owner
NEXT_PUBLIC_APP_OWNER_NAME=DANISH AHMED KM
NEXT_PUBLIC_APP_OWNER_EMAIL=danishahmed012320@yahoo.in
```

## Project Structure

```
v0-user-profile-page/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── profile/
│   │   ├── page.tsx            # Profile page
│   │   └── components/
│   │       ├── profile-header.tsx
│   │       └── profile-form.tsx
│   ├── api/
│   │   └── profile/
│   │       └── route.ts        # Profile API endpoint
│   └── globals.css             # Global styles
├── components/
│   ├── ui/                     # Shadcn UI components
│   ├── theme-provider.tsx      # Theme provider
│   └── ...
├── lib/
│   ├── config.ts               # App configuration
│   └── utils.ts                # Utility functions
├── .env.example                # Environment template
├── .env.local                  # Local environment (git-ignored)
├── package.json
├── tsconfig.json
└── README.md
```

## API Routes

### GET /api/profile
Fetch a user profile by email

**Query Parameters:**
- `email` (required): User email

**Response:**
```json
{
  "id": "uuid",
  "name": "John Doe",
  "email": "john@example.com",
  "bio": "Description",
  "phone": "+1 234 567 8900",
  "location": "City, Country",
  "twitter": "username",
  "linkedin": "username",
  "github": "username",
  "created_at": "timestamp",
  "updated_at": "timestamp"
}
```

### PUT /api/profile
Update a user profile

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "bio": "Description",
  "phone": "+1 234 567 8900",
  "location": "City, Country",
  "twitter": "username",
  "linkedin": "username",
  "github": "username"
}
```

## Database Schema

### Profiles Table

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
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Security

See [SECURITY.md](SECURITY.md) for security policies and best practices.

## License

MIT License - see LICENSE file for details

## Support

For issues or questions, please contact:
- **Email:** danishahmed012320@yahoo.in
- **Repository:** https://github.com/danishahmed111/v0-user-profile-page

---

**Version:** 1.0.0  
**Last Updated:** 2026-05-18