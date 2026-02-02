<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const fullName = ref('')
const email = ref('')
const company = ref('')
const submitted = ref(false)
const submitting = ref(false)

const handleSubmit = async () => {
  submitting.value = true;
  
  try {
    const FORM_ID = '9043621';
    
    // 2. Map the data to Kit's structure
    // Kit uses 'first_name' for names and a 'fields' object for anything else
    const payload = {
      email_address: email.value,
      first_name: fullName.value,
      fields: {
        company: company.value // IMPORTANT: 'company' must exist in Kit Settings -> Custom Fields
      }
    };

    const response = await fetch(`/api-kit/forms/${FORM_ID}/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      submitted.value = true;
      // Clear fields
      fullName.value = '';
      email.value = '';
      company.value = '';
    } else {
      alert("Registration failed. Please try again.");
    }
  } catch (error) {
    console.error("Waitlist error:", error);
    alert("Check your connection or CORS settings.");
  } finally {
    submitting.value = false;
  }
};

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 flex items-center justify-center px-6 py-12">
    <div class="w-full max-w-md">
      <!-- Back link -->
      <a
        href="/"
        @click.prevent="goBack"
        class="inline-flex items-center text-gray-400 hover:text-white text-sm mb-8 transition-colors"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back to Top of The Mountain
      </a>

      <!-- Card -->
      <div class="bg-dark-800 border border-gray-700 rounded-2xl p-8 shadow-xl">
        <div class="text-center mb-8">
          <span class="text-2xl font-bold text-white">
            <span class="text-primary-400">⛰</span> mount
          </span>
          <h1 class="text-2xl font-bold text-white mt-6 mb-2">
            Join the Early Adopter Program
          </h1>
          <p class="text-gray-400 text-sm">
            Get early access and help shape the future of engineering knowledge.
          </p>
        </div>

        <form v-if="!submitted" @submit="handleSubmit" class="space-y-5">
          <div>
            <label for="fullName" class="block text-sm font-medium text-gray-300 mb-2">
              Full name
            </label>
            <input
              id="fullName"
              v-model="fullName"
              type="text"
              required
              placeholder="Jane Doe"
              class="w-full px-4 py-3 rounded-lg bg-dark-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              placeholder="jane@company.com"
              class="w-full px-4 py-3 rounded-lg bg-dark-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label for="company" class="block text-sm font-medium text-gray-300 mb-2">
              Company
            </label>
            <input
              id="company"
              v-model="company"
              type="text"
              required
              placeholder="Acme Inc."
              class="w-full px-4 py-3 rounded-lg bg-dark-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            :disabled="submitting"
            class="w-full btn-primary py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ submitting ? 'Submitting...' : 'Join the waitlist' }}
          </button>
        </form>

        <div v-else class="text-center py-4">
          <div class="text-5xl mb-4">✓</div>
          <h2 class="text-xl font-semibold text-white mb-2">You're on the list</h2>
          <p class="text-gray-400 text-sm mb-6">
            We'll be in touch at {{ email }} when we're ready for you.
          </p>
          <button
            type="button"
            @click="goBack"
            class="text-primary-400 hover:text-primary-300 text-sm font-medium"
          >
            Back to Top of The Mountain
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
