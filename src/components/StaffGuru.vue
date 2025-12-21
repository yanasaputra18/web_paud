<template>
  <section id="Staff">
    <div class="container swiper">
      <h2 class="title" data-aos="fade-up">
        Staf Guru <br />
        TK <span>Mandiri</span>
        Tunggal Jaya
      </h2>
      <div class="card-wrapper swiper">
        <ul class="card-list swiper-wrapper">
          <li class="card-item swiper-slide">
            <a href="#" class="card-link">
              <img src="../assets/Ibu_Kepsek.png" class="card-image" />
              <p class="badge">Kepala Sekolah</p>
              <h2 class="card-title">Bu Opih Nursopiah S.Pd</h2>
            </a>
          </li>

          <li class="card-item swiper-slide">
            <a href="#" class="card-link">
              <img src="../assets/Staf/kecil (5).png" class="card-image" />
              <p class="badge">Wali Kelas A</p>
              <h2 class="card-title">Bu Zahra Nursyifa S.Pd</h2>
            </a>
          </li>

          <li class="card-item swiper-slide">
            <a href="#" class="card-link">
              <img src="../assets/Staf/kecil (4).png" class="card-image" />
              <p class="badge">Wali Kelas B</p>
              <h2 class="card-title">Bu Annisa Rahma S.Pd</h2>
            </a>
          </li>

          <li class="card-item swiper-slide">
            <a href="#" class="card-link">
              <img src="../assets/Staf/kecil (7).png" class="card-image" />
              <p class="badge">Wali Kelas C</p>
              <h2 class="card-title">Bu Fatimah Zahra S.Pd</h2>
            </a>
          </li>
        </ul>

        <!-- pagination & navigation -->
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  mounted() {
    Swiper.use([Autoplay, Navigation, Pagination]);

    new Swiper(".card-wrapper", {
      loop: true,
      spaceBetween: 30,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
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
/* ============================= */
/* GLOBAL RESET (AMAN) */
/* ============================= */

.container .title {
  text-align: center;
}

.container h2 {
  line-height: 1.4;
  font-weight: bold;
}
.container h2 span {
  color: #01c35f;
}

/* ❌ body TIDAK BOLEH di scoped */
/* body dipindahkan ke global/App.vue */

/* ============================= */
/* CARD STYLE */
/* ============================= */
.card-wrapper {
  position: relative; /* WAJIB agar navigation tidak kabur */
  max-width: 1100px;
  margin: 0 60px 35px;
  padding: 20px 10px;
  overflow: hidden;
}

.card-list .card-item {
  list-style: none;
}

.card-list .card-item .card-link {
  user-select: none;
  display: block;
  background: #fff;
  padding: 18px;
  text-decoration: none;
  border-radius: 10px;
  border: 2px solid transparent;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.05);
  transition: 0.2s ease;
}

.card-list .card-item .card-link:active {
  cursor: grabbing;
}

.card-list .card-item .card-link:hover {
  border-color: #5372f0;
}

.card-list .card-link .card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 10px;
}

/* ❌ FIX TYPO: bagde -> badge */
.card-list .card-link .badge {
  color: #5372f0;
  padding: 8px 16px;
  font-size: 0.95rem;
  font-weight: 500;
  margin: 16px 0 18px;
  background: #dde4ff;
  width: fit-content;
  border-radius: 10px;
}

.card-list .card-link .card-title {
  font-size: 1.19rem;
  color: #000;
  font-weight: 400;
}

/* ============================= */
/* SWIPER PAGINATION */
/* ============================= */
.card-wrapper .swiper-pagination-bullet {
  width: 13px;
  height: 13px;
  background: #5372f0;
  opacity: 0.5; /* ❌ FIX: 0,5 -> 0.5 */
}

.card-wrapper .swiper-pagination-bullet-active {
  opacity: 1;
}

/* ============================= */
/* SWIPER NAVIGATION (FIX TOTAL) */
/* ============================= */

/* ❌ swiper-slide-button TIDAK ADA */
/* ✅ pakai class resmi Swiper */

.card-wrapper .swiper-button-next,
.card-wrapper .swiper-button-prev {
  color: #5372f0;
  width: 40px;
  height: 40px;
}

/* icon panah Swiper ada di ::after */
.card-wrapper .swiper-button-next::after,
.card-wrapper .swiper-button-prev::after {
  font-size: 22px;
  font-weight: bold;
}

.card-wrapper .swiper-button-next:hover,
.card-wrapper .swiper-button-prev:hover {
  color: #1e40af;
}

/* ============================= */
/* MOBILE */
/* ============================= */
@media screen and (max-width: 768px) {
  .container .title {
    text-align: center;
  }

  .container h2 {
    font-size: 24px;
    line-height: 1.4;
    font-weight: bold;
  }
  .container h2 span {
    color: #01c35f;
  }

  .card-wrapper {
    margin: 0 10px 25px;
  }

  /* mobile swipe saja */
  .card-wrapper .swiper-button-next,
  .card-wrapper .swiper-button-prev {
    display: none;
  }
}
</style>
