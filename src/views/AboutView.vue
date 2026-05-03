<template>
  <div id="about-page">
    <MainHerro />
    
    <!-- Section Kenapa Harus Kami -->
    <section class="section-kenapa py-5">
      <div class="pattern-bg"></div>
      <div class="container position-relative">
        <div class="text-center mb-5" data-aos="fade-up">
          <div class="badge-premium mb-3">
            <span>The Best Foundation</span>
          </div>
          <h2 class="display-4 fw-bold title-text mb-3">
            Kenapa Harus <span class="highlight">TK Mandiri</span> <br />
            Tunggal Jaya?
          </h2>
          <div class="header-line mx-auto mb-4"></div>
          <p class="subtext mx-auto">
            Kami menghadirkan standar pendidikan kelas dunia dalam lingkungan yang penuh kasih sayang, memastikan setiap anak tumbuh menjadi versi terbaik mereka.
          </p>
        </div>

        <div class="row g-4 cards-staggered">
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="card-feature-premium">
              <span class="card-number">01</span>
              <div class="icon-wrapper">
                <i class="bi bi-laptop"></i>
              </div>
              <h5 class="fw-bold">Fasilitas Lengkap</h5>
              <p>Laboratorium kreatif, area bermain edukatif, dan teknologi ramah anak.</p>
              <div class="card-glow"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mt-lg-5" data-aos="fade-up" data-aos-delay="200">
            <div class="card-feature-premium">
              <span class="card-number">02</span>
              <div class="icon-wrapper icon-green">
                <i class="bi bi-building"></i>
              </div>
              <h5 class="fw-bold">Lingkungan Nyaman</h5>
              <p>Area asri yang dirancang khusus untuk stimulasi sensorik dan keamanan maksimal.</p>
              <div class="card-glow"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="card-feature-premium">
              <span class="card-number">03</span>
              <div class="icon-wrapper icon-orange">
                <i class="bi bi-people"></i>
              </div>
              <h5 class="fw-bold">Pengajar Kompeten</h5>
              <p>Praktisi pendidikan anak usia dini yang bersertifikasi dan berdedikasi tinggi.</p>
              <div class="card-glow"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mt-lg-5" data-aos="fade-up" data-aos-delay="400">
            <div class="card-feature-premium">
              <span class="card-number">04</span>
              <div class="icon-wrapper icon-purple">
                <i class="bi bi-briefcase"></i>
              </div>
              <h5 class="fw-bold">Kerja Sama Luas</h5>
              <p>Akreditasi unggul dengan kurikulum yang diakui secara nasional dan global.</p>
              <div class="card-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Profil -->
    <section id="tentang" class="py-5 section-profil-magazine">
      <div class="container">
        <div class="row align-items-center g-5">
          <!-- Column Image (Left) -->
          <div class="col-lg-5" data-aos="zoom-in-right">
            <div class="premium-image-stack">
              <div class="glass-frame"></div>
              <div class="blob-bg-animated"></div>
              <img
                src="../assets/Ibu_Kepsek.png"
                alt="Kepala Sekolah"
                class="img-fluid profil-main-img"
              />
              <div class="floating-trust-badge">
                <div class="badge-inner">
                  <span class="year">EST</span>
                  <span class="val">2010</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Column Content (Right) -->
          <div class="col-lg-7" data-aos="fade-left">
            <div class="magazine-content">
              <h6 class="text-primary fw-bold text-uppercase ls-2 mb-3">About Our Foundation</h6>
              <h2 class="display-5 fw-bold title-text mb-4">
                Profil TK <span class="highlight">Mandiri</span> Tunggal Jaya
              </h2>
              
              <div class="sambutan-text-wrapper">
                <p class="drop-cap-text mb-4">
                  Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
                  berprestasi di segala bidang yang dapat bersaing di dunia internasional. 
                  Kami percaya bahwa setiap anak memiliki potensi unik yang menunggu untuk ditemukan.
                </p>
                
                <div class="premium-quote mb-5">
                  <i class="bi bi-quote mb-2 d-block"></i>
                  <p>Membangun karakter dan kecerdasan emosional adalah misi utama kami untuk menciptakan pemimpin masa depan.</p>
                  <span class="signature">- Ibu Kepala Sekolah</span>
                </div>
                
                <div class="row g-3">
                  <div class="col-md-4">
                    <div class="mission-tile">
                      <i class="bi bi-star-fill text-warning"></i>
                      <h6>Karakter</h6>
                      <p>Membentuk pribadi jujur & mandiri.</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mission-tile">
                      <i class="bi bi-lightbulb-fill text-info"></i>
                      <h6>Kreativitas</h6>
                      <p>Stimulasi ide & inovasi anak.</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mission-tile">
                      <i class="bi bi-shield-check text-success"></i>
                      <h6>Kesiapan</h6>
                      <p>Bekal untuk jenjang sekolah dasar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Icon watshap -->
    <a id="wa-float" target="_blank" rel="noopener noreferrer" class="wa-pulse">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  mounted() {
    const el = document.getElementById("wa-float");
    if (el) {
      const phone = "6281511408837";
      const msg = "Halo ibu, saya mau bertanya. Tentang TK Mandiri";
      el.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap');

#about-page {
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
  overflow-x: hidden;
}

.title-text {
  color: #0f172a;
  line-height: 1.1;
}

.highlight {
  color: #01c35f;
  background: linear-gradient(120deg, rgba(1, 195, 95, 0.1) 0%, rgba(1, 195, 95, 0.1) 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.3em;
  background-position: 0 88%;
}

.ls-2 { letter-spacing: 2px; }

/* Section Kenapa - Senior Design */
.section-kenapa {
  position: relative;
  background-color: #f8fafc;
  overflow: hidden;
}

.pattern-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(#01c35f 0.5px, transparent 0.5px);
  background-size: 20px 20px;
  opacity: 0.05;
}

.badge-premium {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(1, 195, 95, 0.1);
  color: #01c35f;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-feature-premium {
  background: #ffffff;
  padding: 50px 35px;
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  height: 100%;
  border: 1px solid #f1f5f9;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 1;
}

.card-number {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 4rem;
  font-weight: 800;
  color: #f1f5f9;
  z-index: -1;
  transition: all 0.5s ease;
}

.card-feature-premium:hover {
  transform: translateY(-15px);
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.1);
  border-color: #01c35f;
}

.card-feature-premium:hover .card-number {
  color: rgba(1, 195, 95, 0.1);
  transform: scale(1.2);
}

.icon-wrapper {
  width: 65px;
  height: 65px;
  background: #eff6ff;
  color: #3b82f6;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 25px;
}

.icon-green { background: #f0fdf4; color: #22c55e; }
.icon-orange { background: #fff7ed; color: #f97316; }
.icon-purple { background: #faf5ff; color: #a855f7; }

.card-glow {
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(1, 195, 95, 0.05) 0%, transparent 70%);
  z-index: -1;
}

/* Section Profil - Magazine Layout */
.section-profil-magazine {
  background: #ffffff;
}

.premium-image-stack {
  position: relative;
  padding: 30px;
}

.glass-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 90%;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 40px;
  z-index: 0;
}

.blob-bg-animated {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 70%;
  height: 70%;
  background: linear-gradient(135deg, rgba(1, 195, 95, 0.2) 0%, rgba(5, 150, 105, 0.1) 100%);
  border-radius: 50%;
  z-index: 0;
  filter: blur(40px);
  animation: float-blob 8s infinite alternate;
}

@keyframes float-blob {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(-20px, 20px) scale(1.1); }
}

.profil-main-img {
  position: relative;
  z-index: 1;
  border-radius: 40px;
  box-shadow: 20px 30px 60px rgba(0, 0, 0, 0.1);
  transform: rotate(-2deg);
}

.floating-trust-badge {
  position: absolute;
  top: 10%;
  right: 0;
  background: #0f172a;
  color: #ffffff;
  padding: 15px;
  border-radius: 20px;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.badge-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
}

.badge-inner .year { font-size: 0.7rem; opacity: 0.6; }
.badge-inner .val { font-size: 1.2rem; font-weight: 700; margin-top: 5px; }

/* Magazine Text Styling */
.drop-cap-text::first-letter {
  float: left;
  font-size: 4.5rem;
  line-height: 0.8;
  font-weight: 700;
  color: #01c35f;
  margin-right: 15px;
  margin-top: 5px;
}

.drop-cap-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #475569;
}

