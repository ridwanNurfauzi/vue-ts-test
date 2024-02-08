<template>
  <div class="min-h-screen min-w-full flex flex-col">
    <div class="bg-white sticky top-0">
      <Navbar></Navbar>
    </div>
    <div class="flex-1 flex flex-col">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router';
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped></style>
