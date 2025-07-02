<template>
  <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 animate__animated animate__fadeInDown animate__delay-2s">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 flex items-center justify-center">
            <router-link to="/">
              <img src="/src/assets/logo-desa.svg" alt="logo"/>
            </router-link>
          </div>
            <router-link to="/">
              <h1 class="text-xl font-bold text-gray-900">Desa Sejahtera</h1>
            </router-link>
        </div>

        <nav class="hidden md:flex space-x-2">
          <a
            v-for="item in menuItems"
            :key="item.id"
            :href="'/#' + item.id"
            @click="scrollToSection(item.id)"
            :class="['nav-link', activeSection === item.id ? 'active' : '']"
          >
            {{ item.label }}
        </a>
        </nav>

        <button
          class="md:hidden p-2 rounded-lg hover:bg-gray-100"
          @click="isMenuOpen = !isMenuOpen"
        >
          <div
            :class="`icon-${isMenuOpen ? 'x' : 'menu'} text-xl text-gray-700`"
          ></div>
        </button>
      </div>

      <div v-if="isMenuOpen" class="md:hidden py-4 border-t">
        <nav class="flex flex-col space-y-2">
          <button
            v-for="item in menuItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            :class="[
              'nav-link text-left',
              activeSection === item.id ? 'active' : '',
            ]"
          >
            {{ item.label }}
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "vue-router";

const isMenuOpen = ref(false);
const activeSection = ref("home");
const route = useRoute();

const menuItems = [
  { id: "home", label: "Beranda" },
  { id: "profile", label: "Profil" },
  { id: "potential", label: "Potensi" },
  { id: "data", label: "Data" },
  { id: "gallery", label: "Galeri" },
  { id: "services", label: "Layanan" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    activeSection.value = id;
    isMenuOpen.value = false;
  }
}

function updateActiveSection() {
  if (route.path !== "/") return;
  const offset = 150;
  for (const item of menuItems) {
    const el = document.getElementById(item.id);
    if (el) {
      const top = el.getBoundingClientRect().top;
      if (top < offset && top > -window.innerHeight / 2) {
        activeSection.value = item.id;
        break;
      }
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", updateActiveSection);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateActiveSection);
});

watch(route, (to) => {
  if (to.path !== "/") {
    activeSection.value = null;
  }
});
</script>
