<template>
  <header class="bg-[#2C3D4E] drop-shadow-[0_30px_36px_rgba(0,0,0,0.1)]">
    <nav class="flex justify-center items-center container mx-auto">
      <router-link to="/">
        <h1 class="text-[3rem] text-white font-bold">
          <span class="text-green-400">Dev</span>Movies
        </h1>
      </router-link>
    </nav>
  </header>
  <main class="">
    <router-view />
  </main>
</template>

<style></style>
