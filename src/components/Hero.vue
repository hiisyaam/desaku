<template>
  <div>
    <section id="home" class="min-h-screen flex items-center bg-gradient-to-br from-green-50 to-blue-50 scroll-mt-24 pt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8 animate__animated animate__fadeInLeftBig animate__slow 1s">
            <div class="space-y-4">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Selamat Datang di
                <span class="text-green-500 hover:text-green-600 block">Desa Sejahtera</span>
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed">
                Desa yang berkembang dengan potensi alam yang melimpah,
                masyarakat yang ramah, dan komitmen untuk terus maju menuju
                kesejahteraan bersama.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <button class="btn-primary">
                <div class="flex items-center space-x-2">
                  <router-link to="/ongoing">Jelajahi Desa</router-link>
                  <div class="icon-arrow-right text-lg"></div>
                </div>
              </button>
              <button class="btn-secondary">
                <div class="flex items-center space-x-2">
                  <div class="icon-phone text-lg"></div>
                  <a target="_blank" rel="noopener noreferrer" href="http://wa.me/6281586786180">Hubungi Kami</a>
                </div>
              </button>
            </div>

            <div class="grid grid-cols-3 gap-6 pt-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600" :data-id="2500" :duration="3000">
                  <AnimatedNumber :to="2500" />+
                </div>
                <div class="text-sm text-gray-600">Penduduk</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600" :data-id="15" :duration="4000">
                  <AnimatedNumber :to="15" />
                </div>
                <div class="text-sm text-gray-600">RT/RW</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600" :data-id="25" :duration="5000">
                  <AnimatedNumber :to="25" />+
                </div>
                <div class="text-sm text-gray-600">UMKM</div>
              </div>
            </div>
          </div>

          <div class="lg:order-last animate__animated animate__fadeInDownBig animate__slow	1s">
            <div class="relative">
              <img src="https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pemandangan Desa" class="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
  import AnimatedNumber from './AnimatedNumber.vue';
</script>
<style></style>
