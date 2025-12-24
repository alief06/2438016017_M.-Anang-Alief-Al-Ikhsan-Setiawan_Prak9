'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // cek menu aktif (blog aktif juga untuk /blog/[slug])
  const isActive = (path) => {
    if (path === '/blog') {
      return pathname.startsWith('/blog');
    }
    return pathname === path;
  };

  const linkClass = (path) =>
    isActive(path)
      ? 'text-white font-semibold border-b-2 border-white pb-1'
      : 'text-blue-100 hover:text-white transition';

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md">
          <div className="flex items-center justify-between max-w-6xl mx-auto px-10 py-4">
            <h1 className="text-white font-bold text-lg tracking-wide">
              AlPedia Blog
            </h1>

            <div className="flex gap-6">
              <Link href="/" className={linkClass('/')}>
                Home
              </Link>
              <Link href="/blog" className={linkClass('/blog')}>
                Blog
              </Link>
              <Link href="/about" className={linkClass('/about')}>
                About
              </Link>
            </div>
          </div>
        </nav>

        {/* Konten halaman */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-auto">
          <div className="max-w-6xl mx-auto px-10 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Kiri - Copyright */}
              <div className="text-center md:text-left">
                <h2 className="font-bold text-lg mb-1">AlPedia Blog</h2>
                <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} AlPedia Blog. All rights reserved.
                </p>
              </div>

              {/* Kanan - Links */}
              <div className="flex gap-6 text-sm">
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About
                </Link>
                <Link href="/blog" className="text-gray-300 hover:text-white transition">
                  Blog
                </Link>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Contact
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Privacy
                </a>
              </div>
            </div>

            {/* Social Media atau Info Tambahan (opsional) */}
            <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-400 text-xs">
              <p>@aliefalikhsan</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}