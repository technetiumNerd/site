<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Her i hullet har jeg forberedt en præsentation til lige netop dig.
    </h3>
    <p>
      <a href="https://reddit.com/" target="_blank" rel="noopener">Reddit</a>
      <a href="https://github.com/technetiumnerd" target="_blank" rel="noopener">Github</a>
      <a href="https://last.fm/user/technetiumnerd" target="_blank" rel="noopener">Last.fm</a>
    </p>
    
  </div>
</template>

<style scoped>
h1 {
  padding-top: 16px;
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  text-align: center;
}

.greetings *{
  text-align: center;
}
p {
  padding: 16px 8px;
}
p a {
  padding: 12px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
</style>
