export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Tentang Kami
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Halaman ini merupakan halaman statis yang dibuat menggunakan
            framework <span className="font-medium">Next.js</span> dengan
            pendekatan <span className="font-medium">App Router</span>.
            Website ini dikembangkan sebagai bagian dari proses pembelajaran
            untuk memahami konsep dasar pengembangan aplikasi web modern
            berbasis React dan Next.js.
          </p>

          <p>
            Melalui website blog ini, pengguna dapat melihat daftar artikel
            yang tersedia, membaca detail artikel, serta memahami bagaimana
            proses routing dinamis diterapkan menggunakan parameter
            <em className="mx-1">slug</em>. Selain itu, website ini juga
            menampilkan struktur layout yang konsisten, termasuk penggunaan
            navbar sebagai navigasi utama antar halaman.
          </p>

          <p>
            Pengembangan website ini bertujuan untuk melatih kemampuan dalam
            mengelola struktur folder, pemisahan komponen, pengelolaan data
            statis, serta penerapan styling menggunakan CSS maupun utility
            framework seperti <span className="font-medium">Tailwind CSS</span>.
            Diharapkan, melalui praktikum ini, mahasiswa dapat memahami alur
            kerja Next.js secara lebih menyeluruh dan terstruktur.
          </p>
        </div>
      </div>
    </section>
  );
}