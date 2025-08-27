<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  htmlAttrs: { lang: head.value.htmlAttrs.lang, dir: head.value.htmlAttrs.dir, class: 'bg-blue text-white' },
  meta: [
    { name: 'theme-color', content: '#1F4C90' },
    { name: 'msapplication-TileColor', content: '#1F4C90' },
    ...head.value.meta
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'https://compromis.net/sub/icons/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://compromis.net/sub/icons/favicon32.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://compromis.net/sub/icons/favicon192.png' },
    { rel: 'stylesheet', href: 'https://compromis.net/sub/fonts/manrope.css?variable' },
    ...head.value.link
  ],
  script: [
    { src: 'https://cloud.umami.is/script.js', 'data-website-id': '', defer: true }
  ]
})
</script>

<template>
  <div class="bg-blue font-medium">
    <SiteNav />
    <slot />
    <SiteFooter />
  </div>
</template>
