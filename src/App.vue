<template>
  <div>
    <MainNavbar />
    <MainHerro />
    <main class="main-content">
      <router-view />
    </main>
    <ProgramKami />
    <StaffGuru />
    <GaleryWall />
    <CopyRight />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import CopyRight from "./components/CopyRight.vue";
import GaleryWall from "./components/GaleryWall.vue";
import MainHerro from "./components/MainHerro.vue";
import MainNavbar from "./components/MainNavbar.vue";
import ProgramKami from "./components/ProgramKami.vue";
import StaffGuru from "./components/StaffGuru.vue";
// import Navbar from "./components/Navbar.vue";
// import Footer from "./components/Footer.vue";

export default {
  name: "AppLayout",
  components: {
    MainNavbar,
    MainHerro,
    ProgramKami,
    StaffGuru,
    GaleryWall,
    CopyRight,
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
