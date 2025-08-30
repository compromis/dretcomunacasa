<template>
  <section id="signa" class="px-site py-12 lg:py-32 grid xl:grid-cols-6 gap-12 xl:max-w-[1800px] mx-auto">
    <div class="xl:col-span-2">
      <h2 class="text-balance text-xl font-extrabold tracking-tight leading-[1.1]">
        Fes difusió a les teues xarxes
      </h2>
      <div class="w-64 border-2 border-white mt-6 flex gap-2">
        <div class="text-xl p-3 mt-1">
          <Icon name="ri:send-plane-fill" />
        </div>
        <div class="p-3">
          <p class="text-xl">345</p>
          <p class="text-base leading-[1.1]">persones ja ho han compartit</p>
        </div>
      </div>
    </div>
    <div class="xl:col-span-4">
      <div ref="card" class="share bg-white text-black text-base p-site -rotate-1">
        <div class="flex gap-site flex-wrap">
          <a href="" class="share-button ig">
            Instagram Stories
          </a>
          <a href="" class="share-button ig">
            Instagram Post
          </a>
          <a href="" class="share-button wa">
            WhatsApp
          </a>
          <a href="" class="share-button x">
            X
          </a>
          <a href="" class="share-button other">
            Alres...
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()
const card = ref(null)

onMounted(() => {
  $gsap.from(card.value, {
    opacity: 0,
    y: 75,
    rotate: '-3deg',
    scale: 0.85,
    ease: 'Elastic.easeOut',
    duration: 1.25,
    scrollTrigger: {
      trigger: card.value,
      start: 'top bottom',
      toggleActions: "restart none none reverse"
    },
  })
})
</script>

<style lang="scss" scoped>

</style>