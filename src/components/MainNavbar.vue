<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">TK Mandiri</a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse gap-2" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto">
            <!-- <a
              v-for="(item, index) in navItems"
              :key="index"
              class="nav-link"
              :class="{ active: activeIndex === index }"
              :href="'#' + item.target"
              @click.prevent="scrollToSection(item.target, index)"
            >
              {{ item.name }}
            </a> -->
            <a
              v-for="(item, index) in navItems"
              :key="index"
              class="nav-link"
              :class="{ active: activeIndex === index }"
              :href="'#' + item.target"
              @click.prevent="handleMenuClick(item.target, index)"
            >
              {{ item.name }}
            </a>
          </div>
          <button type="button" class="btn btn-outline-success">Kontak</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { Collapse } from "bootstrap";

export default {
  name: "MainNavbar",
  data() {
    return {
      activeIndex: 0,
      navItems: [
        { name: "Home", target: "home" },
        { name: "Tentang Kami", target: "tentang" },
        { name: "Program Kami", target: "program" },
        { name: "Staf Guru", target: "Staff" },
        { name: "Gallery", target: "gallery" },
      ],
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },

    scrollToSection(id, index) {
      this.setActive(index);

      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },

    closeNavbar() {
      const navbar = document.getElementById("navbarNavAltMarkup");
      const bsCollapse = new Collapse(navbar, {
        toggle: false,
      });
      bsCollapse.hide();
    },

    handleMenuClick(id, index) {
      this.scrollToSection(id, index);
      this.closeNavbar();
    },
  },
};
</script>

<style scoped>
.navbar {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.2rem;
  padding: 30px 0;
}

/* Navbar aktif */
.nav-link.active {
  color: #01c35f !important;
}

/* Efek hover */
.nav-link:hover {
  color: #01c35f !important;
}
</style>
