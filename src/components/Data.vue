<template>
  <section
    v-animate-on-scroll="'animate__fadeInLeftBig'"
    id="data"
    class="py-20 bg-white"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Data Desa
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Informasi statistik dan demografi terkini Desa Sejahtera
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div
          v-for="(item, index) in demographicData"
          :key="index"
          class="card text-center"
        >
          <div
            class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4"
          >
            <div :class="`icon-${item.icon} text-xl text-green-600`"></div>
          </div>
          <div class="text-3xl font-bold text-gray-900 mb-2">
            <AnimatedNumber :to="parseInt(item.value.replace('.', ''))" />
          </div>
          <div class="text-gray-600">{{ item.label }}</div>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <div class="card animate__animated animate__fadeInUp animate__slow">
          <h3 class="text-xl font-bold text-gray-900 mb-6">
            Tingkat Pendidikan
          </h3>
          <div class="space-y-4">
            <div v-for="(item, index) in educationData" :key="index">
              <div class="flex justify-between mb-1">
                <span class="text-gray-600">{{ item.level }}</span>
                <span class="font-semibold">{{ item.percentage }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  class="bg-green-500 h-3 rounded-full"
                  v-bar-fill="item.percentage + '%'"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="card animate__animated animate__fadeInUp animate__slower">
          <h3 class="text-xl font-bold text-gray-900 mb-6">Mata Pencaharian</h3>
          <div class="space-y-4">
            <div v-for="(item, index) in occupationData" :key="index">
              <div class="flex justify-between mb-1">
                <span class="text-gray-600">{{ item.job }}</span>
                <span class="font-semibold">{{ item.percentage }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  class="bg-blue-500 h-3 rounded-full"
                  v-bar-fill="item.percentage + '%'"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div class="text-2xl font-bold text-green-600 mb-2">15 km²</div>
          <div class="text-gray-600">Luas Wilayah</div>
        </div>
        <div>
          <div class="text-2xl font-bold text-green-600 mb-2">800 mdpl</div>
          <div class="text-gray-600">Ketinggian</div>
        </div>
        <div>
          <div class="text-2xl font-bold text-green-600 mb-2">24°C</div>
          <div class="text-gray-600">Suhu Rata-rata</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedNumber from "./AnimatedNumber.vue";

const demographicData = [
  { label: "Total Penduduk", value: "2.547", icon: "users" },
  { label: "Laki-laki", value: "1.289", icon: "mars" },
  { label: "Perempuan", value: "1.258", icon: "venus" },
  { label: "Kepala Keluarga", value: "687", icon: "user-plus" },
];

const educationData = [
  { level: "SD/Sederajat", percentage: 35 },
  { level: "SMP/Sederajat", percentage: 28 },
  { level: "SMA/Sederajat", percentage: 25 },
  { level: "Diploma/Sarjana", percentage: 12 },
];

const occupationData = [
  { job: "Petani", percentage: 45 },
  { job: "Wiraswasta", percentage: 25 },
  { job: "Pegawai", percentage: 15 },
  { job: "Lainnya", percentage: 15 },
];
</script>

<style scoped>
.animate-bar {
  width: 0;
  transition: width 1s ease-out;
  animation: fill-bar 1.5s forwards;
}

@keyframes fill-bar {
  to {
    width: var(--bar-width);
  }
}
</style>
