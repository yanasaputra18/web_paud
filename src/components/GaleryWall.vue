<template>
  <section id="gallery" class="gallery-section">
    <h2 class="title">
      Gallery <br />
      TK <span>Mandiri</span>
      Tunggal Jaya
    </h2>

    <div id="lightgallery" class="gallery-grid">
      <a
        v-for="(img, index) in images"
        :key="index"
        :href="img.full"
        class="gallery-item"
      >
        <img :src="img.thumb" :alt="img.alt" />
      </a>
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
/* ============================= */
/* SECTION */

/* ============================= */
.gallery-section {
  padding: 60px 20px;
  text-align: center;
}

/* ============================= */
.title {
  text-align: center;
  margin-bottom: 50px;
}

h2 {
  line-height: 1.4;
  font-weight: 700;
}
h2 span {
  color: #01c35f;
}
/* GRID */
/* ============================= */
.gallery-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* ============================= */
/* ITEM */
/* ============================= */
.gallery-item {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.gallery-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-item:hover img {
  transform: scale(1.08);
}

/* ============================= */
/* RESPONSIVE */
/* ============================= */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
