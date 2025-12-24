import Link from 'next/link';
import { posts } from '@/app/data/posts';

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Judul */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Artikel Terbaru
          </h1>
          <p className="text-gray-600 mt-2">
            Kumpulan tulisan seputar teknologi, web, dan pengembangan diri
          </p>
        </div>

        {/* Grid Card */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Judul */}
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {post.title}
              </h2>

              {/* Meta */}
              <p className="text-sm text-gray-500 mt-2">
                ✍️ {post.author} • {formatDate(post.date)}
              </p>

              {/* Konten */}
              <p className="text-gray-600 mt-4 line-clamp-3">
                {post.content}
              </p>

              {/* CTA */}
              <span className="inline-block mt-6 text-blue-600 font-medium group-hover:translate-x-1 transition">
                Baca selengkapnya →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
