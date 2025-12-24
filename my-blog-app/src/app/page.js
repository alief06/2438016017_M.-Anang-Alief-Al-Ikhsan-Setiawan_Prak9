import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Selamat Datang di <span className="text-blue-600">AlPedia Blog</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          MyBlog merupakan website berbasis Next.js yang dibuat sebagai media
          pembelajaran dan publikasi artikel. Website ini menampilkan daftar
          blog, detail artikel, serta navigasi yang terstruktur dengan tampilan
          modern dan profesional.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/blog"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Lihat Artikel
          </Link>

          <Link
            href="/about"
            className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
          >
            Tentang Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
