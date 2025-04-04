'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg mb-8">
            Sorry, the page you are looking for does not exist.
          </p>
          {isMounted && (
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Return to Home
            </Link>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
