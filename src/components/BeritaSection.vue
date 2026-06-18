<template>
  <section id="berita-section" class="berita-section">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-5" data-aos="fade-up">
        <h6 class="text-uppercase fw-bold text-primary tracking-widest mb-2">
          Berita Terkini
        </h6>
        <h2 class="display-5 fw-bold title-text mb-3">
          Kabar Terbaru <br />
          TK <span class="highlight">Mandiri</span> Tunggal Jaya
        </h2>
        <div class="header-line mx-auto"></div>
        <p class="subtext mt-3">
          Ikuti perkembangan terbaru kegiatan, prestasi, dan informasi penting dari sekolah kami
        </p>
      </div>

      <!-- News Grid Layout -->
      <div class="berita-grid">
        <!-- ======================== -->
        <!-- Featured Card (Left)    -->
        <!-- ======================== -->
        <div class="berita-featured" data-aos="fade-right" data-aos-delay="100">
          <div class="berita-card berita-card--featured">
            <div class="berita-card__image">
              <img :src="featuredBerita.thumbnail" :alt="featuredBerita.title" loading="lazy" />
              <div class="berita-card__overlay"></div>
              <span class="berita-card__badge" :class="featuredBerita.badgeClass">
                {{ featuredBerita.category }}
              </span>
            </div>
            <div class="berita-card__content">
              <div class="berita-card__meta">
                <span class="berita-card__date">
                  <i class="bi bi-calendar3"></i>
                  {{ featuredBerita.date }}
                </span>
                <span class="berita-card__author">
                  <i class="bi bi-person-circle"></i>
                  {{ featuredBerita.author }}
                </span>
              </div>
              <h3 class="berita-card__title berita-card__title--featured">
                {{ featuredBerita.title }}
              </h3>
              <p class="berita-card__excerpt berita-card__excerpt--featured">
                {{ featuredBerita.excerpt }}
              </p>
              <div class="featured-footer">
                <span class="read-time">
                  <i class="bi bi-clock"></i>
                  {{ featuredBerita.readTime }} baca
                </span>
                <router-link :to="`/berita/${featuredBerita.id}`" class="berita-card__link">
                  Baca Selengkapnya
                  <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
            <div class="berita-card__accent"></div>
          </div>
        </div>

        <!-- ======================================== -->
        <!-- Right: List Cards with Pagination       -->
        <!-- ======================================== -->
        <div class="berita-right-col">
          <!-- Card List (paginated, 3 per page) -->
          <div class="berita-list">
            <div
              v-for="(berita, index) in paginatedList"
              :key="berita.id"
              class="berita-list__item"
              data-aos="fade-left"
              :data-aos-delay="120 * (index + 1)"
            >
              <div class="berita-card berita-card--horizontal">
                <div class="berita-card__image berita-card__image--small">
                  <img :src="berita.thumbnail" :alt="berita.title" loading="lazy" />
                  <div class="berita-card__overlay"></div>
                  <span class="berita-card__badge berita-card__badge--small" :class="berita.badgeClass">
                    {{ berita.category }}
                  </span>
                </div>
                <div class="berita-card__content berita-card__content--compact">
                  <div class="berita-card__meta">
                    <span class="berita-card__date">
                      <i class="bi bi-calendar3"></i>
                      {{ berita.date }}
                    </span>
                  </div>
                  <h4 class="berita-card__title berita-card__title--small">
                    {{ berita.title }}
                  </h4>
                  <p class="berita-card__excerpt berita-card__excerpt--small">
                    {{ berita.excerpt }}
                  </p>
                  <router-link :to="`/berita/${berita.id}`" class="berita-card__link berita-card__link--small">
                    Baca Selengkapnya
                    <i class="bi bi-arrow-right"></i>
                  </router-link>
                </div>
                <div class="berita-card__accent"></div>
              </div>
            </div>
          </div>

          <!-- ======================== -->
          <!-- Pagination Controls     -->
          <!-- ======================== -->
          <div class="pagination-wrapper" v-if="totalPages > 1" data-aos="fade-up" data-aos-delay="200">
            <div class="pagination-info">
              Menampilkan {{ paginationStart }}–{{ paginationEnd }} dari {{ listBerita.length }} berita
            </div>
            <div class="pagination-controls">
              <!-- Prev Button -->
              <button
                class="page-btn page-btn--nav"
                :disabled="currentPage === 1"
                @click="goToPage(currentPage - 1)"
                aria-label="Halaman sebelumnya"
              >
                <i class="bi bi-chevron-left"></i>
              </button>

              <!-- Page Numbers -->
              <button
                v-for="page in totalPages"
                :key="page"
                class="page-btn"
                :class="{ 'page-btn--active': page === currentPage }"
                @click="goToPage(page)"
                :aria-label="`Halaman ${page}`"
                :aria-current="page === currentPage ? 'page' : null"
              >
                {{ page }}
              </button>

              <!-- Next Button -->
              <button
                class="page-btn page-btn--nav"
                :disabled="currentPage === totalPages"
                @click="goToPage(currentPage + 1)"
                aria-label="Halaman berikutnya"
              >
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-5" data-aos="fade-up" data-aos-delay="300">
        <router-link to="/berita/1" class="btn-view-all">
          <span>Lihat Semua Berita</span>
          <i class="bi bi-arrow-right-circle"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import beritaData from '@/data/beritaData.js';

