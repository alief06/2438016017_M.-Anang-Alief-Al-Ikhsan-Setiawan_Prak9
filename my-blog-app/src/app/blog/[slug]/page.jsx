import { posts } from '@/app/data/posts';

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogDetail({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="text-center mt-24 text-gray-500">
        Post tidak ditemukan
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Judul */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-10">
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">
            ✍️ {post.author}
          </span>
          <span className="text-gray-400">•</span>
          <span>{formatDate(post.date)}</span>
        </div>

        {/* Konten */}
        <div className="prose prose-blue max-w-none text-gray-700">
          <p>{post.content}</p>
        </div>
      </article>
    </section>
  );
}
