<template>
  <section id="Staff">
    <div class="container">
      <h2 class="judul-besar">Staf <span class="highlight">Guru</span> Kami</h2>
      <p class="subjudul mb-5">
        Tenaga pendidik berpengalaman dan profesional.
      </p>

      <div class="carousel-container">
        <button class="carousel-btn prev">&#10094;</button>

        <div class="carousel-wrapper" id="carousel">
          <div class="guru-card" v-for="i in 5" :key="i">
            <img src="../assets/ibu_kepsek.jpg" class="guru-photo" />
            <h3 class="guru-nama">Nama Guru {{ i }}</h3>
            <p class="guru-jabatan">Guru PAUD</p>
          </div>
        </div>

        <button class="carousel-btn next">&#10095;</button>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "StaffGuru",

  setup() {
    onMounted(() => {
      const carousel = document.getElementById("carousel");
      const nextBtn = document.querySelector(".next");
      const prevBtn = document.querySelector(".prev");

      if (!carousel || !nextBtn || !prevBtn) return;

      // --- Next / Prev Button ---
      nextBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: 300, behavior: "smooth" });
      });

      prevBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -300, behavior: "smooth" });
      });

      // --- Swipe Gesture (Mobile) ---
      let startX = 0;
      let scrollLeft = 0;
      let isDown = false;

      carousel.addEventListener("touchstart", (e) => {
        isDown = true;
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
      });

      carousel.addEventListener("touchmove", (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        carousel.scrollLeft = scrollLeft - walk;
      });

      carousel.addEventListener("touchend", () => {
        isDown = false;
      });
    });
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 70px;
  background-color: #f0efff;
  height: 500px;
}
.guru-section {
  text-align: center;
  padding: 50px 20px;
  background: #f5f7ff;
}

.judul-besar {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
}

.highlight {
  color: #01c35f;
}

.subjudul {
  text-align: center;
  opacity: 0.7;
  margin-bottom: 30px;
}

.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-wrapper {
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.carousel-wrapper::-webkit-scrollbar {
  display: none;
}

.guru-card {
  min-width: 280px;
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
}

.guru-photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
}

.guru-nama {
  font-size: 18px;
  font-weight: 700;
}

.guru-jabatan {
  font-size: 14px;
  opacity: 0.7;
}

.carousel-btn {
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  border: none;
  background: white;
  padding: 10px 14px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

.prev {
  left: 10px;
}
.next {
  right: 10px;
}

/* MOBILE */
@media (max-width: 576px) {
  .guru-card {
    min-width: 85%;
  }

  .carousel-btn {
    padding: 7px 10px;
  }
}
</style>