const ITEMS_PER_PAGE = 3;

export default {
  name: 'BeritaSection',
  data() {
    return {
      beritaList: beritaData,
      currentPage: 1,
    };
  },
  computed: {
    // Featured card always shows the first (featured) article
    featuredBerita() {
      return this.beritaList[0];
    },
    // The list on the right: exclude the featured one
    listBerita() {
      return this.beritaList.slice(1);
    },
    totalPages() {
      return Math.ceil(this.listBerita.length / ITEMS_PER_PAGE);
    },
    paginatedList() {
      const start = (this.currentPage - 1) * ITEMS_PER_PAGE;
      return this.listBerita.slice(start, start + ITEMS_PER_PAGE);
    },
    paginationStart() {
      return (this.currentPage - 1) * ITEMS_PER_PAGE + 1;
    },
    paginationEnd() {
      return Math.min(this.currentPage * ITEMS_PER_PAGE, this.listBerita.length);
    },
  },
  methods: {
    goToPage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
      // Smooth scroll to the right column top
      this.$nextTick(() => {
        const el = document.querySelector('.berita-right-col');
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/* ============================= */
/* SECTION BASE                  */
/* ============================= */
.berita-section {
  padding: 80px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f0fdf4 50%, #ffffff 100%);
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow: hidden;
}

.berita-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #01c35f, transparent);
}

.berita-section::after {
  content: '';
  position: absolute;
  top: 100px;
  right: -60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(1, 195, 95, 0.06), transparent 70%);
  pointer-events: none;
}

/* ============================= */
/* HEADER STYLING                */
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
/* NEWS GRID LAYOUT              */
/* ============================= */
.berita-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start; /* IMPORTANT: prevent left card stretching */
}

/* ============================= */
/* FEATURED CARD (Left)          */
/* ============================= */
.berita-featured {
  display: flex;
  position: sticky;
  top: 100px; /* Stick while right column scrolls/paginates */
}

.berita-card {
  position: relative;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(1, 195, 95, 0.08);
  display: flex;
  flex-direction: column;
  width: 100%;
}

.berita-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 60px rgba(1, 195, 95, 0.15);
  border-color: rgba(1, 195, 95, 0.25);
}

/* Accent line */
.berita-card__accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 4px;
  background: linear-gradient(90deg, #01c35f, #00e676);
  transition: width 0.5s ease;
  border-radius: 0 2px 0 0;
  z-index: 2;
}

.berita-card:hover .berita-card__accent {
  width: 100%;
}

