import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import { appConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `${appConfig.app.name} - ${appConfig.owner.name}`,
  description: appConfig.app.description,
  keywords: ['profile', 'user management', 'professional profile'],
  openGraph: {
    title: appConfig.app.name,
    description: appConfig.app.description,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}