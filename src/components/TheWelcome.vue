<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>En bog</template>

    <a href="https://www.goodreads.com/book/show/386162.The_Hitchhiker_s_Guide_to_the_Galaxy" target="_blank" rel="noopener">Hitchhiker's Guide to the Galaxy</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Snak</template>

    Jeg er altid frisk på en snak. Altså bort set fra når jeg ikke er.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Hjerteikon</template>

    Der var et hjerteikon, lol.
  </WelcomeItem>
</template>