/* ============================= */
/* CARD IMAGE                    */
/* ============================= */
.berita-card__image {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.berita-card--featured .berita-card__image {
  height: 300px;
}

.berita-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.berita-card:hover .berita-card__image img {
  transform: scale(1.08);
}

.berita-card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(0,0,0,0.35), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.berita-card:hover .berita-card__overlay {
  opacity: 1;
}

/* ============================= */
/* CATEGORY BADGE                */
/* ============================= */
.berita-card__badge {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.03em;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(4px);
}

.berita-card__badge--small {
  top: 10px;
  left: 10px;
  padding: 4px 11px;
  font-size: 0.68rem;
}

.badge--kegiatan     { background: linear-gradient(135deg, #01c35f, #00e676); }
.badge--pengumuman   { background: linear-gradient(135deg, #3b82f6, #2563eb); }
.badge--prestasi     { background: linear-gradient(135deg, #f59e0b, #d97706); }
.badge--pendaftaran  { background: linear-gradient(135deg, #06b6d4, #0891b2); }

/* ============================= */
/* CARD CONTENT                  */
/* ============================= */
.berita-card__content {
  padding: 26px 26px 22px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.berita-card__content--compact {
  padding: 14px 16px 12px;
}

/* Meta */
.berita-card__meta {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.berita-card__date,
.berita-card__author {
  font-size: 0.78rem;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
}

.berita-card__date i,
.berita-card__author i {
  color: #01c35f;
}

/* Title */
.berita-card__title {
  color: #1e293b;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 10px;
  transition: color 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.berita-card__title--featured { font-size: 1.3rem; }
.berita-card__title--small    { font-size: 0.92rem; margin-bottom: 7px; }

.berita-card:hover .berita-card__title { color: #01c35f; }

/* Excerpt */
.berita-card__excerpt {
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.berita-card__excerpt--featured {
  font-size: 0.92rem;
  -webkit-line-clamp: 3;
}

.berita-card__excerpt--small {
  font-size: 0.8rem;
  -webkit-line-clamp: 2;
  margin-bottom: 8px;
  line-height: 1.6;
}

/* Featured footer row */
.featured-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  gap: 10px;
}

.read-time {
  font-size: 0.78rem;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 5px;
}

.read-time i { color: #01c35f; }

/* Link */
.berita-card__link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #01c35f;
  font-weight: 600;
  font-size: 0.88rem;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.berita-card__link--small { font-size: 0.8rem; gap: 5px; }

.berita-card__link i { transition: transform 0.3s ease; }

.berita-card__link:hover { color: #00a34e; gap: 12px; text-decoration: none; }
.berita-card__link:hover i { transform: translateX(4px); }

/* ============================= */
/* RIGHT COLUMN                  */
/* ============================= */
.berita-right-col {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* List of horizontal cards */
.berita-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;
  /* Fixed min-height to prevent layout jump during pagination */
  min-height: calc(3 * (160px + 18px));
}

.berita-card--horizontal {
  flex-direction: row;
  border-radius: 20px;
}

.berita-card__image--small {
  width: 190px;
  min-width: 190px;
  height: auto;
  min-height: 160px;
}

/* ============================= */
/* PAGINATION                    */
/* ============================= */
.pagination-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px 0 4px;
  border-top: 1px solid #f0fdf4;
}

.pagination-info {
  font-size: 0.78rem;
  color: #94a3b8;
  font-weight: 500;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 6px;
}

.page-btn {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #e2e8f0;
  background: #ffffff;
  color: #475569;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: 'Poppins', sans-serif;
}

.page-btn:hover:not(:disabled) {
  border-color: #01c35f;
  color: #01c35f;
  background: #f0fdf4;
  transform: translateY(-1px);
}

.page-btn--active {
  background: linear-gradient(135deg, #01c35f, #00e676) !important;
  color: #ffffff !important;
  border-color: transparent !important;
  box-shadow: 0 4px 15px rgba(1, 195, 95, 0.35);
}

.page-btn--nav {
  color: #64748b;
}

.page-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

/* ============================= */
/* VIEW ALL BUTTON               */
/* ============================= */
.btn-view-all {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 36px;
  background: linear-gradient(135deg, #01c35f, #00e676);
  color: #ffffff;
  border-radius: 50px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 30px rgba(1, 195, 95, 0.25);
  position: relative;
  overflow: hidden;
}

.btn-view-all::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.6s ease;
}

.btn-view-all:hover::before { left: 100%; }

.btn-view-all:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 40px rgba(1, 195, 95, 0.35);
  color: #ffffff;
  text-decoration: none;
}

.btn-view-all i {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.btn-view-all:hover i { transform: translateX(4px); }

/* ============================= */
/* RESPONSIVE - TABLET           */
/* ============================= */
@media (max-width: 991px) {
  .berita-section { padding: 70px 0; }

  .title-text { font-size: 2rem; }

  .berita-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .berita-featured {
    position: static; /* Remove sticky on tablet */
  }

  .berita-card--featured .berita-card__image { height: 260px; }

  .berita-card__image--small {
    width: 180px;
    min-width: 180px;
    min-height: 150px;
  }

  .berita-list {
    min-height: auto;
  }

  .berita-card__title--featured { font-size: 1.2rem; }
}

/* ============================= */
/* RESPONSIVE - MOBILE           */
/* ============================= */
@media (max-width: 576px) {
  .berita-section { padding: 60px 0; }

  .title-text { font-size: 1.75rem; line-height: 1.4; }

  .subtext { font-size: 0.95rem; padding: 0 15px; }

  .berita-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 5px;
  }

  .berita-card { border-radius: 20px; }

  .berita-card--featured .berita-card__image { height: 210px; }

  .berita-card__content { padding: 18px 18px 16px; }

  .berita-card__title--featured { font-size: 1.1rem; }

  /* Stack horizontal cards vertically on mobile */
  .berita-card--horizontal { flex-direction: column; }

  .berita-card__image--small {
    width: 100%;
    min-width: 100%;
    height: 170px;
    min-height: 170px;
  }

  .berita-card__content--compact { padding: 14px 16px 12px; }

  .berita-card__title--small { font-size: 0.92rem; }

  .berita-list { gap: 14px; min-height: auto; }

  .btn-view-all { padding: 12px 28px; font-size: 0.9rem; }

  .page-btn { width: 34px; height: 34px; font-size: 0.82rem; }
}
</style>
