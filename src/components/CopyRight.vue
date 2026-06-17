<template>
  <section class="footer-section">
    <div class="container">
      <div class="footer-content">
        <!-- Column 1: About -->
        <div class="footer-col about-col" data-aos="fade-up" data-aos-delay="100">
          <div class="footer-logo">
            <h3>TK <span>Mandiri</span></h3>
            <div class="logo-accent"></div>
          </div>
          <p class="footer-desc">
            Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
            berprestasi di segala bidang yang dapat bersaing di dunia
            internasional.
          </p>
          <div class="social-links">
            <a href="#" class="social-icon" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="social-icon" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="social-icon" aria-label="TikTok">
              <i class="bi bi-tiktok"></i>
            </a>
            <a href="#" class="social-icon" aria-label="WhatsApp">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="footer-col links-col" data-aos="fade-up" data-aos-delay="200">
          <h4 class="footer-title">Link Cepat</h4>
          <ul class="footer-links">
            <li><a href="#home"><i class="bi bi-chevron-right"></i> Beranda</a></li>
            <li><a href="#tentang"><i class="bi bi-chevron-right"></i> Tentang Kami</a></li>
            <li><a href="#program"><i class="bi bi-chevron-right"></i> Program</a></li>
            <li><a href="#staff"><i class="bi bi-chevron-right"></i> Guru & Staff</a></li>
            <li><a href="#gallery"><i class="bi bi-chevron-right"></i> Gallery</a></li>
          </ul>
        </div>

        <!-- Column 3: Contact Info -->
        <div class="footer-col contact-col" data-aos="fade-up" data-aos-delay="300">
          <h4 class="footer-title">Hubungi Kami</h4>
          <ul class="contact-info">
            <li>
              <i class="bi bi-geo-alt-fill"></i>
              <span>Jl. Tunggal Jaya, Kec. Rangkasbitung, Lebak, Banten</span>
            </li>
            <li>
              <i class="bi bi-telephone-fill"></i>
              <span>+62 813-4997-2893</span>
            </li>
            <li>
              <i class="bi bi-envelope-fill"></i>
              <span>info@tkmandiri.sch.id</span>
            </li>
            <li>
              <i class="bi bi-clock-fill"></i>
              <span>Senin - Jumat: 07:00 - 11:00</span>
            </li>
          </ul>
        </div>

        <!-- Column 4: Map -->
        <div class="footer-col map-col" data-aos="fade-up" data-aos-delay="400">
          <h4 class="footer-title">Lokasi Sekolah</h4>
          <div class="map-container">
            <div class="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4465715968918!2d105.53366021106395!3d-6.715230765628616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e43a5beec04377f%3A0xbe603fbcb7df9005!2sTK%20MANDIRI!5e0!3m2!1sid!2sid!4v1765698561990!5m2!1sid!2sid"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a 
              href="https://www.google.com/maps/place/TK+MANDIRI/@-6.7152308,105.5336602,17z/data=!3m1!4b1!4m6!3m5!1s0x2e43a5beec04377f:0xbe603fbcb7df9005!8m2!3d-6.7152308!4d105.5362351!16s%2Fg%2F11h0n76rn3?entry=ttu" 
              target="_blank"
              rel="noopener noreferrer"
              class="maps-button"
            >
              <i class="bi bi-geo-alt-fill"></i>
              <span>Buka di Google Maps</span>
              <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="footer-bottom">
        <div class="divider"></div>
        <div class="bottom-content">
          <p class="copyright">
            © 2025 <span>TK Mandiri Tunggal Jaya</span>. All Rights Reserved.
          </p>
          <p class="developer">
            Developed with <i class="bi bi-heart-fill"></i> by <span>Yana</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.footer-section {
  background: linear-gradient(135deg, #01c35f 0%, #00a651 100%);
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow: hidden;
}

.footer-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.4;
}

.container {
  position: relative;
  z-index: 1;
}

/* ============================= */
/* FOOTER CONTENT */
/* ============================= */
.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
  gap: 40px;
  padding: 80px 20px 40px;
}

