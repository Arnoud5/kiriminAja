<template>
  <nav class="fixed bg-gray-50 bottom-0 right-0 rounded-full m-3 shadow-2xl">
    <div class="p-4 flex flex-col-reverse items-center">
      <img @click="openNav" class="w-8 h-8" src="/menu.png" alt="" />

      <div v-show="navbar">
        <NuxtLink to="/">
          <img class="w-6" src="/home.png" alt="" />
        </NuxtLink>
        <NuxtLink to="/about">
          <img class="w-6 my-4" src="/team.png" alt="" />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const navbar = ref(false);

function openNav (){
    navbar.value = !navbar.value
    console.log('navbr click')
}

</script>
