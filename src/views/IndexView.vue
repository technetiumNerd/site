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
  <div class="sort"><p>Grav dybere</p></div>
  <div class="sort"><p>Grav som har du gravet før</p>
                    <p class="rightalign">vim</p>
  </div>
  <div class="sort"><p>Det er landets mest spændende hul</p>
                    <p class="leftalign">neovim</p>
  </div>
  <div class="sort"><p>Sorte huller går dybere</p>
                    <p>Her fik du en smagsprøve</p>
  </div>
  <div class="sort hul"><p>Velkommen til slutningen af hullet<br/>og resten af din dag</p></div>
</template>

<style scoped>
.sort {
  height: 800px;
}
.sort p{
  margin-top: 200px;
  text-align: center;
  font-size: 24px;
  vertical-align: middle;
}
.rightalign {
  text-align: right !important;
}
.leftalign {
  text-align: left !important;
}
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
#maindiv a div {
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}
.imgtext {
  display: block;
}
</style>
