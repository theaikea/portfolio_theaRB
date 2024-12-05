<template>
  <div class="grid grid-cols-2">
    <header class="m-4">
      <nav class="text-[#DC4E36]">
        <RouterLink class="poppins font-bold italic text-2xl fixed z-10 ml-2 hover:rotate-180" to="/">thearavnsbækbode</RouterLink>
      </nav>
    </header>

    <footer class="fixed bottom-0 right-4">
      <nav class="text-[#DC4E36] grid grid-cols-3 justify-items-right m-4">
        <RouterLink class="font-bold italic text-2xl hover:rotate-6 " to="/mystuff">work</RouterLink>
        <RouterLink class="font-bold italic text-2xl hover:-rotate-6" to="/about">about</RouterLink>
        <RouterLink class="font-bold italic text-2xl hover:rotate-6" to="/contact">contact</RouterLink>
      </nav>
    </footer>

  </div>

<RouterView/>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>