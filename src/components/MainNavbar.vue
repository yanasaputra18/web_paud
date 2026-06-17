<template>
  <nav class="main-navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-container">
        <!-- Logo -->
        <a href="#home" class="navbar-brand" @click.prevent="handleMenuClick('home', 0)">
          <div class="brand-content">
            <div class="brand-icon">
              <i class="bi bi-mortarboard-fill"></i>
            </div>
            <div class="brand-text">
              <span class="brand-name">TK <span class="highlight">Mandiri</span></span>
              <span class="brand-tagline">Tunggal Jaya</span>
            </div>
          </div>
        </a>

        <!-- Mobile Toggle -->
        <button
          class="navbar-toggler"
          :class="{ 'active': isMenuOpen }"
          type="button"
          @click="toggleMenu"
          aria-label="Toggle navigation"
        >
          <span class="toggler-line"></span>
          <span class="toggler-line"></span>
          <span class="toggler-line"></span>
        </button>

        <!-- Nav Menu -->
        <div class="navbar-menu" :class="{ 'show': isMenuOpen }">
          <div class="nav-links">
            <a
              v-for="(item, index) in navItems"
              :key="index"
              class="nav-link"
              :class="{ 'active': activeIndex === index }"
              :href="'#' + item.target"
              @click.prevent="handleMenuClick(item.target, index)"
            >
              <span class="nav-text">{{ item.name }}</span>
              <span class="nav-indicator"></span>
            </a>
          </div>

          <!-- Contact Button -->
          <button
            type="button"
            class="btn-contact"
            @click="openWhatsApp"
          >
            <i class="bi bi-whatsapp"></i>
            <span>Hubungi Kami</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar",
  data() {
    return {
      activeIndex: 0,
      isMenuOpen: false,
      isScrolled: false,
      navItems: [
        { name: "Home", target: "home" },
        { name: "Tentang Kami", target: "profil-section" },
        { name: "Program Kami", target: "program" },
        { name: "Staf Guru", target: "staff" },
        { name: "Gallery", target: "gallery" },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    
    setActive(index) {
      this.activeIndex = index;
    },

    scrollToSection(id, index) {
      this.setActive(index);

      const section = document.getElementById(id);
      if (section) {
        const navbarHeight = 80;
        const elementPosition = section.offsetTop;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      
      // Prevent body scroll when menu is open
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },

    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    },

    handleMenuClick(id, index) {
      this.scrollToSection(id, index);
      this.closeMenu();
    },

    openWhatsApp() {
      const phone = "6281349972893";
      const message = "Halo ibu, saya mau bertanya tentang TK Mandiri";

      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
      this.closeMenu();
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/* ============================= */
/* MAIN NAVBAR */
/* ============================= */
.main-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.main-navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 0;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  transition: padding 0.3s ease;
}

.main-navbar.scrolled .navbar-container {
  padding: 15px 0;
}

/* ============================= */
/* BRAND / LOGO */
/* ============================= */
.navbar-brand {
  text-decoration: none;
  color: #1e293b;
  transition: all 0.3s ease;
}

.brand-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-icon {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #01c35f, #00e676);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(1, 195, 95, 0.3);
}

.navbar-brand:hover .brand-icon {
  transform: rotate(-5deg) scale(1.05);
  box-shadow: 0 6px 20px rgba(1, 195, 95, 0.4);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-name {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1e293b;
}

.brand-name .highlight {
  color: #01c35f;
}

.brand-tagline {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
}

/* ============================= */
/* MOBILE TOGGLE */
/* ============================= */
.navbar-toggler {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  z-index: 1001;
}

.toggler-line {
  width: 28px;
  height: 3px;
  background: #01c35f;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.navbar-toggler.active .toggler-line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.navbar-toggler.active .toggler-line:nth-child(2) {
  opacity: 0;
}

.navbar-toggler.active .toggler-line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* ============================= */
/* NAV MENU */
/* ============================= */
.navbar-menu {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* ============================= */
/* NAV LINKS */
/* ============================= */
.nav-link {
  position: relative;
  padding: 10px 18px;
  text-decoration: none;
  color: #475569;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 10px;
  cursor: pointer;
}

.nav-text {
  position: relative;
  z-index: 1;
}

.nav-indicator {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 20px;
  height: 3px;
  background: #01c35f;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #01c35f;
  background: rgba(1, 195, 95, 0.05);
}

.nav-link:hover .nav-indicator {
  transform: translateX(-50%) scaleX(1);
}

.nav-link.active {
  color: #01c35f;
  background: rgba(1, 195, 95, 0.1);
}

.nav-link.active .nav-indicator {
  transform: translateX(-50%) scaleX(1);
}

/* ============================= */
/* CONTACT BUTTON */
/* ============================= */
.btn-contact {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: linear-gradient(135deg, #01c35f, #00e676);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(1, 195, 95, 0.3);
}

.btn-contact i {
  font-size: 1.1rem;
}

.btn-contact:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(1, 195, 95, 0.4);
}

.btn-contact:active {
  transform: translateY(0);
}

/* ============================= */
/* RESPONSIVE */
/* ============================= */
@media (max-width: 991px) {
  .navbar-toggler {
    display: flex;
  }

  .navbar-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 320px;
    height: 100vh;
    background: white;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 100px 30px 30px;
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.1);
    transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    overflow-y: auto;
  }

  .navbar-menu.show {
    right: 0;
  }

  .nav-links {
    flex-direction: column;
    align-items: stretch;
    gap: 5px;
    margin-bottom: 30px;
  }

  .nav-link {
    padding: 15px 20px;
    border-radius: 12px;
    font-size: 1rem;
  }

  .nav-indicator {
    left: 20px;
    transform: translateX(0) scaleX(0);
    width: 30px;
  }

  .nav-link:hover .nav-indicator,
  .nav-link.active .nav-indicator {
    transform: translateX(0) scaleX(1);
  }

  .btn-contact {
    justify-content: center;
    padding: 15px 24px;
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .navbar-container {
    padding: 15px 0;
  }

  .main-navbar.scrolled .navbar-container {
    padding: 12px 0;
  }

  .brand-icon {
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }

  .brand-name {
    font-size: 1.2rem;
  }

  .brand-tagline {
    font-size: 0.7rem;
  }

  .navbar-menu {
    width: 280px;
    padding: 90px 25px 25px;
  }

  .nav-link {
    font-size: 0.95rem;
  }
}

/* ============================= */
/* OVERLAY (Mobile Menu Open) */
/* ============================= */
@media (max-width: 991px) {
  .main-navbar::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
  }

  .main-navbar:has(.navbar-menu.show)::before {
    opacity: 1;
    visibility: visible;
  }
}

/* ============================= */
/* SCROLL ANIMATIONS */
/* ============================= */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.main-navbar {
  animation: slideDown 0.5s ease-out;
}
</style>
