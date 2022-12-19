<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header style="display:block;">
    <div class="wrapper">
    <p class="toplinks">
      <a href="https://reddit.com/" target="_blank" rel="noopener">Reddit</a>
      <a href="https://github.com/technetiumnerd" target="_blank" rel="noopener">Github</a>
      <a href="https://last.fm/user/technetiumnerd" target="_blank" rel="noopener">Last.fm</a>
    </p>
      <nav>
        <RouterLink to="/">Index</RouterLink>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/christian">Christian</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/setup">Setup things</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto;
}


</style>
