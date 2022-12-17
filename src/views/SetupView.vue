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
  <h1>BSPWM, SXHKD, Polybar, neovim, vscode</h1>
  <div id="maindiv">
  <p><a href="/bspwm.png" target="_blank"><img src="/src/assets/bspwm.png"><span class="imgtext">Desktoppen på min bærbare.</span></a>
    Min desktop ser tilsvarende ud. Ingen bars på de ydre skærme.
    VScode med Vim-mode, selvfølgelig.</p>
    <p><a href="/neofetch.png" target="_blank"><img src="/src/assets/neofetch.png"><span class="imgtext">Info om min laptop. Arch Linux.</span></a>
    Jeg er godt tilfreds med de 12 AMD-kerner.</p>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  padding: 16px 8px;
}
img {
  max-width: 100%;
}
p {
  padding: 12px 0;
}
.imgtext {
  display: block;
}
</style>
