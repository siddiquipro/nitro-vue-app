<template>
  <main class="container">
    <h1>{{ msg }}</h1>
    <p>This is a test app for nitro</p>
    <button @click="count++">Count: {{ count }}</button>

    <button @click="getServerData">Get Server Data</button>

    <pre>
      {{ serverData }}
    </pre>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
const msg = "Hello World! 👋";
const count = ref(0);
const serverData = ref("");

const getServerData = async () => {
  const res = await fetch("/api");
  serverData.value = await res.json();
};
</script>

<style scoped>
.container {
  background-color: #fff;
  margin-top: 100px;
  display: grid;
  gap: 1.5rem;
}

button {
  padding: 0.5rem 1rem;
  outline: transparent;
  border: none;
  background-color: #0066ff;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
