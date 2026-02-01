<script setup lang="ts">
interface PainPoint {
  icon: string;
  title: string;
  description: string;
  stat?: string;
}

const painPoints: PainPoint[] = [
  {
    icon: '🔍',
    title: 'Lost in Context',
    description: 'Devs waste 30% of their time hunting for context on why a specific system was configured a certain way.',
    stat: '30%'
  },
  {
    icon: '🔔',
    title: 'Constant Interruptions',
    description: 'Senior engineers are constantly interrupted by the same technical questions, breaking their flow.',
    stat: '5x'
  },
  {
    icon: '🚪',
    title: 'Knowledge Walks Out',
    description: 'Critical knowledge "walks out the door" when a team member leaves, creating dangerous gaps.',
    stat: '60%'
  }
];
</script>

<template>
  <section class="py-20 bg-dark-900">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1 text-sm font-medium text-primary-400 bg-primary-900/30 rounded-full mb-4">
          The Problem
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Your engineering knowledge is scattered
        </h2>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          Every day, valuable context gets lost in chat threads, undocumented decisions, and tribal knowledge.
        </p>
      </div>
      
      <!-- Pain points grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(point, index) in painPoints"
          :key="index"
          class="relative p-8 bg-dark-800 border border-gray-800 rounded-2xl hover:border-primary-500/50 transition-all duration-300 group"
        >
          <!-- Stat badge -->
          <div v-if="point.stat" class="absolute -top-3 -right-3 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
            <span class="text-red-400 font-bold text-sm">{{ point.stat }}</span>
          </div>
          
          <!-- Icon -->
          <div class="text-4xl mb-4">{{ point.icon }}</div>
          
          <!-- Content -->
          <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
            {{ point.title }}
          </h3>
          <p class="text-gray-400 leading-relaxed">
            {{ point.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
