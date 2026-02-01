<script setup lang="ts">
// Hero section component
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
      <!-- Logo/Brand -->
      <div class="mb-8">
        <span class="text-2xl font-bold text-white tracking-tight">
          <span class="text-primary-400">⛰</span> mount
        </span>
      </div>
      
      <!-- Headline -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
        Stop losing R&D momentum to
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
          Slack threads and silos.
        </span>
      </h1>
      
      <!-- Sub-headline -->
      <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
        Automatically transform every dev-machine interaction into a searchable, shared knowledge base for your entire engineering org.
      </p>
      
      <!-- Primary CTA -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="#early-access" class="btn-primary">
          Join the Early Adopter Program
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
      </div>
      
      <!-- Social proof placeholder -->
      <p class="mt-8 text-sm text-gray-500">
        Trusted by engineering teams at innovative companies
      </p>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
</style>
