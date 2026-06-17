# Struktur Component - Web TK Mandiri Tunggal Jaya

## 📋 Overview
Dokumentasi ini menjelaskan struktur component yang digunakan dalam aplikasi web TK Mandiri Tunggal Jaya setelah refactoring.

## 🗂️ Struktur Component

### **Views** (Halaman Utama)
- `HomeView.vue` - Halaman utama website
- `AboutView.vue` - Halaman tentang sekolah

### **Components** (Komponen Reusable)

#### 1. **MainHerro.vue**
Hero section dengan:
- Judul besar TK Mandiri
- Deskripsi singkat
- Video modal anak-anak
- Social media links

#### 2. **KeunggulanSection.vue** ✨ (Baru)
Section "Kenapa Harus TK Mandiri" dengan:
- Header dengan title dan divider
- 4 Feature cards dengan gradient icons:
  - Fasilitas Lengkap (Blue gradient)
  - Lingkungan Nyaman (Green gradient)
  - Pengajar Kompeten (Orange gradient)
  - Kerja Sama Luas (Cyan gradient)
- Animasi flip cards (flip-left/flip-right)
- Hover effects dengan glass morphism
- Responsive design (mobile, tablet, desktop)

**Props:** Tidak ada (menggunakan data internal)

**Data:**
```javascript
features: [
  { icon, title, description, colorClass }
]
```

#### 3. **ProfilSection.vue** ✨ (Baru)
Section "Profil TK Mandiri" dengan:
- Header dengan title dan divider
- Gambar Kepala Sekolah dengan decoration effect
- Sambutan badge dengan gradient
- Teks sambutan dan deskripsi
- Button "Baca Selanjutnya" dengan shimmer effect
- Responsive design

**Props:** Tidak ada (menggunakan data internal)

**Image:** `@/assets/Ibu_Kepsek.png`

#### 4. **ProgramKami.vue**
Section program unggulan dengan:
- Program pembelajaran (Kognitif, Bahasa, Fisik Motorik, Sosial Emosional)
- Program ekstrakurikuler (English Club, Seni & Kreativitas, Cooking Class, Karakter & Religi)

#### 5. **StaffGuru.vue**
Carousel staff guru dengan:
- Swiper carousel
- Card design dengan photo dan info
- Social media links
- Autoplay dan navigation

#### 6. **GaleryWall.vue**
Gallery foto kegiatan sekolah

#### 7. **MainNavbar.vue**
Navigation bar utama

#### 8. **CopyRight.vue**
Footer copyright

## 🎨 Design System

### Color Palette
- **Primary Green:** `#01c35f`
- **Light Green:** `#00e676`
- **Dark Text:** `#1e293b`, `#222`, `#333`
- **Secondary Text:** `#64748b`, `#666`, `#777`
- **Background:** `#f8fafc`, `#ffffff`

### Gradient Backgrounds
- **Primary:** `linear-gradient(135deg, #3b82f6, #2563eb)`
- **Success:** `linear-gradient(135deg, #10b981, #059669)`
- **Warning:** `linear-gradient(135deg, #f59e0b, #d97706)`
- **Info:** `linear-gradient(135deg, #06b6d4, #0891b2)`
- **Main:** `linear-gradient(135deg, #01c35f, #00e676)`

### Typography
- **Font Family:** 'Poppins', sans-serif
- **Heading Sizes:** 2.5rem (desktop), 2rem (tablet), 1.75rem (mobile)
- **Body Text:** 16px-18px
- **Small Text:** 14px-15px

### Spacing
- **Section Padding:** 80px (desktop), 70px (tablet), 60px (mobile)
- **Gap Between Elements:** 30px-60px
- **Card Padding:** 40px 30px (desktop), 30px 20px (mobile)

### Border Radius
- **Cards:** 24px (desktop), 20px (mobile)
- **Icons:** 24px
- **Buttons:** 50px (pill shape)

