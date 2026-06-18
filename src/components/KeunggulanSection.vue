<template>
  <section id="keunggulan-section" class="py-5">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-5" data-aos="fade-down">
        <h6 class="text-uppercase fw-bold text-primary tracking-widest mb-2">Mengapa Memilih Kami?</h6>
        <h2 class="display-5 fw-bold title-text mb-3">
          Kenapa Harus <span class="highlight">TK Mandiri</span> <br />
          Tunggal Jaya
        </h2>
        <div class="header-line mx-auto"></div>
        <p class="subtext mt-3">
          Alasan kenapa harus memilih untuk bergabung dengan TK Mandiri Tunggal Jaya.
        </p>
      </div>

      <!-- Feature Cards Grid -->
      <div class="row g-4 justify-content-center">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="col-6 col-md-6 col-lg-3"
          :data-aos="index % 2 === 0 ? 'flip-left' : 'flip-right'"
          :data-aos-delay="100 * (index + 1)"
        >
          <div class="feature-card" :class="feature.colorClass">
            <div class="card-glass-effect"></div>
            <div class="feature-icon-wrapper">
              <i :class="feature.icon"></i>
            </div>
            <h5 class="feature-title">{{ feature.title }}</h5>
            <p class="feature-desc">{{ feature.description }}</p>
            <div class="feature-accent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'KeunggulanSection',
  data() {
    return {
      features: [
        {
          icon: 'bi bi-laptop',
          title: 'Fasilitas Lengkap',
          description: 'Penunjang belajar dengan kualitas terbaik dan teknologi modern',
          colorClass: 'bg-primary-gradient'
        },
        {
          icon: 'bi bi-building',
          title: 'Lingkungan Nyaman',
          description: 'Berada di lingkungan yang nyaman, asri, dan aman untuk anak',
          colorClass: 'bg-success-gradient'
        },
        {
          icon: 'bi bi-people',
          title: 'Pengajar Kompeten',
          description: 'Guru terbaik dengan pengalaman dan dedikasi tinggi',
          colorClass: 'bg-warning-gradient'
        },
        {
          icon: 'bi bi-briefcase',
          title: 'Kerja Sama Luas',
          description: 'Kemitraan terpercaya dengan berbagai institusi pendidikan',
          colorClass: 'bg-info-gradient'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

#keunggulan-section {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
  font-family: 'Poppins', sans-serif;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

#keunggulan-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #01c35f, transparent);
}

/* Section Header */
.title-text {
  color: #1e293b;
  line-height: 1.3;
  font-size: 2.5rem;
}

.highlight {
  color: #01c35f;
  position: relative;
}

.header-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #01c35f, #00e676);
  border-radius: 2px;
}

.tracking-widest {
  letter-spacing: 0.1em;
}

.subtext {
  color: #64748b;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Feature Card Styling */
.feature-card {
  position: relative;
  background: #ffffff;
  border-radius: 24px;
  padding: 40px 30px;
  height: 100%;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(1, 195, 95, 0.1);
}

.card-glass-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(1, 195, 95, 0.03), rgba(0, 230, 118, 0.05));
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
}

.feature-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 25px 60px rgba(1, 195, 95, 0.15);
  border-color: #01c35f;
}

.feature-card:hover .card-glass-effect {
  opacity: 1;
}

/* Icon Wrapper with Gradient Backgrounds */
.feature-icon-wrapper {
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  font-size: 2.5rem;
  color: #ffffff;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.bg-primary-gradient .feature-icon-wrapper {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.bg-success-gradient .feature-icon-wrapper {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.bg-warning-gradient .feature-icon-wrapper {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.bg-info-gradient .feature-icon-wrapper {
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
}

.feature-card:hover .feature-icon-wrapper {
  transform: scale(1.15) rotate(10deg);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

/* Typography */
.feature-title {
  position: relative;
  color: #1e293b;
  font-weight: 700;
  font-size: 1.35rem;
  margin-bottom: 15px;
  z-index: 1;
  transition: color 0.3s ease;
}

.feature-desc {
  position: relative;
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 0;
  z-index: 1;
  transition: color 0.3s ease;
}

.feature-card:hover .feature-title {
  color: #01c35f;
}

.feature-card:hover .feature-desc {
  color: #475569;
}

/* Decorative Accent */
.feature-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 4px;
  background: linear-gradient(90deg, #01c35f, #00e676);
  transition: width 0.5s ease;
  border-radius: 0 2px 0 0;
}

.feature-card:hover .feature-accent {
  width: 100%;
}

/* Responsive Adjustments */
@media (max-width: 991px) {
  .title-text {
    font-size: 2rem;
  }

  .feature-card {
    padding: 35px 25px;
    min-height: 260px;
  }

  .feature-icon-wrapper {
    width: 75px;
    height: 75px;
    font-size: 2rem;
  }

  .feature-title {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  #keunggulan-section {
    padding: 60px 0;
  }

  .title-text {
    font-size: 1.75rem;
    line-height: 1.4;
  }

  .subtext {
    font-size: 0.95rem;
    padding: 0 15px;
  }

  .feature-card {
    padding: 30px 20px;
    min-height: 240px;
    border-radius: 20px;
  }

  .feature-icon-wrapper {
    width: 65px;
    height: 65px;
    font-size: 1.75rem;
    margin-bottom: 20px;
    border-radius: 18px;
  }

  .feature-title {
    font-size: 1.05rem;
    margin-bottom: 12px;
  }

  .feature-desc {
    font-size: 0.85rem;
    line-height: 1.6;
  }
}
</style>
