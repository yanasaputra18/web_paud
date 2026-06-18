// src/data/beritaData.js
// Centralized news data — digunakan oleh BeritaSection.vue dan BeritaDetailView.vue

const beritaData = [
  {
    id: 1,
    slug: 'perayaan-hari-anak-nasional-2026',
    title: 'Perayaan Hari Anak Nasional 2026 di TK Mandiri Tunggal Jaya',
    excerpt: 'Kegiatan perayaan Hari Anak Nasional yang meriah dengan berbagai lomba, pentas seni, dan pembagian hadiah untuk seluruh siswa. Acara ini dihadiri oleh orang tua dan tokoh masyarakat setempat.',
    content: `
      <p>Dalam rangka memperingati Hari Anak Nasional yang jatuh pada tanggal 23 Juli 2026, TK Mandiri Tunggal Jaya menggelar rangkaian kegiatan yang meriah dan penuh warna. Acara dimulai sejak pukul 07.30 WIB dan berlangsung hingga sore hari.</p>
      
      <h3>Rangkaian Kegiatan</h3>
      <p>Berbagai lomba diselenggarakan untuk memeriahkan acara ini, antara lain lomba mewarnai, lomba menyanyi, lomba menari, dan berbagai permainan tradisional yang menyenangkan. Para siswa tampak sangat antusias dan bersemangat mengikuti setiap lomba yang ada.</p>
      
      <p>Pentas seni menjadi salah satu highlight acara hari ini. Anak-anak menampilkan berbagai pertunjukan yang memukau, mulai dari tari kreasi, drama mini, hingga pertunjukan musik sederhana yang berhasil memancing tepuk tangan meriah dari para orang tua dan tamu undangan yang hadir.</p>
      
      <h3>Sambutan Kepala Sekolah</h3>
      <p>Kepala Sekolah TK Mandiri Tunggal Jaya menyampaikan bahwa kegiatan ini merupakan wujud nyata komitmen sekolah dalam mengembangkan potensi anak secara holistik. "Kami ingin setiap anak merasakan kebahagiaan dan kebebasan berekspresi di hari istimewa ini," ujarnya dalam sambutan pembukaan.</p>
      
      <p>Selain kegiatan lomba dan pentas seni, sekolah juga membagikan hadiah kepada seluruh siswa sebagai bentuk apresiasi atas partisipasi mereka. Pembagian hadiah berlangsung dengan tertib dan penuh kegembiraan.</p>
      
      <h3>Partisipasi Orang Tua</h3>
      <p>Acara ini mendapat sambutan yang sangat antusias dari para orang tua wali. Banyak orang tua yang hadir dan ikut serta mendampingi putra-putri mereka selama kegiatan berlangsung. Kehadiran tokoh masyarakat setempat juga turut menambah kemeriahan dan kehangatan acara.</p>
      
      <p>Diharapkan melalui kegiatan seperti ini, anak-anak dapat tumbuh menjadi pribadi yang percaya diri, kreatif, dan berani berekspresi. Selamat Hari Anak Nasional untuk seluruh anak-anak Indonesia!</p>
    `,
    date: '15 Juni 2026',
    dateRaw: '2026-06-15',
    author: 'Admin TK Mandiri',
    authorRole: 'Tim Humas Sekolah',
    category: 'Kegiatan',
    badgeClass: 'badge--kegiatan',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=630&fit=crop&crop=faces',
    thumbnail: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop&crop=faces',
    tags: ['Hari Anak', 'Lomba', 'Pentas Seni', 'Perayaan'],
    featured: true,
  },
  {
    id: 2,
    slug: 'pendaftaran-siswa-baru-2026-2027',
    title: 'Pendaftaran Siswa Baru Tahun Ajaran 2026/2027 Resmi Dibuka!',
    excerpt: 'TK Mandiri Tunggal Jaya membuka pendaftaran siswa baru untuk tahun ajaran 2026/2027. Dapatkan potongan biaya pendaftaran bagi pendaftar awal hingga 31 Juli 2026.',
    content: `
      <p>Dengan penuh kegembiraan, TK Mandiri Tunggal Jaya secara resmi membuka pendaftaran siswa baru untuk tahun ajaran 2026/2027. Pendaftaran dibuka mulai tanggal 10 Juni 2026 dan akan berlangsung hingga kuota terpenuhi.</p>
      
      <h3>Persyaratan Pendaftaran</h3>
      <p>Calon siswa yang dapat mendaftar adalah anak-anak berusia 4-6 tahun. Berikut adalah dokumen yang perlu disiapkan:</p>
      <ul>
        <li>Fotokopi Akta Kelahiran (2 lembar)</li>
        <li>Fotokopi Kartu Keluarga (2 lembar)</li>
        <li>Fotokopi KTP orang tua/wali (2 lembar)</li>
        <li>Pas foto ukuran 3x4 (4 lembar)</li>
        <li>Surat keterangan sehat dari dokter</li>
      </ul>
      
      <h3>Promo Early Bird</h3>
      <p>Sebagai bentuk apresiasi kepada para orang tua yang mendaftar lebih awal, kami memberikan potongan biaya pendaftaran sebesar 50% bagi pendaftar sebelum tanggal 31 Juli 2026. Jangan lewatkan kesempatan emas ini!</p>
      
      <h3>Fasilitas yang Tersedia</h3>
      <p>TK Mandiri Tunggal Jaya menyediakan berbagai fasilitas terbaik untuk mendukung proses belajar mengajar, antara lain ruang kelas yang nyaman dan ber-AC, area bermain indoor dan outdoor, perpustakaan mini, dan laboratorium kreativitas.</p>
      
      <h3>Cara Mendaftar</h3>
      <p>Pendaftaran dapat dilakukan langsung di kantor sekolah pada jam kerja (Senin–Jumat, 07.00–13.00 WIB) atau melalui WhatsApp di nomor 0813-4997-2893. Tim kami siap membantu Anda melalui proses pendaftaran.</p>
    `,
    date: '10 Juni 2026',
    dateRaw: '2026-06-10',
    author: 'Admin TK Mandiri',
    authorRole: 'Bagian Akademik',
    category: 'Info Pendaftaran',
    badgeClass: 'badge--pendaftaran',
    readTime: '3 menit',
    image: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=1200&h=630&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=600&h=400&fit=crop',
    tags: ['Pendaftaran', 'Siswa Baru', 'Info Penting', 'Promo'],
    featured: false,
  },
  {
    id: 3,
    slug: 'juara-lomba-mewarnai-tingkat-kecamatan',
    title: 'Siswa TK Mandiri Raih Juara 1 Lomba Mewarnai Tingkat Kecamatan',
    excerpt: 'Kebanggaan untuk TK Mandiri! Ananda Zahra Aulia Putri berhasil meraih Juara 1 dalam Lomba Mewarnai tingkat kecamatan yang diselenggarakan oleh Dinas Pendidikan.',
    content: `
      <p>Kebanggaan yang luar biasa datang dari TK Mandiri Tunggal Jaya! Salah satu siswi terbaik kami, Ananda Zahra Aulia Putri (5 tahun), berhasil meraih prestasi gemilang dengan menyabet Juara 1 dalam Lomba Mewarnai Tingkat Kecamatan yang diselenggarakan oleh Dinas Pendidikan Kabupaten.</p>
      
      <h3>Tentang Perlombaan</h3>
      <p>Lomba ini diikuti oleh lebih dari 150 peserta dari berbagai TK dan PAUD se-kecamatan. Setiap peserta diberikan waktu 60 menit untuk mewarnai gambar bertema "Aku dan Lingkunganku" menggunakan berbagai media warna. Dewan juri terdiri dari seniman lokal dan akademisi seni yang berpengalaman.</p>
      
      <h3>Karya yang Memukau</h3>
      <p>Karya Zahra berhasil memikat hati para juri dengan penggunaan warna yang harmonis, detail yang rapi, dan kreativitas dalam penambahan elemen-elemen unik pada gambar. Juri menyebut karya Zahra sebagai "paling ekspresif dan penuh warna positif" di antara seluruh peserta.</p>
      
      <h3>Proses Latihan</h3>
      <p>Keberhasilan ini tidak datang secara instan. Bersama Ibu Guru pembimbing seni, Zahra telah berlatih secara rutin setiap minggu selama dua bulan terakhir. Orang tua Zahra juga turut mendukung dengan menyediakan peralatan mewarnai yang lengkap di rumah.</p>
      
      <h3>Ucapan Selamat</h3>
      <p>Kepala Sekolah TK Mandiri menyampaikan ucapan selamat yang tulus kepada Zahra dan keluarganya. "Ini bukan hanya prestasi Zahra, tapi juga kebanggaan seluruh keluarga besar TK Mandiri Tunggal Jaya. Semoga ini menjadi awal dari banyak prestasi yang lebih besar lagi," tuturnya dengan penuh kebanggaan.</p>
    `,
    date: '5 Juni 2026',
    dateRaw: '2026-06-05',
    author: 'Admin TK Mandiri',
    authorRole: 'Tim Humas Sekolah',
    category: 'Prestasi',
    badgeClass: 'badge--prestasi',
    readTime: '3 menit',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=630&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop',
    tags: ['Prestasi', 'Lomba Mewarnai', 'Juara', 'Kecamatan'],
    featured: false,
  },
  {
    id: 4,
    slug: 'kunjungan-edukatif-kebun-binatang-mini',
    title: 'Kunjungan Edukatif ke Kebun Binatang Mini Bersama Siswa',
    excerpt: 'Para siswa TK Mandiri antusias mengunjungi kebun binatang mini untuk mengenal berbagai satwa dan habitatnya secara langsung sebagai pembelajaran nyata di luar kelas.',
    content: `
      <p>Sebagai bagian dari program pembelajaran berbasis pengalaman (experiential learning), TK Mandiri Tunggal Jaya mengadakan kunjungan edukatif ke Kebun Binatang Mini yang terletak di kawasan wisata setempat. Kegiatan ini diikuti oleh seluruh siswa kelas A dan B dengan didampingi oleh para guru dan beberapa orang tua yang ikut serta.</p>
      
      <h3>Tujuan Kunjungan</h3>
      <p>Kunjungan ini bertujuan untuk memperkenalkan anak-anak pada keanekaragaman hayati secara langsung, menumbuhkan rasa cinta terhadap alam dan satwa, serta mengembangkan rasa ingin tahu dan kemampuan observasi anak. Ini merupakan salah satu bentuk implementasi kurikulum merdeka belajar yang diterapkan sekolah.</p>
      
      <h3>Hewan yang Dikunjungi</h3>
      <p>Anak-anak berkesempatan melihat dan berinteraksi (dengan pengawasan ketat) dengan berbagai hewan, antara lain kelinci, marmut, kura-kura, berbagai jenis ikan, burung beo, dan rusa. Setiap hewan dilengkapi dengan papan informasi yang menjelaskan nama, habitat, dan makanan hewan tersebut.</p>
      
      <h3>Momen Berkesan</h3>
      <p>Salah satu momen paling berkesan adalah saat anak-anak diajak untuk memberi makan kelinci secara langsung. Tawa dan sorak kegembiraan anak-anak terdengar riuh saat kelinci-kelinci kecil makan dari tangan mereka. Banyak anak yang mengaku ini adalah pertama kalinya mereka menyentuh hewan secara langsung.</p>
      
      <h3>Refleksi Pembelajaran</h3>
      <p>Seusai kunjungan, setiap siswa diminta untuk menggambar satu hewan favorit yang mereka lihat hari ini. Hasil gambar-gambar lucu dan ekspresif ini kemudian dipajang di mading kelas sebagai kenangan indah dari kunjungan edukatif yang menyenangkan ini.</p>
    `,
    date: '28 Mei 2026',
    dateRaw: '2026-05-28',
    author: 'Admin TK Mandiri',
    authorRole: 'Koordinator Program',
    category: 'Kegiatan',
    badgeClass: 'badge--kegiatan',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=1200&h=630&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&h=400&fit=crop',
    tags: ['Kunjungan', 'Edukatif', 'Alam', 'Satwa'],
    featured: false,
  },
  {
    id: 5,
    slug: 'workshop-parenting-mendidik-anak-era-digital',
    title: 'Workshop Parenting: Mendidik Anak dengan Cinta di Era Digital',
    excerpt: 'TK Mandiri menyelenggarakan workshop parenting yang menghadirkan narasumber ahli psikologi anak untuk memberikan tips mendidik anak dengan bijak di era digital ini.',
    content: `
      <p>TK Mandiri Tunggal Jaya kembali hadir dengan program unggulan yang dirancang khusus untuk para orang tua: Workshop Parenting bertema "Mendidik Anak dengan Cinta di Era Digital". Acara yang berlangsung selama satu hari penuh ini mendapat antusiasme luar biasa dari para orang tua wali.</p>
      
      <h3>Narasumber Tamu</h3>
      <p>Workshop ini menghadirkan dua narasumber ahli yang berpengalaman di bidangnya: Dr. Anisa Rahmawati, M.Psi., seorang psikolog anak dari Universitas terkemuka, dan Bpk. Hendra Kusuma, S.Pd., seorang konsultan pendidikan anak usia dini bersertifikasi internasional. Kehadiran mereka sangat dinantikan oleh para peserta.</p>
      
      <h3>Topik yang Dibahas</h3>
      <p>Beberapa topik menarik yang dibahas dalam workshop ini antara lain:</p>
      <ul>
        <li><strong>Screen Time Management</strong> – Cara bijak mengatur waktu anak di depan gadget</li>
        <li><strong>Digital Literacy for Kids</strong> – Mengenalkan teknologi secara aman dan edukatif</li>
        <li><strong>Emotional Bonding</strong> – Membangun ikatan emosional yang kuat dengan anak di tengah kesibukan</li>
        <li><strong>Positive Discipline</strong> – Teknik mendisiplinkan anak tanpa kekerasan verbal maupun fisik</li>
      </ul>
      
      <h3>Respons Peserta</h3>
      <p>Para orang tua yang hadir mengaku mendapat banyak wawasan baru dan praktis yang langsung bisa diterapkan di rumah. "Workshop ini membuka mata saya tentang banyak hal yang selama ini saya tidak sadari. Sangat berguna sekali," ungkap salah satu orang tua peserta.</p>
      
      <h3>Program Lanjutan</h3>
      <p>Melihat besarnya antusiasme peserta, sekolah berencana untuk mengadakan seri workshop parenting secara rutin setiap triwulan. Informasi mengenai jadwal workshop berikutnya akan diumumkan melalui grup WhatsApp orang tua dan papan pengumuman sekolah.</p>
    `,
    date: '20 Mei 2026',
    dateRaw: '2026-05-20',
    author: 'Admin TK Mandiri',
    authorRole: 'Koordinator Program',
    category: 'Pengumuman',
    badgeClass: 'badge--pengumuman',
    readTime: '5 menit',
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=1200&h=630&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&h=400&fit=crop',
    tags: ['Parenting', 'Workshop', 'Digital', 'Orang Tua'],
    featured: false,
  },
  {
    id: 6,
    slug: 'cooking-class-membuat-kue-bersama',
    title: 'Cooking Class Seru: Belajar Membuat Kue Bersama!',
    excerpt: 'Para siswa TK Mandiri menikmati kegiatan Cooking Class yang menyenangkan, belajar membuat kue bolu kukus sederhana sambil mengenal bahan-bahan dapur dengan cara yang aman dan menyenangkan.',
    content: `
      <p>Suasana dapur TK Mandiri Tunggal Jaya hari ini berbeda dari biasanya! Dipenuhi aroma harum kue yang baru dipanggang dan tawa riang anak-anak, kegiatan Cooking Class menjadi salah satu program favorit yang paling dinantikan oleh para siswa.</p>
      
      <h3>Konsep Kegiatan</h3>
      <p>Cooking Class kali ini mengangkat tema "Membuat Kue Bolu Kukus Pelangi". Dipilihnya kue bolu kukus karena proses pembuatannya yang relatif aman untuk anak-anak dan hasilnya yang menarik secara visual dengan berbagai warna cerah. Setiap kelompok terdiri dari 4-5 anak yang didampingi satu guru pendamping.</p>
      
      <h3>Proses Memasak</h3>
      <p>Anak-anak dengan penuh semangat mengikuti setiap tahapan pembuatan kue. Mulai dari menimbang bahan, mengocok telur, mencampurkan tepung, hingga proses mengukus. Meskipun sesekali ada yang menumpahkan tepung atau mengocok terlalu keras, semua dilakukan dengan penuh keceriaan dan tawa.</p>
      
      <p>Yang paling mengasyikkan adalah saat mewarnai adonan! Anak-anak bebas memilih warna favorit mereka untuk dicampurkan ke dalam adonan, menghasilkan kue bolu kukus yang colorful dan unik — sama seperti kepribadian masing-masing anak yang berbeda-beda.</p>
      
      <h3>Nilai Edukasi</h3>
      <p>Di balik keseruan memasak, ada banyak nilai edukasi yang ditanamkan: kemampuan mengikuti instruksi secara berurutan, pengenalan konsep angka dan takaran, pengembangan motorik halus, kerja sama tim, dan yang terpenting — kemandirian dan kepercayaan diri anak.</p>
      
      <h3>Makan Bersama</h3>
      <p>Puncak kegiatan adalah momen yang paling ditunggu-tunggu: menikmati hasil karya sendiri bersama teman-teman! Ekspresi bangga dan bahagia di wajah anak-anak saat memakan kue yang mereka buat sendiri adalah pemandangan yang tak ternilai harganya.</p>
    `,
    date: '12 Mei 2026',
    dateRaw: '2026-05-12',
    author: 'Admin TK Mandiri',
    authorRole: 'Koordinator Ekstrakurikuler',
    category: 'Kegiatan',
    badgeClass: 'badge--kegiatan',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=630&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    tags: ['Cooking Class', 'Kreativitas', 'Ekstrakurikuler', 'Memasak'],
    featured: false,
  },
  {
    id: 7,
    slug: 'outbound-kebersamaan-di-alam-terbuka',
    title: 'Outbound Kebersamaan: Belajar Sambil Bermain di Alam Terbuka',
    excerpt: 'Kegiatan outbound seru di alam terbuka menjadi media pembelajaran karakter anak. Siswa belajar kerja sama, keberanian, dan kepercayaan diri melalui berbagai permainan team building yang menyenangkan.',
    content: `
      <p>TK Mandiri Tunggal Jaya kembali menghadirkan program unggulan yang memperkuat karakter anak: Outbound Kebersamaan. Kegiatan berlangsung di area wisata alam yang asri, memberikan pengalaman belajar yang berbeda dan tak terlupakan bagi para siswa.</p>
      
      <h3>Persiapan dan Antusiasme</h3>
      <p>Sejak pagi hari, anak-anak sudah terlihat sangat antusias dengan mengenakan kaos seragam outbound berwarna cerah. Dengan semangat penuh, mereka naik ke bus yang telah disiapkan menuju lokasi outbound yang berjarak sekitar 30 menit dari sekolah.</p>
      
      <h3>Aktivitas Outbound</h3>
      <p>Berbagai aktivitas seru telah disiapkan oleh tim fasilitator berpengalaman, antara lain permainan jaring laba-laba (spider web game), lomba estafet karet, permainan trust fall, jungle tracking ringan, dan momen sharing di lingkaran besar.</p>
      
      <h3>Nilai yang Ditanamkan</h3>
      <p>Setiap aktivitas dirancang dengan tujuan spesifik untuk mengembangkan karakter anak, mulai dari kepercayaan diri, kerja sama tim, komunikasi yang efektif, keberanian menghadapi tantangan, hingga sikap sportif dalam menang maupun kalah.</p>
      
      <h3>Momen yang Mengharukan</h3>
      <p>Di penghujung acara, sesi sharing dan refleksi bersama menjadi momen yang mengharukan. Banyak anak yang mengungkapkan perasaan bangga bisa menyelesaikan setiap tantangan bersama teman-temannya. Beberapa anak bahkan menangis haru karena tidak mau kegiatan yang menyenangkan ini berakhir.</p>
    `,
    date: '5 Mei 2026',
    dateRaw: '2026-05-05',
    author: 'Admin TK Mandiri',
    authorRole: 'Koordinator Program',
    category: 'Kegiatan',
    badgeClass: 'badge--kegiatan',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=1200&h=630&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=600&h=400&fit=crop',
    tags: ['Outbound', 'Karakter', 'Alam', 'Team Building'],
    featured: false,
  },
];

export default beritaData;
