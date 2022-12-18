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
  <h1>Velkommen til et sort hul</h1>
  <div id="maindiv">
    <h2 >Vi er mange, og vi er hvem som helst.</h2>
    <p>Små, sorte huller over det hele på internettet. Ingen ved hvorfor, og sådan er det bare.
    Det er bare noget der sker når et menneske møder en maskine.</p>
    <a href="https://xkcd.com/597/" target="_blank"><div><img src="../assets/addiction.png"><span class="imgtext">Fra https://xkcd.com/597/</span></div></a>
  </div>
</template>

<style scoped>
div p {
  padding-bottom: 12px;
}
button {
  font-weight: bold;
}
h1 {
  text-align: center;
  padding: 16px 8px;

}
h2 {
  text-align: center;
  padding: 8px;
}
#maindiv img {
  max-width:100%
}
#maindiv a div {
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}
.imgtext {
  display: block;
}
</style>
