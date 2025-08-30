<template>
  <section id="share" class="share px-site py-12 lg:py-32 grid xl:grid-cols-6 gap-site xl:max-w-[1400px] mx-auto">
    <div class="xl:col-span-2">
      <h2 class="text-balance text-xl font-extrabold tracking-tight leading-[1.1]">
        Fes difusió a les teues xarxes
      </h2>
      <div class="lg:w-64 border-2 border-white mt-6 flex gap-2">
        <div class="text-xl p-3 mt-1">
          <Icon name="ri:send-plane-fill" />
        </div>
        <div class="p-3">
          <p class="text-xl animated-number">345</p>
          <p class="text-base leading-[1.1]">persones ja ho han compartit</p>
        </div>
      </div>
    </div>
    <div class="xl:col-span-4">
      <div ref="card" class="share w-fit bg-white text-black text-base -rotate-1 mx-auto">
        <div class="w-fit mx-auto p-site">
          <img src="/post/post-ig.jpg" alt="MAZÓN POT LIMITAR EL PREU DEL LLOGUER PERÒ NO FA RES" class="w-full max-h-[50vh] object-fit" />
        </div>
        <div class="flex gap-site flex-wrap justify-center border-t border-slate-300 p-site">
          <a href="" class="share-button ig" :style="{ '--rotate-to': '1deg' }">
            <Icon name="fa7-brands:instagram" class="icon" />
            Instagram Stories
          </a>
          <a href="" class="share-button ig" :style="{ '--rotate-to': '2deg' }">
            <Icon name="fa7-brands:instagram" class="icon" />
            Instagram Post
          </a>
          <a href="" class="share-button wa" :style="{ '--rotate-to': '-1deg' }">
            <Icon name="fa7-brands:whatsapp" class="icon" />
            WhatsApp
          </a>
          <a href="" class="share-button x" :style="{ '--rotate-to': '1deg' }" aria-label="X / Twitter">
            <Icon name="fa7-brands:x-twitter" class="icon" />
          </a>
          <a href="" class="share-button other" :style="{ '--rotate-to': '-2deg' }">
            <Icon name="famicons:share-outline" class="icon" />
            Més...
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

  $gsap.from('.share .animated-number', {
    textContent: 0,
    duration: 2,
    ease: 'Power1.easeIn',
    snap: { textContent: 1 },
    stagger: 1,
    scrollTrigger: {
      trigger: card.value,
      start: 'top bottom',
      toggleActions: "restart none none reverse"
    },
  })
})
</script>

<style lang="scss" scoped>
.share-button {
  font-size: vafr(--text-md);
  background-color: var(--color-blue);
  color: var(--color-white);
  font-weight: 900;
  padding: .5em 1em;
  transition: .25s ease;
  display: flex;
  gap: .5em;
  align-items: center;

  &:hover {
    background-color: var(--color-orange);
    rotate: var(--rotate-to, 2deg);
    scale: 1.05;
  }
}
</style>