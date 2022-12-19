<script lang="ts">
export default {
}
</script>

<template>
  <footer>
    <div id="footer" style="display:block;">
      <h3 style="text-align: center;">Du har nået bunden.</h3>
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
    <p id="pagebottom">Lavet i <a href="https://vuejs.org/"><img src="../assets/logo.svg">ue.js</a> af en eller andet årsag. Kører på en Raspberry Pi. Kastet afsted af Nginx.</p>
  </footer>
</template>

<style scoped>
footer {
  background-color: #2f2222;
  text-align: center;
}
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
  text-align: center;
  /*display: inline-block;
  left: 50%;
  transform: translateX(-50%);*/
}
#pagebottom img {
  height: 16px;
}
</style>
