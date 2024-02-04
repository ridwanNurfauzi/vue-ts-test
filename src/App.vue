<template>
  <div>
    <Navbar></Navbar>
  </div>
  <div>
    <RouterView></RouterView>
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
