<script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  }
}
function Sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
</script>

<template>
  <h3 style="text-align: center;">Du har nået bunden.</h3>
  <div id="maindiv" style="display:block;">
    <p>Lær at svømme i små, sorte huller.
    De er at finde over det hele på internettet.
    Det er noget man gør for at bruge tiden på noget.
    Ikke nødvendigvis noget særligt specifikt, med bare noget.</p>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
.imgtext {
  display: block;
}
</style>
