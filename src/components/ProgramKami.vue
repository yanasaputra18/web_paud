<template>
  <div class="container">
    <section id="program">
      <h2>
        Program Unggulan <br />
        TK <span>Mandiri</span>
        Tunggal Jaya
      </h2>
      <div class="row mt-5">
        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-kognitif">
            <div class="program-icon">
              <i class="fas fa-lightbulb"></i> <i class="fas fa-book-open"></i>
            </div>
            <h5>Perkembangan Kognitif</h5>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-bahasa">
            <div class="program-icon">
              <i class="fas fa-comments"></i> <i class="fas fa-pencil-alt"></i>
            </div>
            <h5>Perkembangan Bahasa</h5>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-fisik">
            <div class="program-icon">
              <i class="fas fa-running"></i> <i class="fas fa-hands"></i>
            </div>
            <h5>Perkembangan Fisik-Motorik</h5>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-sosial">
            <div class="program-icon">
              <i class="fas fa-handshake"></i> <i class="fas fa-heart"></i>
            </div>
            <h5>Perkembangan Sosial-Emosional</h5>
          </div>
        </div>
      </div>

      <h2 class="mt-5">Program <span>Ekstrakurikuler</span></h2>
      <div class="row mt-4">
        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-inggris">
            <div class="program-icon">
              <i class="fas fa-globe"></i> <i class="fas fa-microphone-alt"></i>
            </div>
            <h5>Bahasa Inggris Dasar</h5>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-art">
            <div class="program-icon">
              <i class="fas fa-paint-brush"></i> <i class="fas fa-palette"></i>
            </div>
            <h5>Art & Craft</h5>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-cooking">
            <div class="program-icon">
              <i class="fas fa-utensils"></i> <i class="fas fa-seedling"></i>
            </div>
            <h5>Fun Cooking/Gardening</h5>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-karakter">
            <div class="program-icon">
              <i class="bi bi-chat-square-heart-fill"></i>
              <i class="fas fa-star"></i>
            </div>
            <h5>Keagamaan/Karakter</h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script></script>

<style scoped>
/* Styling Card Umum */
.program-card {
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 15px; /* Sudut melengkung */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 100%; /* Memastikan tinggi card sama */
}

/* Warna Kustom untuk Program Inti (Meniru Gambar) */
.bg-kognitif,
.bg-bahasa,
.bg-fisi,
.bg-sosial,
.bg-inggris,
.bg-art,
.bg-cooking,
.bg-karakter {
  background-color: white;
} /* Kuning Muda */

.program-card h5 {
  font-size: 20px;
  /* font-weight: bold; */
  margin-bottom: 15px;
  color: #333; /* Warna teks gelap */
}

/* Styling Ikon (Sebagai pengganti ilustrasi kompleks) */
.program-icon i {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #01c35f;
  margin: 20px 0;
}

#program {
  text-align: center;
  padding: 50px 20px;
}

#program h2 {
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 10px;
}
#program h2 span {
  color: #01c35f;
}

/* Persi Mobile strd */
@media (max-width: 576px) {
  #program {
    text-align: center;
    padding: 10px 20px !important;
  }

  #program h2 {
    font-size: 24px;
    line-height: 1.4;
  }
  #program h2 span {
    color: #01c35f;
  }
  .program-icon i {
    font-size: 30px;
    margin-bottom: 10px;
    color: #01c35f;
    margin-bottom: 20px;
  }
  .program-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
  }
  .program-card h5 {
    color: #333; /* Warna teks gelap */
    font-size: 12px;
  }
}
/* Persi Mobile end */
</style>
