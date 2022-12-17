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
  <h1 style="text-align: center;font-size: 48px;">Velkommen til et sort hul</h1>
  <div id="maindiv" style="display:block;">
    <h2 >Vi er mange, og vi er hvem som helst.</h2>
    <p>Små, sorte huller over det hele på internettet. Ingen ved hvorfor, og sådan er det bare.
    Det er bare noget der sker når et menneske møder en maskine.</p>
    <a href="https://xkcd.com/597/"><img src="../assets/addiction.png"><span class="imgtext">Fra https://xkcd.com/597/</span></a>
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
