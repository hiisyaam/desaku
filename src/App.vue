<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import BackToTop from "./components/BackToTop.vue";
</script>
<template>
  <div>
    <Header />
    <router-view />
    <Footer />
    <BackToTop />
  </div>
</template>

<style></style>
