<template>
  <section class="footer-section">
    <div class="container">
      <div class="main">
        <!-- Text -->
        <div class="text">
          <h3>TK Mandiri</h3>
          <p>
            Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
            berprestasi di segala bidang yang dapat bersaing di dunia
            internasional.
          </p>
        </div>

        <!-- Maps -->
        <div class="alamat">
          <h4>Lokasi Sekolah</h4>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4465715968918!2d105.53366021106395!3d-6.715230765628616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e43a5beec04377f%3A0xbe603fbcb7df9005!2sTK%20MANDIRI!5e0!3m2!1sid!2sid!4v1765698561990!5m2!1sid!2sid"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="copyright">© 2025 TK Mandiri. All Rights Reserved.</div>
    </div>
  </section>
</template>
<style scoped>
.footer-section {
  background: #01c35f;
  color: #ffffff;
}

.main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  padding: 60px 20px;
}

/* TEXT */
.text {
  max-width: 420px;
}

.text h3 {
  font-size: 26px;
  margin-bottom: 12px;
}

.text p {
  font-size: 15px;
  line-height: 1.7;
  opacity: 0.95;
}

/* MAP */
.alamat h4 {
  margin-bottom: 12px;
  font-size: 18px;
}

.map {
  width: 420px;
  height: 260px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  background: #fff;
}

.map iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* COPYRIGHT */
.copyright {
  text-align: center;
  padding: 15px 0;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.15);
  margin-top: 20px;
}

/* =========================
   RESPONSIVE (MOBILE)
========================= */
@media (max-width: 768px) {
  .main {
    flex-direction: column;
    text-align: center;
    padding: 40px 15px;
  }

  .text {
    max-width: 100%;
  }

  .map {
    width: 100%;
    height: 230px;
  }

  .alamat h4 {
    margin-top: 20px;
  }
  .main .alamat {
    margin: auto;
  }
}
</style>
