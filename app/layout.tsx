import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SignaFlow Pro - Centralized Email Signature Management',
  description: `Value Proposition: Enables businesses to easily create, deploy, and centrally manage professional, on-brand email signatures across all employee devices and email clients, ensuring consistent brand identity, legal compliance, and dynamic marketing messaging with minimal IT effort.

Target Customer: Small to medium businesses (SMBs), marketing departments, HR departments, and IT administrators looking for a simple, robust solution for email signature governance.

---
Category: MarTech
Target Market: Small to medium businesses (SMBs), marketing departments, HR departments, and IT administrators looking for a simple, robust solution for email signature governance.
Source Hypothesis ID: a94ae516-df24-4cf9-a5d8-f2fdf0316397
Promotion Type: automatic',
};

export const viewport = {
  width: 'device-width`,
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">SignaFlow Pro - Centralized Email Signature Management</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
