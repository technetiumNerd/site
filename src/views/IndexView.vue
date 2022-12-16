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
  <h1 style="text-align: center;font-size: 48px;">Hej Christian</h1>
  <div id="maindiv">
    <h2 >Jeg har overvåget din mor i 14 dage og 19 sekunder, og jeg er bange for hendes tilstand.
    Hun har sagt skøre ting, og råbt af naboen.
    Naboen havde også været træls i en længere periode, hvilket der også er et kendt klip med.
    Ham snakker vi så ikke mere med.</h2>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