### Shadows
- **Card Shadow:** `0 10px 40px rgba(0, 0, 0, 0.05)`
- **Hover Shadow:** `0 25px 60px rgba(1, 195, 95, 0.15)`
- **Icon Shadow:** `0 10px 30px rgba(0, 0, 0, 0.1)`

## 🎭 Animations (AOS)

### Fade Animations
- `fade-up` - Element muncul dari bawah
- `fade-down` - Element muncul dari atas
- `fade-left` - Element muncul dari kanan
- `fade-right` - Element muncul dari kiri

### Flip Animations
- `flip-left` - Card flip dari kiri
- `flip-right` - Card flip dari kanan

### Delays
- Increment 100-200ms untuk efek cascading

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 576px) { ... }

/* Tablet */
@media (min-width: 577px) and (max-width: 991px) { ... }

/* Desktop */
@media (min-width: 992px) { ... }
```

## 🔧 Usage Example

### HomeView.vue
```vue
<template>
  <div class="container">
    <MainHerro />
    <KeunggulanSection />
    <ProfilSection />
    <!-- WhatsApp Float Button -->
    <a id="wa-float">...</a>
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
  }
}
</script>
```

## ✅ Benefits of Component Structure

1. **Reusability** - Components dapat digunakan di halaman lain
2. **Maintainability** - Lebih mudah di-maintain dan di-debug
3. **Separation of Concerns** - Setiap component fokus pada satu tugas
4. **Cleaner Code** - HomeView.vue lebih bersih dan terstruktur
5. **Better Performance** - Component lazy loading (jika diperlukan)
6. **Team Collaboration** - Developer bisa bekerja pada component berbeda
7. **Testing** - Lebih mudah untuk unit testing

## 🚀 Next Steps / Recommendations

1. **Extract WhatsApp Button** ke component terpisah (`WhatsAppButton.vue`)
2. **Create Data Service** untuk centralized data management
3. **Add Props** untuk membuat component lebih flexible
4. **Add Emit Events** untuk komunikasi parent-child
5. **Implement Vuex/Pinia** untuk state management (jika aplikasi berkembang)
6. **Add Unit Tests** untuk setiap component
7. **Optimize Images** dengan lazy loading
8. **Add Loading States** untuk better UX

## 📝 Notes

- Semua component mengikuti Vue 2 Composition API pattern
- AOS library digunakan untuk scroll animations
- Bootstrap 5 Grid System untuk responsive layout
- Bootstrap Icons untuk iconography
- Google Fonts (Poppins) untuk typography

## 🎨 Recent Updates (2026-06-16)

### GaleryWall.vue - Modern Gallery
**Improvements:**
- ✨ Modern header dengan subtitle dan divider
- 🖼️ Grid layout dengan auto-fit untuk responsive optimal
- 🎭 Overlay gradient effect dengan zoom icon
- 🌊 Smooth zoom animations pada hover
- 💫 Pulse animation pada zoom icon
- 📱 Better responsive untuk semua devices
- 🎯 Image caption on hover

**Features:**
- Gradient overlay (#01c35f → #00e676)
- Lightbox integration ready
- AOS animations (zoom-in with delays)
- Height optimization (280px desktop, 180px mobile)

### CopyRight.vue - Modern Footer
**Improvements:**
- 🏗️ 4-column grid layout (About | Links | Contact | Map)
- 🎨 Gradient background dengan pattern overlay
- 🔗 Social media icons dengan hover effects
- 📋 Quick links navigation dengan chevron icons
- 📞 Contact information dengan icons
- 🗺️ Interactive map dengan border & shadow
- 💝 Animated heartbeat icon
- ⚡ Smooth transitions dan hover effects

**Features:**
- Grid system (4 columns → 2 columns → 1 column responsive)
- Social media links (Facebook, Instagram, TikTok, WhatsApp)
- Quick navigation links
- Contact details with icons
- Google Maps embed
- Copyright & developer credits
- Pattern background overlay
- Glass morphism social icons

---
**Last Updated:** 2026-06-16
**Author:** Kiro AI Assistant
