<template>
  <section
    v-animate-on-scroll="'animate__fadeInLeftBig'"
    id="potential"
    class="py-20 bg-gray-50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Potensi Desa
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Berbagai potensi unggulan yang dimiliki Desa Sejahtera untuk kemajuan
          dan kesejahteraan masyarakat
        </p>
      </div>

      <div
        v-animate-on-scroll="'animate__fadeInLeftBig'"
        class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <router-link
          v-for="(potential, index) in potentials"
          :key="index"
          to="/ongoing"
          class="card group hover:scale-105 transition-transform duration-300 no-underline text-inherit"
        >
          <div class="relative mb-4">
            <img
              :src="potential.image"
              :alt="potential.title"
              class="w-full h-48 object-cover rounded-lg"
            />
            <div
              class="absolute top-4 left-4 w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center"
            >
              <div
                :class="`icon-${potential.icon} text-lg text-green-600`"
              ></div>
            </div>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">
            {{ potential.title }}
          </h3>
          <p class="text-gray-600">{{ potential.description }}</p>
        </router-link>
      </div>

      <div
        v-animate-on-scroll="'animate__fadeInUpBig'"
        class="mt-16 grid md:grid-cols-3 gap-8"
      >
        <div class="text-center">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"
          >
            <div class="icon-trending-up text-2xl text-green-600"></div>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">
            Pertumbuhan Ekonomi
          </h3>
          <p class="text-gray-600">
            Tingkat pertumbuhan ekonomi desa mencapai 8% per tahun
          </p>
        </div>
        <div class="text-center">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"
          >
            <div class="icon-users text-2xl text-blue-600"></div>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">
            Pemberdayaan Masyarakat
          </h3>
          <p class="text-gray-600">
            85% masyarakat terlibat aktif dalam kegiatan ekonomi produktif
          </p>
        </div>
        <div class="text-center">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4"
          >
            <div class="icon-leaf text-2xl text-yellow-600"></div>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Ramah Lingkungan</h3>
          <p class="text-gray-600">
            Program desa hijau dengan 90% lahan termanfaatkan secara
            berkelanjutan
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const potentials = [
  {
    title: "Pertanian",
    description:
      "Lahan pertanian seluas 800 hektar dengan hasil padi, jagung, dan sayuran",
    icon: "wheat",
    image:
      "https://images.unsplash.com/photo-1554402100-8d1d9f3dff80?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Peternakan",
    description:
      "Peternakan sapi, kambing, dan unggas dengan produktivitas tinggi",
    icon: "paw-print",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Wisata Alam",
    description:
      "Pemandangan pegunungan, air terjun, dan hutan pinus yang indah",
    icon: "mountain",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Kerajinan Tangan",
    description:
      "Industri rumahan kerajinan bambu, anyaman, dan tenun tradisional",
    icon: "palette",
    image:
      "https://images.unsplash.com/photo-1593671186131-d58817e7dee0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
</script>
