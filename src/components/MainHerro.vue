<template>
  <div class="container">
    <main class="hero-section justify-content-between">
      <div class="hero-content mt-5">
        <h1 class="main-title">
          SMK Negeri <span class="highlight">Makassar</span>
        </h1>

        <p class="description">
          sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
          berprestasi di segala bidang yang dapat bersaing di dunia
          internasional
        </p>

        <div class="action-buttons">
          <a href="#" class="btn primary">Get Started ></a>
          <a href="#" class="btn secondary">Video ></a>
        </div>

        <div class="social-media">
          <p>We are in Socials Media :</p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div class="hero-image-container">
        <div class="quote-card top-right">
          <p>"Jika ingin sukses, belajarlah bersabar"</p>
          <div class="quote-source">
            <img src="../assets/logo.png" alt="Avatar CEO" class="avatar" />
            <span>CEO Salsabila Landia</span>
          </div>
        </div>

        <div class="quote-card bottom-left">
          <p>
            "Belajar itu Menyenangkan Kuncinya: Jangan Pernah Menyerah Oleh
            Apapun Itu"
          </p>
        </div>
      </div>
    </main>
  </div>
</template>
<script></script>
<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  /* Memberi sedikit padding agar tidak terlalu mepet ke atas/bawah */
  padding: 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Bagian Utama (Hero Section) */
.hero-section {
  display: flex;
  max-width: 1400px; /* Batasan lebar maksimum tampilan */
  width: 100%;
  /* Jarak antara konten kiri dan gambar kanan */
  gap: 50px;
  /* Padding di dalam container utama */
  padding: 50px 0;
}

/* Konten Kiri (Teks dan Tombol) */
.hero-content {
  flex: 1; /* Mengambil setengah lebar */
  max-width: 600px;
  padding-left: 20px;
}

.main-title {
  font-size: 5rem; /* Ukuran font yang sangat besar */
  font-weight: 900;
  line-height: 1.1;
  color: #333;
  margin-bottom: 20px;
}

.main-title .highlight {
  color: #4b46e5; /* Warna ungu/biru untuk 'Makassar' */
}

.description {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 40px;
  max-width: 450px;
}

/* Tombol Aksi */
.action-buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
}

.btn {
  padding: 15px 35px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.btn.primary {
  background-color: #4b46e5; /* Warna ungu/biru */
  color: white;
}

.btn.primary:hover {
  background-color: #3834b9;
}

.btn.secondary {
  background-color: transparent;
  color: #4b46e5;
  border: 2px solid #4b46e5;
}

.btn.secondary:hover {
  background-color: #f0f0ff;
}

/* Media Sosial */
.social-media {
  margin-top: 50px;
}

.social-media p {
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
}

.social-icons a {
  color: #333; /* Warna ikon */
  font-size: 1.5rem;
  margin-right: 15px;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #4b46e5;
}

/* Gambar Kanan (Hero Image Container) */
.hero-image-container {
  flex: 1; /* Mengambil setengah lebar */
  background-image: url("../assets/Sekolah.png"); /* Ganti dengan nama file gambar Anda */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px; /* Sudut membulat */
  height: 700px; /* Tinggi yang ditetapkan untuk melihat gambar */
  position: relative;
  /* Efek seperti 'mengapung' pada gambar */
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

/* Quote Cards */
.quote-card {
  position: absolute;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  max-width: 250px;
  /* Memberi sedikit transisi agar tampak lebih 'hidup' */
  transition: transform 0.3s;
}

.quote-card:hover {
  transform: translateY(-5px);
}

.quote-card p {
  font-style: italic;
  color: #333;
  margin-bottom: 10px;
  font-weight: 500;
}

.top-right {
  top: 5%;
  right: -10%; /* Mengatur agar card menjorok keluar */
  transform: rotate(3deg); /* Rotasi sedikit */
}

.bottom-left {
  bottom: 5%;
  left: -15%; /* Mengatur agar card menjorok keluar */
  transform: rotate(-5deg); /* Rotasi sedikit ke arah lain */
  max-width: 350px;
  padding: 30px;
}

.quote-source {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #777;
  margin-top: 10px;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
  border: 2px solid #4b46e5;
}

/* Media Queries untuk Tampilan Responsif */
@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column; /* Tumpuk ke bawah di layar kecil */
    align-items: center;
    text-align: center;
  }

  .hero-content {
    padding-left: 0;
    max-width: 100%;
  }

  .main-title {
    font-size: 3rem;
  }

  .description {
    max-width: 100%;
  }

  .action-buttons {
    justify-content: center;
  }

  .hero-image-container {
    width: 90%;
    height: 400px;
  }

  .social-media {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top-right,
  .bottom-left {
    position: relative; /* Hilangkan posisi absolute yang mengganggu di mobile */
    margin: 20px auto;
    transform: none;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    max-width: 90%;
  }
}
</style>
