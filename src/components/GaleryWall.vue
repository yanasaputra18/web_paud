<template>
  <section id="gallery" class="gallery-section">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-5" data-aos="fade-up">
        <h6 class="text-uppercase fw-bold text-primary tracking-widest mb-2">
          Momen Kita
        </h6>
        <h2 class="display-5 fw-bold title-text mb-3">
          Gallery Kegiatan <br />
          TK <span class="highlight">Mandiri</span> Tunggal Jaya
        </h2>
        <div class="header-line mx-auto"></div>
        <p class="subtext mt-3">
          Dokumentasi momen berharga kegiatan belajar dan bermain anak-anak
        </p>
      </div>

      <!-- Gallery Grid -->
      <div id="lightgallery" class="gallery-grid">
        <a
          v-for="(img, index) in images"
          :key="index"
          :href="img.full"
          class="gallery-item"
          :data-aos="index % 2 === 0 ? 'zoom-in' : 'zoom-in'"
          :data-aos-delay="50 * (index + 1)"
        >
          <div class="image-wrapper">
            <img :src="img.thumb" :alt="img.alt" />
            <div class="overlay">
              <div class="overlay-content">
                <i class="bi bi-zoom-in"></i>
                <p class="overlay-text">{{ img.alt }}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import kecil1 from "@/assets/thumb/kecil (1).png";
import besar1 from "@/assets/thumb/besar (1).png";

import kecil2 from "@/assets/thumb/kecil (2).png";
import besar2 from "@/assets/thumb/besar (4).png";

import kecil3 from "@/assets/thumb/kecil (3).png";
import besar3 from "@/assets/thumb/besar (5).png";

import kecil4 from "@/assets/thumb/kecil (4).png";
import besar4 from "@/assets/thumb/besar (6).png";

import kecil5 from "@/assets/thumb/kecil (5).png";
import besar5 from "@/assets/thumb/besar (7).png";

import kecil6 from "@/assets/thumb/kecil (6).png";
import besar6 from "@/assets/thumb/besar (8).png";

import kecil7 from "@/assets/thumb/kecil (7).png";
import besar7 from "@/assets/thumb/besar (2).png";

import kecil8 from "@/assets/thumb/kecil (8).png";
import besar8 from "@/assets/thumb/besar (3).png";

export default {
  mounted() {
    this.$nextTick(() => {
      if (window.lightGallery) {
        window.lightGallery(document.getElementById("lightgallery"), {
          speed: 400,
          download: false,
          thumbnail: true,
        });
      }
    });
  },

  data() {
    return {
      images: [
        { thumb: kecil1, full: besar1, alt: "Kegiatan Belajar" },
        { thumb: kecil2, full: besar2, alt: "Bermain Bersama" },
        { thumb: kecil3, full: besar3, alt: "Membaca Buku" },
        { thumb: kecil4, full: besar4, alt: "Kegiatan Kelas" },
        { thumb: kecil5, full: besar5, alt: "Mewarnai" },
        { thumb: kecil6, full: besar6, alt: "Bernyanyi" },
        { thumb: kecil7, full: besar7, alt: "Bermain bola" },
        { thumb: kecil8, full: besar8, alt: "Belajar Bersama" },
      ],
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/* ============================= */
/* SECTION */
/* ============================= */
.gallery-section {
  padding: 80px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow: hidden;
}

.gallery-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #01c35f, transparent);
}

/* ============================= */
/* HEADER STYLING */
/* ============================= */
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
  font-size: 1.05rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ============================= */
/* GALLERY GRID */
/* ============================= */
.gallery-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  padding: 0 20px;
}

/* ============================= */
/* GALLERY ITEM */
/* ============================= */
.gallery-item {
  position: relative;
  display: block;
  text-decoration: none;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: #ffffff;
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(1, 195, 95, 0.2);
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.gallery-item:hover img {
  transform: scale(1.15);
}

/* ============================= */
/* OVERLAY EFFECT */
/* ============================= */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(1, 195, 95, 0.85),
    rgba(0, 230, 118, 0.75)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
  transform: translateY(20px);
  transition: transform 0.4s ease;
}

.gallery-item:hover .overlay-content {
  transform: translateY(0);
}

.overlay-content i {
  font-size: 3rem;
  margin-bottom: 10px;
  display: block;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.overlay-text {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  padding: 0 20px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

/* ============================= */
/* RESPONSIVE */
/* ============================= */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .image-wrapper {
    height: 240px;
  }
}

@media (max-width: 768px) {
  .gallery-section {
    padding: 60px 0;
  }

  .title-text {
    font-size: 2rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 0 15px;
  }

  .image-wrapper {
    height: 200px;
  }

  .gallery-item {
    border-radius: 15px;
  }

  .overlay-content i {
    font-size: 2.5rem;
  }

  .overlay-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .title-text {
    font-size: 1.75rem;
  }

  .subtext {
    font-size: 0.95rem;
    padding: 0 15px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .image-wrapper {
    height: 180px;
  }

  .gallery-item {
    border-radius: 12px;
  }

  .overlay-content i {
    font-size: 2rem;
  }

  .overlay-text {
    font-size: 0.85rem;
  }
}
</style>
