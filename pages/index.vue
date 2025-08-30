<script setup>
/* Stats */
const config = useRuntimeConfig()
const { data: stats } = await useFetch(config.public.apiBase + 'stats')

/* SEO Metatags */
const title = 'Un dret com una casa - JovesPV - Compromís'
const ogTitle = title
const description = 'Descripcio'
const ogImage = config.public.url + '/post/og-image.jpg'
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
      <SectionsLetter :count="stats.signatures" />
      <SectionsShare :count="stats.shares" />
    </div>
    <div class="bg-orange">
      <SectionsProposals />
    </div>
  </main>
</template>