/* ============================= */
/* COLUMN STYLING */
/* ============================= */
.footer-col {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ============================= */
/* ABOUT COLUMN */
/* ============================= */
.footer-logo h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #ffffff;
}

.footer-logo h3 span {
  color: #fff;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

.logo-accent {
  width: 60px;
  height: 4px;
  background: #ffffff;
  border-radius: 2px;
  margin-bottom: 20px;
}

.footer-desc {
  font-size: 0.95rem;
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 25px;
}

/* ============================= */
/* SOCIAL LINKS */
/* ============================= */
.social-links {
  display: flex;
  gap: 12px;
}

.social-icon {
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-icon:hover {
  background: #ffffff;
  color: #01c35f;
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* ============================= */
/* FOOTER TITLE */
/* ============================= */
.footer-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #ffffff;
  position: relative;
  padding-bottom: 10px;
}

.footer-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 3px;
  background: #ffffff;
  border-radius: 2px;
}

/* ============================= */
/* LINKS COLUMN */
/* ============================= */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-links a i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.footer-links a:hover {
  color: #ffffff;
  padding-left: 8px;
}

.footer-links a:hover i {
  transform: translateX(5px);
}

/* ============================= */
/* CONTACT INFO */
/* ============================= */
.contact-info {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-info li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 18px;
  font-size: 0.95rem;
  line-height: 1.6;
}

.contact-info i {
  font-size: 1.1rem;
  margin-top: 2px;
  opacity: 0.9;
  min-width: 20px;
}

.contact-info span {
  color: rgba(255, 255, 255, 0.9);
}

/* ============================= */
/* MAP */
/* ============================= */
.map-container {
  width: 100%;
}

.map-wrapper {
  width: 100%;
  height: 220px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  margin-bottom: 15px;
}

.map-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}

.map-wrapper iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Maps Button */
.maps-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.maps-button:hover {
  background: #ffffff;
  color: #01c35f;
  border-color: #ffffff;
  transform: translateX(5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.maps-button i:first-child {
  font-size: 1.1rem;
}

.maps-button i:last-child {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.maps-button:hover i:last-child {
  transform: translate(3px, -3px);
}

/* ============================= */
/* FOOTER BOTTOM */
/* ============================= */
.footer-bottom {
  padding: 0 20px 30px;
}

.divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  margin-bottom: 25px;
}

.bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.copyright,
.developer {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.copyright span,
.developer span {
  font-weight: 600;
  color: #ffffff;
}

.developer i {
  color: #ff6b6b;
  animation: heartbeat 1.5s infinite;
  margin: 0 5px;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

/* ============================= */
/* RESPONSIVE */
/* ============================= */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    padding: 60px 20px 30px;
  }

  .map-wrapper {
    height: 200px;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 35px;
    padding: 50px 20px 25px;
    text-align: center;
  }

  .footer-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .logo-accent {
    margin: 0 auto 20px;
  }

  .social-links {
    justify-content: center;
  }

  .footer-links a,
  .contact-info li {
    justify-content: center;
  }

  .footer-links a:hover {
    padding-left: 0;
  }

  .map-wrapper {
    height: 250px;
  }

  .maps-button {
    width: 100%;
    max-width: 320px;
    justify-content: center;
  }

  .maps-button:hover {
    transform: translateY(-3px);
  }

  .bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .footer-logo h3 {
    font-size: 1.75rem;
  }

  .footer-desc {
    font-size: 0.9rem;
  }

  .footer-title {
    font-size: 1.1rem;
  }

  .social-icon {
    width: 42px;
    height: 42px;
    font-size: 1.1rem;
  }

  .footer-links a,
  .contact-info li {
    font-size: 0.9rem;
  }

  .map-wrapper {
    height: 220px;
  }

  .maps-button {
    padding: 10px 20px;
    font-size: 0.9rem;
  }

  .copyright,
  .developer {
    font-size: 0.85rem;
  }
}
</style>
