<template>
  <div>
    <MainNavbar />
    <MainHerro />
    <main class="main-content">
      <router-view />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import MainHerro from "./components/MainHerro.vue";
import MainNavbar from "./components/MainNavbar.vue";
// import Navbar from "./components/Navbar.vue";
// import Footer from "./components/Footer.vue";

export default {
  name: "AppLayout",
  components: {
    MainNavbar,
    MainHerro,
  },
};
</script>

<style scoped>
/* Bagian tengah (konten view) */
.main-content {
  min-height: 70vh; /* agar area tengah cukup tinggi */
  padding: 20px;
  background-color: #fff;
}
</style>
