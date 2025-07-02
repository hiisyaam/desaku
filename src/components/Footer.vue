<template>
  <footer v-animate-on-scroll="'animate__fadeInUp'" class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-40 h-40 flex items-center justify-center">
              <img src="/src/assets/logo-desa.svg" alt="logo">
            </div>
          </div>
          <h3 class="text-xl font-bold">Desa Sejahtera</h3>
          <p class="text-gray-300 leading-relaxed mb-6">
            Desa Sejahtera berkomitmen untuk terus berkembang dan memberikan pelayanan terbaik 
            bagi seluruh masyarakat. Bersama-sama kita wujudkan desa yang maju dan sejahtera.
          </p>
          <div class="flex space-x-4">
            <div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
              <div class="icon-facebook text-lg"></div>
            </div>
            <div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
              <div class="icon-instagram text-lg"></div>
            </div>
            <div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
              <div class="icon-youtube text-lg"></div>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-bold mb-6">Kontak</h4>
          <div class="space-y-4 text-gray-300">
            <div class="flex items-start space-x-3">
              <div class="icon-map-pin text-green-500 mt-1"></div>
              <p>
                Jl. Raya Desa No. 123<br />
                Kecamatan Sejahtera<br />
                Kabupaten Makmur 55123
              </p>
            </div>
            <div class="flex items-center space-x-3">
              <div class="icon-phone text-green-500"></div>
              <span>(0274) 123-4567</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="icon-mail text-green-500"></div>
              <span>info@desasejahtera.id</span>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-bold mb-6">Tautan Cepat</h4>
          <ul class="space-y-3 text-gray-300">
            <li><a href="#profile" class="hover:text-green-500">Profil Desa</a></li>
            <li><a href="#potential" class="hover:text-green-500">Potensi Desa</a></li>
            <li><a href="#data" class="hover:text-green-500">Data Statistik</a></li>
            <li><a href="#services" class="hover:text-green-500">Layanan Publik</a></li>
            <li><a href="#gallery" class="hover:text-green-500">Galeri Foto</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>© 2024 Desa Sejahtera. Dibuat oleh <a target="_blank" href="https://instagram.com/frshisyam_" class="hover:text-green-500">Mr.Anomali</a></p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="/ongoing" class="hover:text-green-500">Kebijakan Privasi</a>
          <a href="/ongoing" class="hover:text-green-500">Syarat & Ketentuan</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
