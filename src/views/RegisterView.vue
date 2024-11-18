<template>
  <div class="min-h-full bg-gray-100">
    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="bg-white shadow rounded-lg">
        <!-- Progress Steps -->
        <div class="px-8 pt-6">
          <h2
            class="text-xl font-semibold text-gray-700 flex items-center gap-2"
          >
            <i-tabler:clipboard class="h-6 w-6 text-[#003C71]" />
            Registro de cita
          </h2>
          <div
            class="flex items-center justify-between w-8/12 mt-8 mb-20 mx-auto"
          >
            <div class="flex flex-col items-center relative">
              <div
                class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-[#003C71] border-[#003C71] text-white text-center"
              >
                1
              </div>
              <span
                class="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase text-[#003C71]"
              >
                Datos del solicitante
              </span>
            </div>
            <div
              class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"
            ></div>
            <div class="flex flex-col items-center relative">
              <div
                class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300 text-center text-gray-400"
              >
                2
              </div>
              <div
                class="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500"
              >
                Confirmación de cita
              </div>
            </div>
            <div
              class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"
            ></div>
            <div class="flex flex-col items-center relative">
              <div
                class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300 text-center text-gray-400"
              >
                3
              </div>
              <div
                class="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500"
              >
                Resumen de cita programada
              </div>
            </div>
          </div>
        </div>

        <!-- Warning Banner -->
        <div class="bg-yellow-50 p-4 mx-8">
          <div class="flex">
            <div class="flex-shrink-0">
              <i-tabler:alert-circle class="h-5 w-5 text-yellow-600" />
            </div>
            <div class="ml-3">
              <p class="text-sm text-yellow-700">
                Asegúrese de ingresar un correo válido para recibir la
                constancia de su cita de pasaporte.
              </p>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="p-8">
          <form @submit.prevent="handleSubmit" class="space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Left Column -->
              <div class="bg-[#003C71] text-white p-6 rounded-lg">
                <h3 class="text-lg font-medium">
                  Ingrese los datos del solicitante
                </h3>
              </div>

              <!-- Right Column -->
              <div class="md:col-span-2 space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Número de DNI:</label
                    >
                    <input
                      type="text"
                      v-model="formData.dni"
                      disabled
                      placeholder="DNI"
                      class="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm py-1 px-2"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Fecha de nacimiento:</label
                    >
                    <input
                      type="date"
                      v-model="formData.birthDate"
                      class="py-1 px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Correo electrónico:</label
                    >
                    <input
                      type="email"
                      v-model="formData.email"
                      placeholder="Email"
                      class="py-1 px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Confirmar correo electrónico:</label
                    >
                    <input
                      type="email"
                      v-model="formData.emailConfirmation"
                      placeholder="Ingresar"
                      class="py-1 px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Número de celular:</label
                  >
                  <input
                    type="tel"
                    v-model="formData.phone"
                    placeholder="Ingresar"
                    class="py-1 px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <!-- Date and Time Selection -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-[#003C71] text-white p-6 rounded-lg">
                <h3 class="text-lg font-medium">
                  Seleccione la fecha y horario disponible
                </h3>
              </div>
              <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Seleccione fecha de cita:</label
                  >
                  <input
                    type="date"
                    v-model="formData.appointmentDate"
                    class="py-1 px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Seleccione un horario:</label
                  >
                  <select
                    v-model="formData.appointmentTime"
                    class="py-1 px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">-- Seleccione --</option>
                    <option
                      v-for="time in availableTimes"
                      :key="time"
                      :value="time"
                    >
                      {{ time }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Form Actions -->
            <div class="flex justify-end space-x-4">
              <button
                type="button"
                @click="handleCancel"
                class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancelar
              </button>
              <button
                type="submit"
                class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003C71] hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  dni: '74527805', // Pre-filled from previous step
  birthDate: '',
  email: '',
  emailConfirmation: '',
  phone: '',
  appointmentDate: '',
  appointmentTime: '',
});

const availableTimes = [
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
];

const handleSubmit = () => {
  // Validate form and proceed to next step
  console.log('Form submitted:', formData.value);
};

const handleCancel = () => {
  // Handle cancellation
  console.log('Form cancelled');
};
</script>
