<script lang="ts" setup>
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
</script>

<template>
  <div>
    <div>Jumlah: {{ counter.count }}</div>
    <div>Double: {{ counter.doubleCount }}</div>
    <div>
      <button @click="counter.increment()">Tambah</button>
      <button @click="counter.decrement()">Kurang</button>
    </div>
  </div>
</template>