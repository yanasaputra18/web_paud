<template>
  <div class="container">
    <section id="home">
      <main class="hero-section justify-content-between">
        <div class="hero-content">
          <div class="hero-badge" data-aos="fade-right" data-aos-delay="100">
            <i class="bi bi-star-fill"></i>
            <span>Sekolah Terpercaya Sejak 2010</span>
          </div>

          <h1 class="main-title" data-aos="fade-right" data-aos-delay="200">
            TK <span class="highlight">Mandiri</span> <br />
            Tunggal Jaya
          </h1>

          <p class="description" data-aos="fade-right" data-aos-delay="300">
            Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
            berprestasi di segala bidang yang dapat bersaing di dunia
            internasional
          </p>

          <!-- Action Buttons -->
          <div class="action-buttons" data-aos="fade-right" data-aos-delay="400">
            <!-- BUTTON VIDEO -->
            <button
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#videoModal"
            >
              <i class="bi bi-play-circle-fill"></i>
              <span>Lihat Video</span>
            </button>

            <!-- BUTTON DAFTAR -->
            <button class="btn btn-secondary" @click="scrollToDaftar">
              <span>Daftar Sekarang</span>
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>

          <!-- MODAL VIDEO -->
          <div
            class="modal fade"
            id="videoModal"
            tabindex="-1"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg modal-dialog-centered">
              <div class="modal-content border-0 video-modal">
                <button
                  type="button"
                  class="btn-close-modal"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="bi bi-x-lg"></i>
                </button>
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

          <!-- Social Media -->
          <div class="social-media" data-aos="fade-right" data-aos-delay="500">
            <p class="social-label">Follow Kami:</p>
            <div class="social-icons">
              <a href="#" class="social-icon facebook" aria-label="Facebook">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="social-icon instagram" aria-label="Instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="social-icon tiktok" aria-label="TikTok">
                <i class="bi bi-tiktok"></i>
              </a>
              <a href="#" class="social-icon whatsapp" aria-label="WhatsApp">
                <i class="bi bi-whatsapp"></i>
              </a>
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

    const scrollToDaftar = () => {
      const section = document.getElementById("gallery");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    return { videoPlayer, scrollToDaftar };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Bagian Utama (Hero Section) */
.hero-section {
  display: flex;
  max-width: 1400px;
  width: 100%;
  gap: 50px;
  padding: 50px 0;
  margin-top: 130px;
}

/* ============================= */
/* HERO CONTENT */
/* ============================= */
.hero-content {
  flex: 1;
  max-width: 600px;
  padding-left: 20px;
  margin-top: 3rem;
}

/* Hero Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: linear-gradient(135deg, rgba(1, 195, 95, 0.1), rgba(0, 230, 118, 0.1));
  border: 1.5px solid rgba(1, 195, 95, 0.3);
  border-radius: 50px;
  margin-bottom: 25px;
  animation: slideInLeft 0.6s ease-out;
}

.hero-badge i {
  color: #fbbf24;
  font-size: 1rem;
}

.hero-badge span {
  font-size: 0.9rem;
  font-weight: 600;
  color: #01c35f;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Main Title */
.main-title {
  font-size: 5rem;
  font-weight: 900;
  line-height: 1.1;
  color: #1e293b;
  margin-bottom: 25px;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.main-title .highlight {
  color: #01c35f;
  position: relative;
}

.main-title .highlight::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
  background: linear-gradient(90deg, rgba(1, 195, 95, 0.3), rgba(0, 230, 118, 0.3));
  z-index: -1;
}

/* Description */
.description {
  font-size: 1.15rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 35px;
  max-width: 500px;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ============================= */
/* ACTION BUTTONS */
/* ============================= */
.action-buttons {
  display: flex;
  gap: 15px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 32px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

/* Primary Button (Video) */
.btn-primary {
  background: linear-gradient(135deg, #01c35f, #00e676);
  color: white;
  box-shadow: 0 8px 25px rgba(1, 195, 95, 0.3);
}

.btn-primary i {
  font-size: 1.3rem;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(1, 195, 95, 0.4);
}

.btn-primary:active {
  transform: translateY(-1px);
}

/* Secondary Button (Daftar) */
.btn-secondary {
  background: white;
  color: #01c35f;
  border: 2px solid #01c35f;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.btn-secondary i {
  transition: transform 0.3s ease;
}

.btn-secondary:hover {
  background: #01c35f;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(1, 195, 95, 0.3);
}

.btn-secondary:hover i {
  transform: translateX(5px);
}

/* ============================= */
/* VIDEO MODAL */
/* ============================= */
.video-modal {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.btn-close-modal {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.btn-close-modal:hover {
  background: #01c35f;
  transform: rotate(90deg);
}

.btn-close-modal i {
  font-size: 1.2rem;
}

/* ============================= */
/* SOCIAL MEDIA */
/* ============================= */
.social-media {
  display: flex;
  align-items: center;
  gap: 20px;
}

.social-label {
  font-weight: 600;
  color: #475569;
  margin: 0;
  font-size: 0.95rem;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1.3rem;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;
}

.social-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  opacity: 0.1;
  transition: opacity 0.3s ease;
}

.social-icon i {
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.social-icon:hover i {
  transform: scale(1.1);
}

/* Facebook */
.social-icon.facebook {
  background: rgba(24, 119, 242, 0.1);
  color: #1877f2;
}

.social-icon.facebook::before {
  background: #1877f2;
}

.social-icon.facebook:hover {
  background: #1877f2;
  color: white;
}

/* Instagram */
.social-icon.instagram {
  background: rgba(225, 48, 108, 0.1);
  color: #e1306c;
}

.social-icon.instagram::before {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.social-icon.instagram:hover {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: white;
}

/* TikTok */
.social-icon.tiktok {
  background: rgba(0, 0, 0, 0.1);
  color: #000000;
}

.social-icon.tiktok::before {
  background: #000000;
}

.social-icon.tiktok:hover {
  background: #000000;
  color: white;
}

/* WhatsApp */
.social-icon.whatsapp {
  background: rgba(37, 211, 102, 0.1);
  color: #25d366;
}

.social-icon.whatsapp::before {
  background: #25d366;
}

.social-icon.whatsapp:hover {
  background: #25d366;
  color: white;
}

/* ============================= */
/* HERO IMAGE */
/* ============================= */
.hero-image-container {
  flex: 1;
  background-image: url("../assets/anak.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 30px;
  height: 700px;
  position: relative;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
  animation: fadeInRight 1s ease-out 0.3s both;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Quote Cards */
.quote-card {
  position: absolute;
  background-color: white;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  max-width: 280px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.quote-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

.quote-card p {
  font-style: italic;
  color: #1e293b;
  margin-bottom: 15px;
  font-weight: 500;
  line-height: 1.6;
}

.top-right {
  top: 5%;
  right: -10%;
  transform: rotate(3deg);
}

.bottom-left {
  bottom: 5%;
  left: -15%;
  transform: rotate(-5deg);
  max-width: 350px;
  padding: 30px;
}

.quote-source {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 12px;
}

.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
  border: 2px solid #01c35f;
}

/* ============================= */
/* RESPONSIVE */
/* ============================= */
@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    padding: 30px 0;
  }

  .hero-content {
    padding-left: 0;
    max-width: 100%;
    margin-top: 0;
  }

  .hero-badge {
    margin-left: 20px;
  }

  .main-title {
    font-size: 3rem;
    max-width: 90%;
    margin-left: 20px;
  }

  .description {
    margin: 20px;
    max-width: 90%;
    font-size: 1.05rem;
    text-align: justify;
  }

  .action-buttons {
    padding: 0 20px;
  }

  .btn {
    flex: 1;
    min-width: 160px;
    justify-content: center;
  }

  .hero-image-container {
    width: 90%;
    height: 500px;
  }

  .quote-card {
    position: relative !important;
    transform: none !important;
    width: 90%;
    margin: 20px auto;
  }

  .top-right {
    top: auto;
    right: auto;
  }

  .bottom-left {
    bottom: auto;
    left: auto;
  }

  .social-media {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 0 20px;
  }

  .social-label {
    text-align: left;
  }

  .social-icons {
    justify-content: flex-start;
  }
}

@media (max-width: 576px) {
  .hero-section {
    margin-top: 80px;
  }

  .main-title {
    font-size: 2.2rem;
  }

  .description {
    font-size: 0.95rem;
  }

  .action-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    padding: 14px 28px;
  }

  .hero-image-container {
    height: 400px;
    border-radius: 20px;
  }

  .social-icon {
    width: 42px;
    height: 42px;
    font-size: 1.2rem;
  }

  .quote-card {
    padding: 20px;
  }

  .quote-card p {
    font-size: 0.9rem;
  }
}
</style>
