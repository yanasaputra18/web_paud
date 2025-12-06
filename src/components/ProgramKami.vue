<template>
  <div class="container">
    <section id="program">
      <h2 class="title">
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
            <h5>Melatih berpikir, mengenal bentuk, warna, dan angka.</h5>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-bahasa">
            <div class="program-icon">
              <i class="fas fa-comments"></i> <i class="fas fa-pencil-alt"></i>
            </div>
            <h5>Belajar bercerita, menyimak, berbicara, dan kosakata baru.</h5>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-fisik">
            <div class="program-icon">
              <i class="fas fa-running"></i> <i class="fas fa-hands"></i>
            </div>
            <h5>
              Melatih gerak tubuh, koordinasi, keseimbangan, dan kekuatan.
            </h5>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-sosial">
            <div class="program-icon">
              <i class="fas fa-handshake"></i> <i class="fas fa-heart"></i>
            </div>
            <h5>Belajar berbagi, antri, bekerja sama, dan mengelola emosi.</h5>
          </div>
        </div>
      </div>

      <h2 class="program1">Program <span>Ekstrakurikuler</span></h2>
      <div class="row mt-4">
        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-inggris">
            <div class="program-icon">
              <i class="fas fa-globe"></i> <i class="fas fa-microphone-alt"></i>
            </div>
            <h5>Pengenalan kata sederhana melalui lagu dan permainan.</h5>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-art">
            <div class="program-icon">
              <i class="fas fa-paint-brush"></i> <i class="fas fa-palette"></i>
            </div>
            <h5>
              Mewarnai, menggambar, melipat kertas, dan membuat karya lucu.
            </h5>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-cooking">
            <div class="program-icon">
              <i class="fas fa-utensils"></i> <i class="fas fa-seedling"></i>
            </div>
            <h5>Memasak sederhana serta mengenal tanaman dan alam sekitar.</h5>
          </div>
        </div>

        <div class="col-6 col-md-6 col-lg-3">
          <div class="program-card bg-karakter">
            <div class="program-icon">
              <i class="bi bi-chat-square-heart-fill"></i>
              <i class="fas fa-star"></i>
            </div>
            <h5>Doa harian, sopan santun, dan pembiasaan perilaku baik.</h5>
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
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 30px;
  border-radius: 15px; /* Sudut melengkung */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%; /* Memastikan tinggi card sama */
}
.program1 {
  margin: 50px 0;
}

/* Warna Kustom untuk Program Inti (Meniru Gambar) */
.bg-kognitif,
.bg-bahasa,
.bg-fisi,
.bg-sosial,
.bg-inggris,
.bg-art,
.bg-cooking,
.bg-fisik,
.bg-karakter {
  background-color: #01c35f;
} /* Kuning Muda */

.program-card h5 {
  font-size: 20px;
  /* font-weight: bold; */
  color: #ffff; /* Warna teks gelap */
}

/* Styling Ikon (Sebagai pengganti ilustrasi kompleks) */
.program-icon i {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #ffff;
  margin: 20px 0;
}

#program {
  padding: 50px 20px;
  margin: 40px 0;
}

#program h2 {
  /* text-align: center; */
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 10px;
}
#program h2 span {
  color: #01c35f;
}
#program .title {
  text-align: center;
}

/* Persi Mobile strd */
@media (max-width: 576px) {
  #program {
    /* text-align: center; */
    padding: 10px 20px !important;
  }
  #program .title {
    text-align: center;
  }

  #program h2 {
    font-size: 24px;
    line-height: 1.4;
  }
  #program h2 span {
    color: #01c35f;
  }
  .program-icon i {
    font-size: 20px;
    margin-bottom: 10px;
    color: #ffff;
    margin-bottom: 20px;
  }
  .program-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    margin-top: 10px;
    height: 150px;
  }
  .program-card h5 {
    color: #ffff; /* Warna teks gelap */
    font-size: 12px;
  }
}
/* Persi Mobile end */
</style>
