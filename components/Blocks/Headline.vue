<template>
  <div class="headline-wrapper transition">
    <a
      ref="card"
      :href="url"
      target="_blank"
      rel="noopener"
      class="headline block bg-white text-black p-4"
      :style="{
        '--rotate': `${rotateTo}deg`,
      }"
    >
      <img :src="source[1]" :alt="source[0]" class="h-6 mb-2 grayscale" />
      <h4 class="font-serif text-xl leading-[1.1]">
        <slot />
      </h4>
    </a>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  source: {
    type: Array,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

const { $gsap } = useNuxtApp()

const card = ref(null)
const rotateTo = useState(`rotate-from-${props.url}`, () => Math.random() * 4 - 2)
const rotateFrom = useState(`rotate-to-${props.url}`, () => Math.random() * 10 - 8)

onMounted(() => {
  $gsap.from(card.value, {
    opacity: 0,
    y: 75,
    rotate: rotateFrom.value,
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
.headline {
  rotate: var(--rotate);
}

.headline-wrapper {
  &:hover {
    scale: 1.05;
    rotate: -1deg;
  }
}
</style>