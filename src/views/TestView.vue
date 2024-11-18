<template>
  <div class="max-w-md mx-auto mt-8">
    <label
      for="codigoNacional"
      class="block text-sm font-medium text-gray-700 mb-2"
    >
      Código Nacional de Identidad
    </label>
    <div class="relative">
      <input
        id="codigoNacional"
        :value="codigo"
        @input="handleInput"
        type="text"
        maxlength="8"
        placeholder="Ingrese su código de 8 dígitos"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        :class="{ 'border-red-500': error }"
      />
      <!-- <button
        class="px-4 py-2 bg-blue-950 rounded-md my-2 text-white hover:bg-blue-800"
        @click="validarCodigo"
      >
        Validar
      </button> -->
      <br />
    </div>
    <p v-if="error" class="mt-2 text-sm text-red-600">
      <i-tabler:alert-circle class="h-5 w-5 text-red-500 inline mr-2" />
      {{ error }}
    </p>
    <p v-if="success" class="mt-2 text-sm text-green-600">Código válido</p>

    <div class="mt-2">
      <p class="font-semibold">
        <i-tabler:credit-card class="inline text-lg" /> Los DNIs que actualmente
        estan en el sistema son los siguientes:
      </p>
      <ul>
        <li class="text-gray-700 pl-2">12345678</li>
        <li class="text-gray-700 pl-2">87654321</li>
        <li class="text-gray-700 pl-2">87654321</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const codigo = ref('');
const error = ref('');
const success = ref(false);

// Simulación de códigos registrados en el sistema
const codigosRegistrados = ['12345678', '87654321', '87654321'];

const handleInput = event => {
  // Limitar a 8 caracteres
  let value = event.target.value.slice(0, 8);
  codigo.value = value;
  validarCodigo();
};

const validarCodigo = () => {
  error.value = '';
  success.value = false;

  if (codigo.value === '') {
    error.value = 'El campo no puede quedar vacío';
    return;
  }

  if (!/^\d{8}$/.test(codigo.value)) {
    error.value = 'El código debe contener exactamente 8 dígitos';
    return;
  }

  if (!codigosRegistrados.includes(codigo.value)) {
    error.value = 'El código no está registrado en el sistema';
    return;
  }

  success.value = true;
};
</script>
