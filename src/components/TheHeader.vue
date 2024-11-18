<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CvW41R1pWyuysRohqxFaDKypiPlLpI.png"
            alt="Migraciones Logo"
            class="h-10"
          />
          <h1 class="ml-3 text-2xl font-semibold text-[#003C71]">
            Citas de pasaporte electrónico
            <span class="inline-block ml-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TSfgrWZONVzoOI9k8Tpf5Ygzx3MYv7.png"
                alt="Bandera Perú"
                class="inline-block h-5"
              />
            </span>
          </h1>
        </div>
      </div>
    </div>
  </header>
  <!-- Navigation -->
  <nav class="bg-[#003C71]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex gap-4 justify-center">
        <RouterLink
          to="/"
          class="px-4 py-3 text-white hover:bg-blue-900 rounded-md"
        >
          Programar cita
        </RouterLink>
        <RouterLink
          to="/check"
          class="px-4 py-3 text-white hover:bg-blue-900 rounded-md"
        >
          Consultar
        </RouterLink>
        <RouterLink
          to="/cancel"
          class="px-4 py-3 text-white hover:bg-blue-900 rounded-md"
        >
          Cancelar
        </RouterLink>
        <RouterLink
          to="/test"
          class="px-4 py-3 text-white hover:bg-blue-900 rounded-md"
        >
          Validar DNI
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
