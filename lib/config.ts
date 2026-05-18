/**
 * Application Configuration
 * Contains app-wide settings and constants
 */

export const appConfig = {
  owner: {
    name: process.env.NEXT_PUBLIC_APP_OWNER_NAME || 'DANISH AHMED KM',
    email: process.env.NEXT_PUBLIC_APP_OWNER_EMAIL || 'danishahmed012320@yahoo.in',
  },
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  },
  app: {
    name: 'User Profile Manager',
    version: '1.0.0',
    description: 'A professional user profile management application',
  },
};

export default appConfig;
