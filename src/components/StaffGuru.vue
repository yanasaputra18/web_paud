<template>
  <section id="staff-section" class="py-5">
    <div class="container" id="staff">
      <!-- Section Header -->
      <div class="text-center mb-5" data-aos="fade-up">
        <h6 class="text-uppercase fw-bold text-primary tracking-widest mb-2">Our Dedicated Team</h6>
        <h2 class="display-5 fw-bold title-text mb-3">
          Staf Guru <br />
          TK <span class="highlight">Mandiri</span> Tunggal Jaya
        </h2>
        <div class="header-line mx-auto"></div>
      </div>

      <!-- Carousel Container -->
      <div class="swiper-container-wrapper" data-aos="fade-up" data-aos-delay="200">
        <div class="swiper card-wrapper">
          <ul class="card-list swiper-wrapper">
            <!-- Staff Item 1 -->
            <li class="card-item swiper-slide">
              <div class="teacher-card">
                <div class="card-image-wrapper">
                  <img src="../assets/Ibu_Kepsek.png" class="teacher-img" alt="Bu Opih Nursopiah" />
                  <div class="card-overlay"></div>
                  <div class="social-links">
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-whatsapp"></i></a>
                  </div>
                </div>
                <div class="teacher-info">
                  <span class="role-badge">Kepala Sekolah</span>
                  <h4 class="teacher-name">Bu Opih Nursopiah S.Pd</h4>
                  <div class="info-line"></div>
                </div>
              </div>
            </li>

            <!-- Staff Item 2 -->
            <li class="card-item swiper-slide">
              <div class="teacher-card">
                <div class="card-image-wrapper">
                  <img src="../assets/Staf/kecil (5).png" class="teacher-img" alt="Bu Zahra Nursyifa" />
                  <div class="card-overlay"></div>
                  <div class="social-links">
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-whatsapp"></i></a>
                  </div>
                </div>
                <div class="teacher-info">
                  <span class="role-badge badge-green">Wali Kelas A</span>
                  <h4 class="teacher-name">Bu Zahra Nursyifa S.Pd</h4>
                  <div class="info-line"></div>
                </div>
              </div>
            </li>

            <!-- Staff Item 3 -->
            <li class="card-item swiper-slide">
              <div class="teacher-card">
                <div class="card-image-wrapper">
                  <img src="../assets/Staf/kecil (4).png" class="teacher-img" alt="Bu Annisa Rahma" />
                  <div class="card-overlay"></div>
                  <div class="social-links">
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-whatsapp"></i></a>
                  </div>
                </div>
                <div class="teacher-info">
                  <span class="role-badge badge-blue">Wali Kelas B</span>
                  <h4 class="teacher-name">Bu Annisa Rahma S.Pd</h4>
                  <div class="info-line"></div>
                </div>
              </div>
            </li>

            <!-- Staff Item 4 -->
            <li class="card-item swiper-slide">
              <div class="teacher-card">
                <div class="card-image-wrapper">
                  <img src="../assets/Staf/kecil (7).png" class="teacher-img" alt="Bu Fatimah Zahra" />
                  <div class="card-overlay"></div>
                  <div class="social-links">
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-whatsapp"></i></a>
                  </div>
                </div>
                <div class="teacher-info">
                  <span class="role-badge badge-purple">Wali Kelas C</span>
                  <h4 class="teacher-name">Bu Fatimah Zahra S.Pd</h4>
                  <div class="info-line"></div>
                </div>
              </div>
            </li>
          </ul>

          <!-- Pagination -->
          <div class="swiper-pagination custom-pagination"></div>
        </div>

        <!-- Navigation Buttons -->
        
      </div>
    </div>
  </section>
</template>

<script>
// Swiper v12 uses modules from 'swiper/modules'
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: 'StaffGuru',
  mounted() {
    new Swiper(".card-wrapper", {
      // Register modules
      modules: [Autoplay, Navigation, Pagination],
      
      loop: true,
      spaceBetween: 30,
      grabCursor: true,
      
      // Autoplay configuration
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

#staff-section {
  background-color: #f8fafc;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
}

.title-text {
  color: #1e293b;
  line-height: 1.2;
}

.highlight {
  color: #01c35f;
}

.header-line {
  width: 80px;
  height: 4px;
  background-color: #01c35f;
  border-radius: 2px;
}

.tracking-widest {
  letter-spacing: 0.1em;
}

/* Swiper Container Adjustments */
.swiper-container-wrapper {
  position: relative;
  padding: 0 50px;
}

.card-wrapper {
  padding: 20px 0 60px;
}

/* Teacher Card Design */
.teacher-card {
  background: #ffffff;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  height: 100%;
}

.card-image-wrapper {
  position: relative;
  aspect-ratio: 4/5;
  overflow: hidden;
}

.teacher-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%);
  opacity: 0.8;
  transition: opacity 0.4s ease;
}

.social-links {
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  padding-bottom: 25px;
  transition: all 0.4s ease;
  z-index: 2;
}

.social-links a {
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: #01c35f;
  transform: translateY(-5px);
}

.teacher-card:hover .teacher-img {
  transform: scale(1.1);
}

.teacher-card:hover .social-links {
  bottom: 0;
}

.teacher-card:hover .card-overlay {
  opacity: 1;
}

/* Info Section */
.teacher-info {
  padding: 30px 25px;
  text-align: center;
  background: #ffffff;
}

.role-badge {
  display: inline-block;
  padding: 6px 15px;
  border-radius: 100px;
  background: rgba(1, 195, 95, 0.1);
  color: #01c35f;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.badge-green { background: rgba(34, 197, 94, 0.1); color: #22c55e; }
.badge-blue { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
.badge-purple { background: rgba(168, 85, 247, 0.1); color: #a855f7; }

.teacher-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0;
}

.info-line {
  width: 40px;
  height: 3px;
  background-color: #01c35f;
  margin: 15px auto 0;
  border-radius: 2px;
  opacity: 0;
  transition: all 0.4s ease;
}

.teacher-card:hover .info-line {
  width: 80px;
  opacity: 1;
}

/* Swiper Navigation & Pagination */
.nav-button {
  width: 50px;
  height: 50px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  color: #1e293b !important;
  transition: all 0.3s ease;
}

.nav-button::after {
  font-size: 1.2rem !important;
  font-weight: bold;
}
/* .swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 16px; 
} */

.nav-button:hover {
  background: #01c35f;
  color: #ffffff !important;
}

.prev-btn { left: 0 !important; }
.next-btn { right: 0 !important; }

.custom-pagination {
  bottom: 0 !important;
}

.custom-pagination :deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #cbd5e1;
  opacity: 1;
}

.custom-pagination :deep(.swiper-pagination-bullet-active) {
  width: 25px;
  border-radius: 5px;
  background: #01c35f;
}

/* Responsive */
@media (max-width: 991px) {
  .swiper-container-wrapper {
    padding: 0 20px;
  }
  .nav-button {
    display: none;
  }
}

@media (max-width: 576px) {
  .display-5 {
    font-size: 2rem;
  }
  .teacher-info {
    padding: 25px 20px;
  }
  .teacher-name {
    font-size: 1.1rem;
  }
}
</style>
