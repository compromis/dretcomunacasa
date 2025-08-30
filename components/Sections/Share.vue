<template>
  <section id="share" class="share px-site py-12 lg:py-32 grid xl:grid-cols-6 gap-site xl:max-w-[1400px] mx-auto">
    <div class="xl:col-span-2">
      <h2 class="text-balance text-xl font-extrabold tracking-tight leading-[1.1]">
        Fes difusió a les teues xarxes
      </h2>
      <div class="lg:w-64 border-2 border-white mt-6 flex gap-2">
        <div class="text-xl p-3 mt-1">
          <Icon name="mingcute:send-plane-line" />
        </div>
        <div class="p-3">
          <p class="text-xl animated-number">
            {{ shares }}
          </p>
          <p class="text-base leading-[1.1]">persones ja ho han compartit</p>
        </div>
      </div>
    </div>
    <div class="xl:col-span-4">
      <div ref="card" class="share w-fit bg-white text-black text-base -rotate-1 mx-auto">
        <div class="w-fit mx-auto p-site">
          <img src="/post/post-ig.jpg" alt="MAZÓN POT LIMITAR EL PREU DEL LLOGUER PERÒ NO FA RES" class="w-full max-h-[50vh] object-fit" />
        </div>
        <div class="flex gap-2 lg:gap-4 flex-wrap justify-center border-t border-slate-300 p-site">
          <a :href="links.igStories" download class="share-button ig" :style="{ '--rotate-to': '1deg' }" @click="logShare('ig_stories')">
            <Icon name="humbleicons:mobile" class="icon" />
            Stories
          </a>
          <a :href="links.igPost" download class="share-button ig" :style="{ '--rotate-to': '2deg' }" @click="logShare('ig_post')">
            <Icon name="fa7-brands:instagram" class="icon" />
            Instagram Post
          </a>
          <a :href="links.whatsApp" class="share-button wa" :style="{ '--rotate-to': '-1deg' }" @click="logShare('whatsapp')">
            <Icon name="fa7-brands:whatsapp" class="icon" />
            WhatsApp
          </a>
          <a :href="links.x" class="share-button x" :style="{ '--rotate-to': '1deg' }" aria-label="X / Twitter" @click="logShare('x')">
            <Icon name="fa7-brands:x-twitter" class="icon" />
          </a>
          <a v-if="!!canShare" href="#" class="share-button other" :style="{ '--rotate-to': '-2deg' }" @click.prevent="share">
            <Icon name="humbleicons:share" class="icon" />
            Més...
          </a>
        </div>
        <div v-if="showDownloadedMessage" class="p-site bg-yellow font-extrabold flex gap-1 items-center" aria-live="polite">
          <Icon name="humbleicons:download" />
          S'ha descarregat la imatge per a compartir en stories, Instagram...
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  count: {
    type: Number,
    required: false
  }
})

const config = useRuntimeConfig()

const shares = ref(props.count || 0)
const showDownloadedMessage = ref(false)

const url = config.public.url
const text = encodeURIComponent('Mazón pot limitar el preu del lloguer però no fa res. Jo ja he signat per exigir-ho. Fes-ho tu també: ')

const links = computed(() => ({
  igStories: '/post/story-ig.jpg',
  igPost: '/post/post-ig.jpg',
  whatsApp: `https://api.whatsapp.com/send?text=${text}${url}`,
  x: `https://x.com/intent/post?text=${text}&url=${url}&hashtags=MazónDimissió`
}))

const payload = {
  title: 'Un dret com una casa - Joves PV - Compromís',
  text,
  url,
  image: url + '/post/og-image.jpg'
}

const canShare = computed(() => window && window.navigator.share)
const share = async () => {
  if (!!canShare.value) {
    await Promise.all([navigator.share(payload), logShare('native')])
  }
}

async function logShare (platform: string) {
  const response = await $fetch(config.public.apiBase + 'share', {
    method: 'POST',
    body: {
      platform
    }
  })
  shares.value = response.shares
  if (platform.startsWith('ig')) {
    showDownloadedMessage.value = true
  }
}

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
  font-size: var(--text-md);
  background-color: var(--color-blue);
  color: var(--color-white);
  font-weight: 900;
  padding: .25em .5em;
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