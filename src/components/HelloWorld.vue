<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Vi er mange der mangler svar.
    </h3>
    <p>
      <a href="https://reddit.com/" target="_blank" rel="noopener">Reddit</a>
      <a href="https://github.com/technetiumnerd" target="_blank" rel="noopener">Github</a>
    </p>
    
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3,p {
  text-align: center;
}
p a {
  padding: 8px;

}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
