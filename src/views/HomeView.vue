<template>
  <div class="container">
    <MainHerro />
    <section class="section-kenapa">
      <h2>
        Kenapa Harus <span>TK Mandiri</span> <br />
        Tunggal Jaya
      </h2>
      <p class="subtext">
        Alasan kenapa harus memilih untuk bergabung dengan TK Mandiri Tunggal
        Jaya.
      </p>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-3 col-6">
            <div class="card-feature">
              <i class="bi bi-laptop"></i>
              <h5>Fasilitas Lengkap</h5>
              <p>Penunjang belajar dengan kualitas terbaik</p>
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="card-feature">
              <i class="bi bi-building"></i>
              <h5>Lingkungan Nyaman</h5>
              <p>Berada di lingkungan yang nyaman dan asri</p>
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="card-feature">
              <i class="bi bi-people"></i>
              <h5>Pengajar Kompeten</h5>
              <p>Guru terbaik dengan pengalaman</p>
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="card-feature">
              <i class="bi bi-briefcase"></i>
              <h5>Kerja Sama Luas</h5>
              <p>
                Kita sudah terjamin, Jangan ragu masukan sikecil ke Tk Mandiri
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="tentangKami">
      <div class="profil">
        <h2>
          Profil TK <span>Mandiri</span> <br />
          Tunggal Jaya
        </h2>
      </div>
      <div class="container py-5">
        <div class="row align-items-center g-4">
          <!-- Kolom Gambar -->
          <div class="col-md-5 text-center">
            <img
              src="../assets/KepalaSekolah.png"
              alt="Kepala Sekolah"
              class="img-fluid rounded-4 shadow-sm"
            />
          </div>

          <!-- Kolom Teks -->
          <div class="col-md-6 text_kepala">
            <h4 class="fw-bold mb-3 sambutan">
              Sambutan Kepala Sekolah TK Mandiri Tunggal Jaya
            </h4>
            <p class="text-secondary mb-2">
              Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
              berprestasi di segala bidang yang dapat bersaing di dunia
              internasional.
            </p>
            <p class="text-secondary mb-4">
              Sekolah juga tempat anak-anak mendapatkan dukungan untuk
              melengkapi pembelajarannya di sekolah.
            </p>
            <a href="#" class="btn btn-primary rounded-pill px-4 shadow-sm">
              Baca Selanjutnya <i class="bi bi-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Icon watshap -->
    <a id="wa-float" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
  </div>
</template>
<script>
export default {
  name: "IconWatshap",
  mounted() {
    const el = document.getElementById("wa-float");
    if (el) {
      const phone = "6281511408837";
      const msg = "Halo ibu, saya mau bertanya. Tentang TK Mandiri";
      el.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    } else {
      console.warn("Elemen #wa-float tidak ditemukan");
    }
  },
};
</script>

<style scoped>
body {
  font-family: "Poppins", sans-serif;
  background-color: #fff;
  color: #222;
}
/* Css watshap star */
#wa-float {
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
}
/* Css watshap end */

.section-kenapa {
  margin-top: 50px !important;
  text-align: center;
  padding: 80px 20px;
}

.section-kenapa h2 {
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 10px;
}

.section-kenapa h2 span {
  color: #2a4bff; /* biru seperti contoh */
}

.section-kenapa p.subtext {
  color: #777;
  margin-bottom: 50px;
  font-size: 15px;
}

.card-feature {
  background: #fff;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 30px 20px;
  height: 230px;
}
.card-feature p {
  font-size: 15px !important;
}

.card-feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.card-feature i {
  font-size: 40px;
  color: #2a4bff;
  margin-bottom: 15px;
}

.card-feature h5 {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
}

.card-feature p {
  color: #777;
  font-size: 14px;
  margin: 0;
}
/* Tentang Kami Star */
#tentangKami {
  margin-top: 80px !important;
}
.profil h2 {
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: center;
}
.profil h2 span {
  color: #2a4bff; /* biru seperti contoh */
}
.text-secondary {
  font-size: 20px !important;
}
.sambutan {
  font-size: 30px !important;
}
.text_kepala {
  margin: 0 20px !important;
}
/* Tentang Kami End */
/* Ukuran Mobile */
@media (max-width: 576px) {
  .section-kenapa {
    padding: 0 !important;
  }
  .section-kenapa h2 {
    font-size: 24px;
    line-height: 1.4;
  }
  .profil h2 {
    font-size: 24px;
    line-height: 1.4;
  }

  .section-kenapa p.subtext {
    font-size: 14px;
    margin-bottom: 30px;
  }

  .card-feature {
    padding: 25px 15px;
    margin-bottom: 20px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.07);
    /* width: 150px;
    background-color: red; */
  }
  .card-feature p {
    font-size: 12px !important;
  }

  .card-feature i {
    font-size: 35px;
    margin-bottom: 10px;
  }

  .card-feature h5 {
    font-size: 16px;
  }

  .card-feature p {
    font-size: 13px;
  }
  .row {
    padding: 0 !important;
  }
  /* Mobile tentang kami stard */
  .text_kepala {
    margin: 0 !important;
  }
  .container h4 {
    text-align: center;
  }

  .container p {
    text-align: justify;
  }

  .container a {
    display: block;
    text-align: center;
    margin: 0 auto;
  }
  .text-secondary {
    font-size: 15px !important;
  }
  .sambutan {
    margin-top: 20px;
    font-size: 20px !important;
  }
  /* Mobile tentang kami end */
}
</style>
