<template>
    <section id="profile" class="py-20 bg-white">
      <div v-animate-on-scroll="'animate__fadeInUp'" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Profil Desa</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Mengenal lebih dekat sejarah, visi misi, dan struktur organisasi Desa Sejahtera
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Kantor Desa"
              class="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-gray-900">Sejarah Desa</h3>
            <p class="text-gray-600 leading-relaxed">
              Desa Sejahtera didirikan pada tahun 1945 dengan luas wilayah 15 km². 
              Terletak di dataran tinggi dengan ketinggian 800 meter di atas permukaan laut, 
              desa ini memiliki iklim yang sejuk dan tanah yang subur.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Nama "Sejahtera" dipilih sebagai harapan dan doa agar seluruh masyarakat 
              desa dapat hidup dalam kemakmuran dan kedamaian.
            </p>
          </div>
        </div>
  
        <div v-animate-on-scroll="'animate__fadeInRightBig'" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <div class="icon-eye text-xl text-green-600"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Visi</h3>
            <p class="text-gray-600">
              Mewujudkan Desa Sejahtera sebagai desa mandiri, maju, dan berkelanjutan 
              dengan masyarakat yang sejahtera lahir dan batin.
            </p>
          </div>

          <div class="card">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div class="icon-target text-xl text-blue-600"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Misi</h3>
            <p class="text-gray-600">
              Meningkatkan kualitas hidup masyarakat melalui pembangunan infrastruktur, 
              pendidikan, kesehatan, dan pemberdayaan ekonomi.
            </p>
          </div>

          <div class="card md:col-span-2 lg:col-span-1">
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <div class="icon-user text-xl text-yellow-600"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Kepala Desa</h3>
            <p class="text-gray-600">
              Bapak Ahmad Santoso, S.Sos<br />
              Periode: 2019 - 2025<br />
              Telp: (0274) 123-4567
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  