.premium-quote {
  background: #f8fafc;
  padding: 40px;
  border-radius: 0 40px 40px 40px;
  border-left: 6px solid #01c35f;
}

.premium-quote p {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-style: italic;
  color: #1e293b;
  margin-bottom: 15px;
}

.signature {
  font-weight: 700;
  color: #64748b;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.mission-tile {
  padding: 20px;
  background: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 20px;
  height: 100%;
  transition: all 0.3s ease;
}

.mission-tile:hover {
  background: #f0fdf4;
  border-color: #01c35f;
}

.mission-tile i { font-size: 1.5rem; margin-bottom: 15px; display: block; }
.mission-tile h6 { font-weight: 700; margin-bottom: 10px; }
.mission-tile p { font-size: 0.85rem; color: #64748b; margin-bottom: 0; }

/* WhatsApp */
#wa-float {
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 65px;
  height: 65px;
  background: #25d366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 30px rgba(37, 211, 102, 0.4);
  z-index: 9999;
  font-size: 32px;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

#wa-float:hover {
  transform: scale(1.15) rotate(10deg);
}

.wa-pulse { animation: pulse-green 2s infinite; }

@keyframes pulse-green {
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
  70% { box-shadow: 0 0 0 20px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

/* Responsive Senior Adjustments */
@media (max-width: 991px) {
  .mt-lg-5 { margin-top: 0; }
  .display-4 { font-size: 2.5rem; }
  .magazine-content { margin-top: 40px; }
  .premium-quote { padding: 30px; }
}

@media (max-width: 576px) {
  .display-4 { font-size: 2rem; }
  .display-5 { font-size: 1.8rem; }
  .card-feature-premium { padding: 40px 25px; }
  .drop-cap-text::first-letter { font-size: 3.5rem; }
  #wa-float { width: 55px; height: 55px; font-size: 26px; right: 20px; bottom: 20px; }
}
</style>
