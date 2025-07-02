<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-green-500 mb-4">
      Fitur nya Belum Jadi
    </h1>

    <p class="text-gray-700 text-lg mb-6">
      Nanti aku kembangin lagi yaa... hehe
    </p>
    <p class="text-xl font-semibold text-gray-800 mb-8">
      Tunggu dalam <span class="text-green-600">{{ days }}</span> hari,
      <span class="text-green-600">{{ hours }}</span> jam,
      <span class="text-green-600">{{ minutes }}</span> menit,
      <span class="text-green-600">{{ seconds }}</span> detik.
    </p>
    <router-link to="/" class="btn-primary my-8">Kembali ke Beranda</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 100);

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

let interval;

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate.getTime() - now;

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
}

onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>
