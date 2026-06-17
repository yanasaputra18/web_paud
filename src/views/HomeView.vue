<template>
  <div class="container">
    <MainHerro />
    <KeunggulanSection />
    <ProfilSection />


    <!-- Icon watshap -->
    <a id="wa-float" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
  </div>
</template>
<script>
import KeunggulanSection from '@/components/KeunggulanSection.vue';
import ProfilSection from '@/components/ProfilSection.vue';

export default {
  name: "HomeView",
  components: {
    KeunggulanSection,
    ProfilSection
  },
  mounted() {
    const el = document.getElementById("wa-float");
    if (el) {
      const phone = "6281349972893";
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
  transition: all 0.3s ease;
}

#wa-float:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
}
/* Css watshap end */
</style>
