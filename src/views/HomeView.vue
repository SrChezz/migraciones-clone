<template>
  <!-- Main Content -->
  <main class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Passport Image -->
      <div class="relative">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uu7ndaZc6fhqT8Pun0fCwwYtPgEQOh.png"
          alt="Pasaporte Peruano"
          class="w-full max-w-md mx-auto rounded-lg shadow-lg"
        />
        <!-- Warning Message -->
        <div class="mt-8 bg-blue-50 border-l-4 border-blue-800 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <i-tabler:alert-circle class="h-6 w-6 text-blue-800" />
            </div>
            <div class="ml-3">
              <p class="text-sm text-blue-800">
                El trámite es personal.
                <strong
                  >No recurra a tramitadores ni entregue sus datos
                  personales</strong
                >. No arriesgue la seguridad de su información.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Appointment Form -->
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <div class="flex items-center mb-6">
          <i-tabler:calendar-month class="h-8 w-8 text-gray-500" />
          <h2 class="ml-3 text-2xl font-semibold text-gray-800">
            Programar una cita
          </h2>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="dni" class="block text-sm font-medium text-gray-700">
              Número de DNI:
            </label>
            <input
              id="dni"
              v-model="formData.dni"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Ingresar"
            />
          </div>

          <div>
            <label for="sede" class="block text-sm font-medium text-gray-700">
              Seleccione una sede
            </label>
            <select
              id="sede"
              v-model="formData.sede"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">-- Seleccione --</option>
              <option v-for="sede in sedes" :key="sede" :value="sede">
                {{ sede }}
              </option>
            </select>
          </div>

          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>

    <!-- Connected Users -->
    <div class="mt-12 text-center">
      <div
        class="inline-block bg-gray-800 rounded-md px-4 py-2 text-white text-sm"
      >
        Usuarios conectados: 00035
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  dni: '',
  sede: '',
});

const sedes = [
  'Lima - Sede Central',
  'Lima - Sede Breña',
  'Lima - Sede Miraflores',
  'Arequipa',
  'Trujillo',
  'Cusco',
];

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', formData.value);
};
</script>
