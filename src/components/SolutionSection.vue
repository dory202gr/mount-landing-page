<script setup lang="ts">
interface Solution {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

const solutions: Solution[] = [
  {
    icon: '⚡',
    title: 'Automated Capture',
    description: 'No more manual documentation. Mount silently captures every meaningful interaction with your development environment.',
    highlight: 'Zero effort'
  },
  {
    icon: '🧠',
    title: 'Collective Intelligence',
    description: 'Every CLI command, cloud configuration change, or debugging session becomes a searchable asset for your entire team.',
    highlight: 'Shared knowledge'
  },
  {
    icon: '🚀',
    title: 'Instant Context',
    description: 'New hires get up to speed in days, not months. Anyone can find the "why" behind any system decision instantly.',
    highlight: 'Days, not months'
  }
];
</script>

<template>
  <section id="solution" class="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1 text-sm font-medium text-primary-600 bg-primary-100 rounded-full mb-4">
          The Solution
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Your Human-Machine Knowledge Engine
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Mount transforms every developer interaction into collective intelligence, without changing how your team works.
        </p>
      </div>
      
      <!-- Solutions grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(solution, index) in solutions"
          :key="index"
          class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary-300 transition-all duration-300 group"
        >
          <!-- Highlight badge -->
          <div class="absolute -top-3 left-6">
            <span class="inline-block px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full">
              {{ solution.highlight }}
            </span>
          </div>
          
          <!-- Icon -->
          <div class="text-4xl mb-4 mt-2">{{ solution.icon }}</div>
          
          <!-- Content -->
          <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
            {{ solution.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ solution.description }}
          </p>
        </div>
      </div>
      
      <!-- CTA Section -->
      <div id="early-access" class="mt-20 text-center p-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl shadow-xl">
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to stop losing knowledge?
        </h3>
        <p class="text-primary-100 mb-8 max-w-xl mx-auto">
          Join our early adopter program and be among the first to transform how your engineering team shares knowledge.
        </p>
        <a href="mailto:hello@mount.dev" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
          Get Early Access
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
