<script lang="ts">
export default {
}
</script>

<template>
  <h3 style="text-align: center;">Du har nået bunden.</h3>
  <div id="maindiv" style="display:block;">
    <p>
    Lær at svømme i små, sorte huller.
    De er at finde over det hele på internettet.
    Det er noget man gør for at bruge tiden på noget.
    Ikke nødvendigvis noget særligt specifikt, med bare noget.
    </p>
    <p>
    To minutter her og der, det er da også fint. Tid til andet, tid tilovers. 
    Nu har jeg juleferie, og jeg har fundet nyt legetøj.
    Hvad er klokken? Ingen græder over det. 
    </p>
  </div>
  <div id="pagebottom">Lavet i <a href="https://vuejs.org/"><img src="src/assets/logo.svg">ue.js</a> af en eller andet årsag. Kører på en Raspberry Pi. Kastet afsted af Nginx.</div>
</template>

<style scoped>
button {
  font-weight: bold;
}
h3 {
  margin: 16px 12px 8px;
}
p {
  padding: 4px 0;
}
.imgtext {
  display: block;
}
#pagebottom {
  padding: 8px;
  margin: 2px;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}
#pagebottom img {
  height: 16px;
}
</style>