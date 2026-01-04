<template>
  <div class="container">
    <section id="home">
      <main class="hero-section justify-content-between">
        <div class="hero-content">
          <h1 class="main-title">
            TK <span class="highlight">Mandiri</span> <br />
            Tunggal Jaya
          </h1>

          <p class="description">
            Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
            berprestasi di segala bidang yang dapat bersaing di dunia
            internasional
          </p>

          <!-- Modal di luar button -->
          <div class="button-anak">
            <!-- BUTTON BUKA VIDEO -->
            <button
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#videoModal"
            >
              Lihat Video Anak-Anak
            </button>

            <!-- MODAL VIDEO -->
            <div
              class="modal fade"
              id="videoModal"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content border-0">
                  <div class="modal-body p-0">
                    <video
                      ref="videoPlayer"
                      width="100%"
                      controls
                      preload="metadata"
                    >
                      <source
                        src="../assets/video/video-anak.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="social-media">
            <p>Follow Sosial Media Kami :</p>
            <div class="social-icons">
              <a href="#"><i class="bi bi-facebook"></i></a>
              <a href="#"><i class="bi bi-instagram"></i></a>
              <a href="#"><i class="bi bi-tiktok"></i></a>
            </div>
          </div>
        </div>

        <div class="hero-image-container">
          <div class="quote-card top-right">
            <p>"Jika ingin sukses, belajarlah bersabar"</p>
            <div class="quote-source">
              <img
                src="../assets/ibu_kepsek.jpg"
                alt="Avatar CEO"
                class="avatar"
              />
              <span>Ibuu Opih Nursopiah</span>
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
    </section>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const videoPlayer = ref(null);

    onMounted(() => {
      const modalEl = document.getElementById("videoModal");

      // Modal dibuka → video play()
      modalEl.addEventListener("shown.bs.modal", () => {
        videoPlayer.value.play();
      });

      // Modal ditutup → video pause() & reset ke awal
      modalEl.addEventListener("hidden.bs.modal", () => {
        videoPlayer.value.pause();
        videoPlayer.value.currentTime = 0;
      });
    });

    return { videoPlayer };
  },
};
</script>

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
  margin-top: 130px;
}

/* Konten Kiri (Teks dan Tombol) */
.hero-content {
  flex: 1; /* Mengambil setengah lebar */
  max-width: 600px;
  padding-left: 20px;
  margin-top: 3rem;
}

.main-title {
  font-size: 5rem; /* Ukuran font yang sangat besar */
  font-weight: 900;
  line-height: 1.1;
  color: #333;
  margin-bottom: 20px;
}

.main-title .highlight {
  color: #01c35f; /* Warna ungu/biru untuk 'Makassar' */
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
  background-color: #01c35f;
  color: white;
}

.btn:hover {
  background-color: white;
  border: solid #01c35f;
  color: #01c35f;
}

.btn.secondary {
  background-color: transparent;
  color: #01c35f;
  border: 2px solid #01c35f;
}

.btn.secondary:hover {
  background-color: #01c35f;
}

/* Media Sosial */
.social-media {
  margin-top: 50px;
  display: flex;
}

.social-media p {
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
  padding-top: 4px;
  padding-right: 10px;
}

.social-icons a {
  color: #333; /* Warna ikon */
  font-size: 1.5rem;
  margin-right: 15px;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #01c35f;
}

/* Gambar Kanan (Hero Image Container) */
.hero-image-container {
  flex: 1; /* Mengambil setengah lebar */
  background-image: url("../assets/anak.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px; /* Sudut membulat */
  height: 700px; /* Tinggi yang ditetapkan untuk melihat gambar */
  position: relative;
  /* Efek seperti 'mengapung' pada gambar */
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}
.quote-card-bawah {
  display: none !important;
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
    margin-top: 0 !important;
  }

  .hero-content {
    padding-left: 0;
    max-width: 100%;
  }

  .main-title {
    font-size: 2rem;
    text-align: start !important;
    max-width: 90%;
    margin: auto;
  }

  .description {
    margin: 20px auto;
    max-width: 90%;
    font-size: 15px !important;
    text-align: justify;
  }

  .button-anak {
    margin: auto;
    max-width: 90%;
  }

  .hero-image-container {
    width: 90%;
    height: 400px;
  }
  /* .quote-card {
    display: none !important;
  } */

  /* ===== PERBAIKAN QUOTE CARD ===== */
  .quote-card {
    position: relative !important;
    transform: none !important;
    width: 90%;
    /* margin: 15px auto 0 auto; */
    margin-top: 100px !important;
    background: white;
  }

  .quote-card p {
    font-size: 12px;
    font-style: italic;
    color: #333;
    margin-bottom: 5px;
    font-weight: 500;
  }

  .social-media {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top-right,
  .bottom-left {
    /* position: relative; */
    margin: 20px auto;
    transform: none;
    /* top: auto;
    right: auto;
    bottom: auto;
    left: auto; */
    max-width: 90%;
  }
}
</style>
