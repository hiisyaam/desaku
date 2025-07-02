<template>
  <button
    @click="scrollToTop"
    class="fixed bottom-10 right-5 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
    aria-label="Kembali ke atas"
  >
    <div class="icon-arrow-up w-5 h-5"></div>
  </button>
</template>

<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>
