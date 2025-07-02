<template>
    <section  id="gallery" class="py-20 bg-gray-50">
      <div v-animate-on-scroll="'animate__bounceInUp'" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galeri Desa</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Dokumentasi kegiatan dan keindahan Desa Sejahtera dalam berbagai momen
          </p>
        </div>
  
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-colors duration-200',
              selectedCategory === category
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
            ]"
          >
            {{ category }}
          </button>
        </div>
  
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="image in filteredImages"
            :key="image.id"
            class="card group cursor-pointer overflow-hidden"
          >
            <div class="relative mb-4">
              <img
                :src="image.image"
                :alt="image.title"
                class="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm"
              >
                {{ image.category }}
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ image.title }}</h3>
            <p class="text-gray-600">{{ image.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const selectedCategory = ref('Semua')
  
  const categories = ['Semua', 'Pertanian', 'Budaya', 'Sosial', 'Wisata', 'Ekonomi', 'Kesehatan']
  
  const galleryImages = [
    {
      id: 1,
      title: 'Panen Raya',
      description: 'Kegiatan panen padi di sawah desa',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Pertanian'
    },
    {
      id: 2,
      title: 'Festival Budaya',
      description: 'Perayaan festival budaya tahunan desa',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Budaya'
    },
    {
      id: 3,
      title: 'Gotong Royong',
      description: 'Kegiatan gotong royong membangun jalan desa',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Sosial'
    },
    {
      id: 4,
      title: 'Wisata Air Terjun',
      description: 'Keindahan air terjun di kawasan desa',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Wisata'
    },
    {
      id: 5,
      title: 'Pelatihan UMKM',
      description: 'Program pelatihan untuk pelaku UMKM desa',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Ekonomi'
    },
    {
      id: 6,
      title: 'Posyandu Balita',
      description: 'Kegiatan posyandu untuk kesehatan balita',
      image: 'https://images.unsplash.com/photo-1576766125535-b04e15fd0273?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Kesehatan'
    }
  ]
  const filteredImages = computed(() => {
    if (selectedCategory.value === 'Semua') return galleryImages
    return galleryImages.filter(img => img.category === selectedCategory.value)
  })
  </script>
  