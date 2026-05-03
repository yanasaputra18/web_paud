<template>
  <div class="container-fluid py-5" id="program">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-5" data-aos="fade-up">
        <h6 class="text-uppercase fw-bold text-primary tracking-widest mb-2">Program Kami</h6>
        <h2 class="display-5 fw-bold title-text">
          Program Unggulan <br />
          TK <span class="highlight">Mandiri</span> Tunggal Jaya
        </h2>
        <div class="header-line mx-auto"></div>
      </div>

      <!-- Main Programs Grid -->
      <div class="row g-4 mb-5">
        <div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
          <div class="program-card bg-kognitif">
            <div class="card-glass-effect"></div>
            <div class="program-icon-wrapper">
              <i class="fas fa-lightbulb"></i>
            </div>
            <h5 class="program-title">Kognitif</h5>
            <p class="program-desc">Melatih berpikir, mengenal bentuk, warna, dan angka secara interaktif.</p>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
          <div class="program-card bg-bahasa">
            <div class="card-glass-effect"></div>
            <div class="program-icon-wrapper">
              <i class="fas fa-comments"></i>
            </div>
            <h5 class="program-title">Bahasa</h5>
            <p class="program-desc">Belajar bercerita, menyimak, berbicara, dan kosakata baru setiap hari.</p>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <div class="program-card bg-fisik">
            <div class="card-glass-effect"></div>
            <div class="program-icon-wrapper">
              <i class="fas fa-running"></i>
            </div>
            <h5 class="program-title">Fisik Motorik</h5>
            <p class="program-desc">Melatih gerak tubuh, koordinasi, keseimbangan, dan kekuatan fisik.</p>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
          <div class="program-card bg-sosial">
            <div class="card-glass-effect"></div>
            <div class="program-icon-wrapper">
              <i class="fas fa-handshake"></i>
            </div>
            <h5 class="program-title">Sosial Emosional</h5>
            <p class="program-desc">Belajar berbagi, antri, bekerja sama, dan mengelola emosi dengan bijak.</p>
          </div>
        </div>
      </div>

      <!-- Extracurricular Header -->
      <div class="text-center mb-5 mt-5" data-aos="fade-up">
        <h2 class="display-6 fw-bold title-text">
          Program <span class="highlight">Ekstrakurikuler</span>
        </h2>
        <div class="header-line mx-auto"></div>
      </div>

      <!-- Extracurricular Grid -->
      <div class="row g-4">
        <div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
          <div class="program-card bg-inggris">
            <div class="card-glass-effect"></div>
            <div class="program-icon-wrapper">
              <i class="fas fa-globe"></i>
            </div>
            <h5 class="program-title">English Club</h5>
            <p class="program-desc">Pengenalan kata sederhana melalui lagu dan permainan seru.</p>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
          <div class="program-card bg-art">
            <div class="card-glass-effect"></div>
            <div class="program-icon-wrapper">
              <i class="fas fa-paint-brush"></i>
            </div>
            <h5 class="program-title">Seni & Kreativitas</h5>
            <p class="program-desc">Mewarnai, menggambar, melipat kertas, dan membuat karya lucu.</p>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <div class="program-card bg-cooking">
            <div class="card-glass-effect"></div>
            <div class="program-icon-wrapper">
              <i class="fas fa-utensils"></i>
            </div>
            <h5 class="program-title">Cooking Class</h5>
            <p class="program-desc">Memasak sederhana serta mengenal tanaman dan alam sekitar.</p>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
          <div class="program-card bg-karakter">
            <div class="card-glass-effect"></div>
            <div class="program-icon-wrapper">
              <i class="bi bi-chat-square-heart-fill"></i>
            </div>
            <h5 class="program-title">Karakter & Religi</h5>
            <p class="program-desc">Doa harian, sopan santun, dan pembiasaan perilaku baik.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramKami'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

#program {
  background-color: #f8fafc;
  font-family: 'Poppins', sans-serif;
}

.title-text {
  color: #1e293b;
  line-height: 1.2;
}

.highlight {
  color: #01c35f;
  position: relative;
  display: inline-block;
}

.header-line {
  width: 80px;
  height: 4px;
  background-color: #01c35f;
  border-radius: 2px;
  margin-top: 15px;
}

.tracking-widest {
  letter-spacing: 0.1em;
}

/* Card Styling */
.program-card {
  position: relative;
  padding: 40px 30px;
  border-radius: 24px;
  overflow: hidden;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1;
}

.card-glass-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.program-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.program-card:hover .card-glass-effect {
  opacity: 1;
}

/* Icon Wrapper */
.program-icon-wrapper {
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  font-size: 2rem;
  color: #ffffff;
  transition: all 0.3s ease;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.program-card:hover .program-icon-wrapper {
  background: #ffffff;
  color: #1e293b;
  transform: scale(1.1) rotate(5deg);
}

/* Typography inside cards */
.program-title {
  color: #ffffff;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 15px;
}

.program-desc {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 400;
  margin-bottom: 0;
}

/* Gradient Backgrounds */
.bg-kognitif { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); }
.bg-bahasa { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); }
.bg-fisik { background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); }
.bg-sosial { background: linear-gradient(135deg, #10b981 0%, #059669 100%); }

.bg-inggris { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); }
.bg-art { background: linear-gradient(135deg, #ec4899 0%, #db2777 100%); }
.bg-cooking { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); }
.bg-karakter { background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); }

/* Responsive Adjustments */
@media (max-width: 991px) {
  .program-card {
    padding: 30px 20px;
  }
  .program-title {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .display-5 {
    font-size: 1.8rem;
  }
  .display-6 {
    font-size: 1.5rem;
  }
  .program-card {
    padding: 20px 15px;
    border-radius: 18px;
  }
  .program-icon-wrapper {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  .program-title {
    font-size: 1rem;
    margin-bottom: 8px;
  }
  .program-desc {
    font-size: 0.8rem;
    line-height: 1.4;
  }
}
</style>
