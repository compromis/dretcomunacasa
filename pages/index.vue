<script setup>
import { SectionsProposals } from '#components'

/* SEO Metatags */
const title = 'Dret com una casa'
const ogTitle = title
const description = 'Descripcio'
const ogImage = ''
const keywords = ''
const twitterSite = 'jovespv'
useServerSeoMeta({
  title,
  ogTitle,
  description,
  ogDescription: description,
  ogImage,
  twitterCard: 'summary_large_image',
  keywords,
  ogSiteName: title,
  twitterSite,
  ogType: 'website'
})

useHead({ title })
</script>

<template>
  <main>
    <SectionsHeader />
    <SectionsIntro />
    <div class="bg-gradient-to-b from-blue to-orange">
      <SectionsLetter />
      <SectionsShare />
    </div>
    <div class="bg-orange">
      <SectionsProposals />
    </div>
  </main>
</template>
