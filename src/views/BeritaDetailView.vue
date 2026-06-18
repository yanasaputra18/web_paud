<template>
  <div id="berita-detail-page">
    <!-- Loading State -->
    <div v-if="loading" class="detail-loading">
      <div class="loading-spinner">
        <div class="spinner-ring"></div>
        <p>Memuat artikel...</p>
      </div>
    </div>

    <!-- Not Found -->
    <div v-else-if="!berita" class="detail-notfound">
      <div class="container text-center">
        <div class="notfound-icon">
          <i class="bi bi-newspaper"></i>
        </div>
        <h2>Berita Tidak Ditemukan</h2>
        <p>Maaf, artikel yang Anda cari tidak tersedia atau telah dihapus.</p>
        <router-link to="/" class="btn-back-home">
          <i class="bi bi-arrow-left"></i>
          Kembali ke Beranda
        </router-link>
      </div>
    </div>

    <!-- Article Content -->
    <template v-else>
      <!-- Hero Banner -->
      <div class="detail-hero">
        <div class="detail-hero__image">
          <img :src="berita.image" :alt="berita.title" />
          <div class="detail-hero__overlay"></div>
        </div>
        <div class="detail-hero__content container">
          <div class="detail-hero__inner" data-aos="fade-up">
            <!-- Breadcrumb -->
            <nav class="detail-breadcrumb" aria-label="breadcrumb">
              <router-link to="/" class="breadcrumb-link">
                <i class="bi bi-house-fill"></i> Beranda
              </router-link>
              <span class="breadcrumb-sep"><i class="bi bi-chevron-right"></i></span>
              <span class="breadcrumb-link breadcrumb-link--current">Berita</span>
            </nav>

            <!-- Badge -->
            <span class="detail-badge" :class="berita.badgeClass">
              {{ berita.category }}
            </span>

            <!-- Title -->
            <h1 class="detail-title">{{ berita.title }}</h1>

            <!-- Meta -->
            <div class="detail-meta">
              <span class="detail-meta__item">
                <i class="bi bi-calendar3"></i>
                {{ berita.date }}
              </span>
              <span class="detail-meta__sep">•</span>
              <span class="detail-meta__item">
                <i class="bi bi-person-circle"></i>
                {{ berita.author }}
              </span>
              <span class="detail-meta__sep">•</span>
              <span class="detail-meta__item">
                <i class="bi bi-clock"></i>
                {{ berita.readTime }} baca
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="detail-body">
        <div class="container">
          <div class="detail-layout">

            <!-- Article Body -->
            <article class="detail-article" data-aos="fade-up" data-aos-delay="100">
              <!-- Excerpt Lead -->
              <p class="detail-excerpt">{{ berita.excerpt }}</p>

              <!-- Article Content -->
              <div class="detail-content" v-html="berita.content"></div>

              <!-- Tags -->
              <div class="detail-tags">
                <span class="tags-label">
                  <i class="bi bi-tags-fill"></i> Tags:
                </span>
                <span
                  v-for="(tag, i) in berita.tags"
                  :key="i"
                  class="detail-tag"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Share Section -->
              <div class="detail-share">
                <span class="share-label">Bagikan Artikel:</span>
                <div class="share-buttons">
                  <a
                    :href="`https://wa.me/?text=${encodeURIComponent(berita.title + ' - ' + currentUrl)}`"
                    target="_blank"
                    class="share-btn share-btn--wa"
                    title="Bagikan ke WhatsApp"
                  >
                    <i class="bi bi-whatsapp"></i>
                    WhatsApp
                  </a>
                  <a
                    :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`"
                    target="_blank"
                    class="share-btn share-btn--fb"
                    title="Bagikan ke Facebook"
                  >
                    <i class="bi bi-facebook"></i>
                    Facebook
                  </a>
                  <button
                    class="share-btn share-btn--copy"
                    @click="copyLink"
                    title="Salin tautan"
                  >
                    <i :class="copied ? 'bi bi-check-circle-fill' : 'bi bi-link-45deg'"></i>
                    {{ copied ? 'Tersalin!' : 'Salin Link' }}
                  </button>
                </div>
              </div>

              <!-- Back Button -->
              <div class="detail-back">
                <router-link to="/#berita-section" class="btn-back">
                  <i class="bi bi-arrow-left"></i>
                  Kembali ke Daftar Berita
                </router-link>
              </div>
            </article>

            <!-- Sidebar -->
            <aside class="detail-sidebar">
              <!-- Sidebar Author Card -->
              <div class="sidebar-card" data-aos="fade-left" data-aos-delay="150">
                <h5 class="sidebar-card__title">
                  <i class="bi bi-person-badge-fill"></i>
                  Tentang Penulis
                </h5>
                <div class="author-info">
                  <div class="author-avatar">
                    <i class="bi bi-person-circle"></i>
                  </div>
                  <div>
                    <p class="author-name">{{ berita.author }}</p>
                    <p class="author-role">{{ berita.authorRole }}</p>
                    <p class="author-school">TK Mandiri Tunggal Jaya</p>
                  </div>
                </div>
              </div>

              <!-- Article Info Card -->
              <div class="sidebar-card" data-aos="fade-left" data-aos-delay="200">
                <h5 class="sidebar-card__title">
                  <i class="bi bi-info-circle-fill"></i>
                  Info Artikel
                </h5>
                <ul class="info-list">
                  <li>
                    <i class="bi bi-calendar3"></i>
                    <span>{{ berita.date }}</span>
                  </li>
                  <li>
                    <i class="bi bi-folder2-open"></i>
                    <span class="category-pill" :class="berita.badgeClass">{{ berita.category }}</span>
                  </li>
                  <li>
                    <i class="bi bi-clock-history"></i>
                    <span>{{ berita.readTime }} membaca</span>
                  </li>
                </ul>
              </div>

              <!-- Berita Lainnya -->
              <div class="sidebar-card" data-aos="fade-left" data-aos-delay="250">
                <h5 class="sidebar-card__title">
                  <i class="bi bi-newspaper"></i>
                  Berita Lainnya
                </h5>
                <div class="related-list">
                  <router-link
                    v-for="related in relatedBerita"
                    :key="related.id"
                    :to="`/berita/${related.id}`"
                    class="related-item"
                  >
                    <div class="related-item__image">
                      <img :src="related.thumbnail" :alt="related.title" />
                    </div>
                    <div class="related-item__content">
                      <span class="related-item__badge" :class="related.badgeClass">
                        {{ related.category }}
                      </span>
                      <p class="related-item__title">{{ related.title }}</p>
                      <span class="related-item__date">
                        <i class="bi bi-calendar3"></i>
                        {{ related.date }}
                      </span>
                    </div>
                  </router-link>
                </div>
              </div>

              <!-- Contact CTA -->
              <div class="sidebar-card sidebar-card--cta" data-aos="fade-left" data-aos-delay="300">
                <div class="cta-icon">
                  <i class="bi bi-chat-dots-fill"></i>
                </div>
                <h5>Ada Pertanyaan?</h5>
                <p>Hubungi kami langsung melalui WhatsApp untuk informasi lebih lanjut.</p>
                <a
                  href="https://wa.me/6281349972893?text=Halo%20Bu%20Guru%2C%20saya%20ingin%20bertanya%20tentang%20TK%20Mandiri"
                  target="_blank"
                  class="btn-whatsapp"
                >
                  <i class="bi bi-whatsapp"></i>
                  Chat WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </template>

    <!-- WhatsApp Float -->
    <a id="wa-float-detail" href="https://wa.me/6281349972893" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
  </div>
</template>

<script>
import beritaData from '@/data/beritaData.js';

export default {
  name: 'BeritaDetailView',
  data() {
    return {
      berita: null,
      loading: true,
      copied: false,
      currentUrl: '',
    };
  },
  computed: {
    relatedBerita() {
      if (!this.berita) return [];
      return beritaData
        .filter(b => b.id !== this.berita.id)
        .slice(0, 3);
    },
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler(newId) {
        this.loadBerita(newId);
      },
    },
  },
  mounted() {
    this.currentUrl = window.location.href;
    // Re-init AOS after content loads
    this.$nextTick(() => {
      if (window.AOS) window.AOS.refresh();
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  methods: {
    loadBerita(id) {
      this.loading = true;
      // Simulate async fetch
      setTimeout(() => {
        const found = beritaData.find(b => b.id === parseInt(id));
        this.berita = found || null;
        this.loading = false;
        this.currentUrl = window.location.href;
        // Scroll to top when article changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Refresh AOS
        this.$nextTick(() => {
          if (window.AOS) window.AOS.refresh();
        });
      }, 300);
    },
    copyLink() {
      navigator.clipboard.writeText(window.location.href).then(() => {
        this.copied = true;
        setTimeout(() => { this.copied = false; }, 2500);
      });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap');

/* ============================= */
/* PAGE BASE                     */
/* ============================= */
#berita-detail-page {
  font-family: 'Poppins', sans-serif;
  background: #f8fafc;
  min-height: 100vh;
}

/* ============================= */
/* LOADING STATE                 */
/* ============================= */
.detail-loading {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  text-align: center;
  color: #64748b;
}

.spinner-ring {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(1, 195, 95, 0.15);
  border-top-color: #01c35f;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ============================= */
/* NOT FOUND                     */
/* ============================= */
.detail-notfound {
  padding: 120px 0 80px;
  text-align: center;
}

.notfound-icon {
  font-size: 5rem;
  color: #cbd5e1;
  margin-bottom: 24px;
}

.detail-notfound h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
}

.detail-notfound p {
  color: #64748b;
  margin-bottom: 32px;
}

.btn-back-home {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #01c35f, #00e676);
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(1, 195, 95, 0.3);
}

.btn-back-home:hover {
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(1, 195, 95, 0.4);
  text-decoration: none;
}

/* ============================= */
/* HERO BANNER                   */
/* ============================= */
.detail-hero {
  position: relative;
  height: 500px;
  margin-top: 80px; /* navbar height */
  overflow: hidden;
}

.detail-hero__image {
  position: absolute;
  inset: 0;
}

.detail-hero__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.5) 40%,
    rgba(0, 0, 0, 0.2) 100%
  );
}

.detail-hero__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.detail-hero__inner {
  padding-bottom: 48px;
  max-width: 800px;
}

/* Breadcrumb */
.detail-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 4px;
}

.breadcrumb-link:hover {
  color: #00e676;
  text-decoration: none;
}

.breadcrumb-link--current {
  color: rgba(255, 255, 255, 0.6);
  cursor: default;
}

.breadcrumb-sep {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
}

/* Category Badge */
.detail-badge {
  display: inline-block;
  padding: 6px 18px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.04em;
  margin-bottom: 14px;
  text-transform: uppercase;
}

/* Badge color variants */
.badge--kegiatan { background: linear-gradient(135deg, #01c35f, #00e676); }
.badge--pengumuman { background: linear-gradient(135deg, #3b82f6, #2563eb); }
.badge--prestasi { background: linear-gradient(135deg, #f59e0b, #d97706); }
.badge--pendaftaran { background: linear-gradient(135deg, #06b6d4, #0891b2); }

/* Hero Title */
.detail-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
  margin-bottom: 16px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

/* Meta */
.detail-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85rem;
}

.detail-meta__item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.detail-meta__item i {
  color: #00e676;
  font-size: 0.9rem;
}

.detail-meta__sep {
  color: rgba(255, 255, 255, 0.4);
}

/* ============================= */
/* BODY / LAYOUT                 */
/* ============================= */
.detail-body {
  padding: 60px 0 80px;
}

.detail-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;
  align-items: start;
}

/* ============================= */
/* ARTICLE                       */
/* ============================= */
.detail-article {
  background: #ffffff;
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(1, 195, 95, 0.08);
}

/* Excerpt lead paragraph */
.detail-excerpt {
  font-size: 1.15rem;
  color: #475569;
  line-height: 1.8;
  font-weight: 500;
  padding: 24px;
  background: linear-gradient(135deg, #f0fdf4, #f8fafc);
  border-left: 4px solid #01c35f;
  border-radius: 0 16px 16px 0;
  margin-bottom: 36px;
}

/* Article rich content */
.detail-content {
  font-family: 'Poppins', sans-serif;
  color: #334155;
  line-height: 1.9;
  font-size: 1rem;
}

/* Deep selectors for v-html content */
.detail-content :deep(h3) {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1e293b;
  margin: 36px 0 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0fdf4;
  position: relative;
}

.detail-content :deep(h3)::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, #01c35f, #00e676);
}

.detail-content :deep(p) {
  margin-bottom: 20px;
  color: #475569;
}

.detail-content :deep(ul) {
  padding-left: 20px;
  margin-bottom: 24px;
}

.detail-content :deep(li) {
  margin-bottom: 10px;
  color: #475569;
  position: relative;
}

.detail-content :deep(strong) {
  color: #1e293b;
  font-weight: 600;
}

/* Tags */
.detail-tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid #f1f5f9;
}

.tags-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 6px;
}

.tags-label i { color: #01c35f; }

.detail-tag {
  padding: 6px 16px;
  background: #f0fdf4;
  color: #059669;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(1, 195, 95, 0.2);
  transition: all 0.2s ease;
  cursor: default;
}

.detail-tag:hover {
  background: #01c35f;
  color: #fff;
  border-color: #01c35f;
}

/* Share Section */
.detail-share {
  margin-top: 36px;
  padding: 28px;
  background: #f8fafc;
  border-radius: 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.share-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #475569;
  white-space: nowrap;
}

.share-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.share-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 20px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
}

.share-btn--wa {
  background: #25d366;
  color: white;
}

.share-btn--wa:hover {
  background: #20b858;
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
}

.share-btn--fb {
  background: #1877f2;
  color: white;
}

.share-btn--fb:hover {
  background: #1464d8;
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
}

.share-btn--copy {
  background: #f1f5f9;
  color: #475569;
}

.share-btn--copy:hover {
  background: #e2e8f0;
  transform: translateY(-1px);
}

/* Back Button */
.detail-back {
  margin-top: 36px;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 28px;
  border: 2px solid #01c35f;
  color: #01c35f;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: #01c35f;
  color: white;
  text-decoration: none;
  transform: translateX(-3px);
}

.btn-back i {
  transition: transform 0.3s ease;
}

.btn-back:hover i {
  transform: translateX(-3px);
}

/* ============================= */
/* SIDEBAR                       */
/* ============================= */
.detail-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: sticky;
  top: 100px;
}

.sidebar-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(1, 195, 95, 0.08);
}

.sidebar-card__title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f0fdf4;
}

.sidebar-card__title i { color: #01c35f; }

/* Author Card */
.author-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.author-avatar {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #01c35f, #00e676);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  flex-shrink: 0;
}

.author-name {
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 2px;
  font-size: 0.95rem;
}

.author-role {
  color: #01c35f;
  font-size: 0.82rem;
  font-weight: 600;
  margin: 0 0 2px;
}

.author-school {
  color: #94a3b8;
  font-size: 0.78rem;
  margin: 0;
}

/* Info List */
.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.info-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.88rem;
  color: #475569;
}

.info-list li i {
  color: #01c35f;
  font-size: 1rem;
  width: 18px;
}

.category-pill {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #fff;
}

/* Related Articles */
.related-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.related-item {
  display: flex;
  gap: 12px;
  text-decoration: none;
  padding: 10px;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.related-item:hover {
  background: #f0fdf4;
  border-color: rgba(1, 195, 95, 0.2);
  text-decoration: none;
  transform: translateX(3px);
}

.related-item__image {
  width: 72px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
}

.related-item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.related-item:hover .related-item__image img {
  transform: scale(1.08);
}

.related-item__content {
  flex: 1;
  min-width: 0;
}

.related-item__badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 50px;
  font-size: 0.68rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
}

.related-item__title {
  font-size: 0.82rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.4;
  margin: 0 0 5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-item:hover .related-item__title {
  color: #01c35f;
}

.related-item__date {
  font-size: 0.72rem;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 4px;
}

.related-item__date i { color: #01c35f; font-size: 0.7rem; }

/* CTA Card */
.sidebar-card--cta {
  background: linear-gradient(135deg, #01c35f, #00a34e);
  color: white;
  text-align: center;
  border: none;
}

.cta-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.9);
}

.sidebar-card--cta h5 {
  color: white;
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.sidebar-card--cta p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.88rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: white;
  color: #01c35f;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.btn-whatsapp:hover {
  color: #01c35f;
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* WhatsApp Float */
#wa-float-detail {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 56px;
  height: 56px;
  background: #25d366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  font-size: 24px;
  text-decoration: none;
  transition: all 0.3s ease;
}

#wa-float-detail:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
}

/* ============================= */
/* RESPONSIVE - TABLET           */
/* ============================= */
@media (max-width: 1024px) {
  .detail-layout {
    grid-template-columns: 1fr 300px;
    gap: 30px;
  }

  .detail-hero {
    height: 420px;
  }

  .detail-title {
    font-size: 1.9rem;
  }

  .detail-article {
    padding: 36px;
  }
}

@media (max-width: 991px) {
  .detail-layout {
    grid-template-columns: 1fr;
  }

  .detail-sidebar {
    position: static;
  }

  .detail-hero {
    height: 380px;
  }

  .detail-title {
    font-size: 1.7rem;
  }
}

/* ============================= */
/* RESPONSIVE - MOBILE           */
/* ============================= */
@media (max-width: 576px) {
  .detail-hero {
    height: 320px;
  }

  .detail-hero__inner {
    padding-bottom: 32px;
  }

  .detail-title {
    font-size: 1.35rem;
  }

  .detail-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .detail-meta__sep {
    display: none;
  }

  .detail-body {
    padding: 32px 0 60px;
  }

  .detail-article {
    padding: 24px 20px;
    border-radius: 16px;
  }

  .detail-excerpt {
    font-size: 1rem;
    padding: 18px;
  }

  .detail-share {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .sidebar-card {
    padding: 20px;
  }
}
</style>
