<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg bg-white">
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
            <a
              v-for="(item, index) in navItems"
              :key="index"
              href="#"
              class="nav-link"
              :class="{ active: activeIndex === index }"
              @click.prevent="setActive(index)"
            >
              {{ item }}
            </a>
          </div>
          <button type="button" class="btn btn-primary kontak">Kontak</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainNavbar",
  data() {
    return {
      activeIndex: 0,
      navItems: [
        "Home",
        "Tentang Kami",
        "Program Kami",
        "Staf Guru",
        "Gallery",
      ],
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
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

.kontak {
  border-radius: 20px;
}

/* Navbar aktif */
.nav-link.active {
  color: #007bff !important;
}

/* Efek hover */
.nav-link:hover {
  color: #007bff !important;
}
</style>
