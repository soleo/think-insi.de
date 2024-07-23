import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Roboto } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from '@mui/material/styles';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import theme from '../theme';
import "./globals.css";


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Think Inside - My Life Tracker",
  description: "A Simple Life Tracker App to help you track your daily activities and habits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <body className={roboto.className}>
            <ThemeProvider theme={theme}>
            {children}
            </ThemeProvider>
            <Analytics />
            <SpeedInsights />
          </body>
        </AppRouterCacheProvider>
      </UserProvider>
    </html>
  );
}
