<template>
    <section id="services" class="py-20 bg-white">
      <div v-animate-on-scroll="'animate__lightSpeedInRight'" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Desa</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai layanan administrasi dan fasilitas publik untuk kemudahan masyarakat
          </p>
        </div>
  
        <div class="mb-20">
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Layanan Administrasi</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div
              v-for="(service, index) in services"
              :key="index"
              class="card"
            >
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div :class="`icon-${service.icon} text-xl text-green-600`"></div>
                </div>
                <div class="flex-1">
                  <h4 class="text-xl font-bold text-gray-900 mb-2">{{ service.title }}</h4>
                  <p class="text-gray-600 mb-4">{{ service.description }}</p>
  
                  <div class="space-y-3">
                    <div>
                      <h5 class="font-semibold text-gray-900 mb-2">Persyaratan:</h5>
                      <ul class="text-sm text-gray-600 space-y-1">
                        <li v-for="(req, idx) in service.requirements" :key="idx" class="flex items-center space-x-2">
                          <div class="icon-check text-green-500"></div>
                          <span>{{ req }}</span>
                        </li>
                      </ul>
                    </div>
  
                    <div class="flex items-center space-x-2">
                      <span class="font-semibold text-gray-900">Biaya:</span>
                      <span class="text-green-600 font-bold">{{ service.fee }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Fasilitas Publik</h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="(facility, index) in facilities"
              :key="index"
              class="card text-center"
            >
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div :class="`icon-${facility.icon} text-2xl text-blue-600`"></div>
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">{{ facility.name }}</h4>
              <p class="text-gray-600 mb-4">{{ facility.description }}</p>
              <div class="text-sm text-green-600 font-semibold">{{ facility.hours }}</div>
            </div>
          </div>
        </div>
  
  
      </div>
    </section>
  </template>
  
  <script setup>
  const services = [
    {
      title: "Surat Keterangan Domisili",
      description: "Pengurusan surat keterangan tempat tinggal",
      icon: "file-text",
      requirements: ["KTP", "KK", "Surat Pengantar RT/RW"],
      fee: "Gratis"
    },
    {
      title: "Surat Keterangan Usaha",
      description: "Surat untuk keperluan pengembangan usaha",
      icon: "briefcase",
      requirements: ["KTP", "KK", "Foto Usaha", "Surat Pengantar RT/RW"],
      fee: "Rp 10.000"
    },
    {
      title: "Surat Keterangan Tidak Mampu",
      description: "Surat untuk bantuan sosial dan beasiswa",
      icon: "heart-handshake",
      requirements: ["KTP", "KK", "Surat Pengantar RT/RW", "Surat Keterangan Penghasilan"],
      fee: "Gratis"
    },
    {
      title: "Surat Pengantar Nikah",
      description: "Persyaratan administrasi pernikahan",
      icon: "heart",
      requirements: ["KTP", "KK", "Akta Lahir", "Surat Pengantar RT/RW"],
      fee: "Gratis"
    }
  ]
  
  const facilities = [
    {
      name: "Balai Desa",
      description: "Pusat pelayanan administrasi desa",
      hours: "Senin - Jumat: 08:00 - 15:00",
      icon: "building"
    },
    {
      name: "Posyandu",
      description: "Layanan kesehatan ibu dan anak",
      hours: "Setiap hari Kamis: 09:00 - 12:00",
      icon: "heart"
    },
    {
      name: "Perpustakaan Desa",
      description: "Fasilitas baca dan belajar masyarakat",
      hours: "Senin - Sabtu: 08:00 - 16:00",
      icon: "book-open"
    }
  ]
  </script>  