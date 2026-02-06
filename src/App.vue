<template>
  <div class="flex flex-col min-h-screen">
    <header class="m-4">
      <nav class="text-[#DC4E36]">
        <RouterLink
          class="poppins font-medium italic text-2xl fixed z-10 ml-2 hover:rotate-180 transition-none text-stroke"
          to="/"
        >
          thearavnsbækbode
        </RouterLink>
      </nav>
    </header>

    <main class="flex-grow">
      <RouterView />
    </main>

    <footer class="fixed bottom-1 right-4 w-full flex justify-end">
      <nav class="text-[#DC4E36] flex gap-6 m-4">
        <RouterLink class="font-medium italic text-2xl hover:rotate-6 text-stroke" to="/mystuff">
          work
        </RouterLink>
        <RouterLink class="font-medium italic text-2xl hover:-rotate-6 text-stroke" to="/about">
          about
        </RouterLink>
        <RouterLink class="font-medium italic text-2xl hover:rotate-6 text-stroke" to="/contact">
          contact
        </RouterLink>
      </nav>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

