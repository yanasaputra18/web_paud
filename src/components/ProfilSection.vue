<template>
  <section id="profil-section">
    <div class="profil-header">
      <h2 data-aos="fade-up">
        Profil TK <span>Mandiri</span> <br />
        Tunggal Jaya
      </h2>
      <div class="profil-divider" data-aos="fade-up" data-aos-delay="100"></div>
    </div>
    
    <div class="container profil-container">
      <div class="row align-items-center g-5">
        <!-- Kolom Gambar -->
        <div class="col-lg-5 col-md-6" data-aos="fade-right" data-aos-duration="800">
          <div class="kepsek-wrapper">
            <div class="image-decoration"></div>
            <img
              :src="kepalaSekolahImage"
              alt="Kepala Sekolah TK Mandiri Tunggal Jaya"
              class="img-fluid kepsek-img"
            />
          </div>
        </div>

        <!-- Kolom Teks -->
        <div class="col-lg-7 col-md-6" data-aos="fade-left" data-aos-duration="800">
          <div class="profil-content">
            <div class="sambutan-badge" data-aos="fade-down" data-aos-delay="200">
              <i class="bi bi-chat-quote"></i> Sambutan Kepala Sekolah
            </div>
            
            <h3 class="sambutan-title" data-aos="fade-up" data-aos-delay="300">
              TK Mandiri Tunggal Jaya
            </h3>
            
            <div class="profil-text">
              <p class="lead-text" data-aos="fade-up" data-aos-delay="400">
                Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
                berprestasi di segala bidang yang dapat bersaing di dunia
                internasional.
              </p>
              <p class="secondary-text" data-aos="fade-up" data-aos-delay="500">
                Sekolah juga tempat anak-anak mendapatkan dukungan untuk
                melengkapi pembelajarannya di sekolah dengan pendekatan yang menyenangkan
                dan mengembangkan kreativitas sejak dini.
              </p>
            </div>
            
            <router-link
              :to="{ path: '/about', hash: '#about' }"
              class="btn-selanjutnya"
              data-aos="fade-up" 
              data-aos-delay="600"
            >
              <span>Baca Selanjutnya</span>
              <i class="bi bi-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProfilSection',
  data() {
    return {
      kepalaSekolahImage: require('@/assets/Ibu_Kepsek.png')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

#profil-section {
  margin-top: 80px;
  padding: 80px 0;
  background: linear-gradient(180deg, #f8fffe 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}

#profil-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #01c35f, transparent);
}

.profil-header {
  text-align: center;
  margin-bottom: 60px;
}

.profil-header h2 {
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #222;
  line-height: 1.3;
}

.profil-header h2 span {
  color: #01c35f;
  position: relative;
}

.profil-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #01c35f, #00e676);
  margin: 0 auto;
  border-radius: 2px;
}

.profil-container {
  max-width: 1200px;
  padding: 0 20px;
}

/* Kolom Gambar */
.kepsek-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
}

.image-decoration {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(1, 195, 95, 0.1), rgba(0, 230, 118, 0.15));
  border-radius: 20px;
  z-index: -1;
  transition: all 0.4s ease;
}

.kepsek-wrapper:hover .image-decoration {
  transform: translate(8px, 8px);
}

.kepsek-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
}

.kepsek-wrapper:hover .kepsek-img {
  transform: translateY(-5px);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
}

/* Kolom Teks */
.profil-content {
  padding: 20px;
}

.sambutan-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #01c35f, #00e676);
  color: white;
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(1, 195, 95, 0.3);
}

.sambutan-badge i {
  font-size: 16px;
}

.sambutan-title {
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 25px;
  line-height: 1.3;
}

.profil-text {
  margin-bottom: 30px;
}

.lead-text {
  font-size: 18px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 15px;
  font-weight: 500;
}

.secondary-text {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 0;
}

.btn-selanjutnya {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #01c35f, #00e676);
  color: white;
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 8px 25px rgba(1, 195, 95, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-selanjutnya::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transition: left 0.5s ease;
}

.btn-selanjutnya:hover::before {
  left: 100%;
}

.btn-selanjutnya:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(1, 195, 95, 0.4);
  color: white;
}

.btn-selanjutnya i {
  font-size: 18px;
  transition: transform 0.3s ease;
}

.btn-selanjutnya:hover i {
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 576px) {
  #profil-section {
    padding: 60px 0;
    margin-top: 40px;
  }

  .profil-header h2 {
    font-size: 26px;
    margin-top: 0;
    line-height: 1.4;
  }

  .profil-container {
    padding: 0 15px;
  }

  .kepsek-wrapper {
    max-width: 320px;
    margin-bottom: 30px;
  }

  .image-decoration {
    top: -10px;
    right: -10px;
  }

  .kepsek-img {
    border-radius: 15px;
  }

  .profil-content {
    padding: 0;
    text-align: center;
  }

  .sambutan-badge {
    font-size: 12px;
    padding: 6px 16px;
    margin: 0 auto 15px;
  }

  .sambutan-title {
    font-size: 22px;
    margin-bottom: 20px;
  }

  .lead-text {
    font-size: 15px;
    line-height: 1.7;
    text-align: justify;
  }

  .secondary-text {
    font-size: 14px;
    line-height: 1.7;
    text-align: justify;
  }

  .btn-selanjutnya {
    padding: 12px 28px;
    font-size: 14px;
    width: 100%;
    justify-content: center;
    max-width: 280px;
  }
}

/* Tablet */
@media (min-width: 577px) and (max-width: 991px) {
  #profil-section {
    padding: 70px 0;
  }

  .profil-header h2 {
    font-size: 2.2rem;
  }

  .kepsek-wrapper {
    max-width: 380px;
    margin: 0 auto 40px;
  }

  .profil-content {
    text-align: center;
  }

  .sambutan-badge {
    margin: 0 auto 20px;
  }

  .sambutan-title {
    font-size: 1.75rem;
  }

  .lead-text {
    font-size: 17px;
  }

  .secondary-text {
    font-size: 15px;
  }

  .btn-selanjutnya {
    margin: 0 auto;
  }
}
</style>
