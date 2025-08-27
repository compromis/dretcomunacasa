<template>
  <div
    ref="card"
    class="card bg-white text-black p-site xl:p-8 text-lg leading-snug font-semibold"
    :style="{
      '--rotate': `${rotateTo}deg`,
    }"
  >
    <slot />

    <div v-if="$slots.source" class="mt-4 text-base font-medium opacity-75">
      <slot name="source" />
    </div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const card = ref(null)
const rotateTo = useState(`rotate-from-${props.id}`, () => Math.random() * 5 - 3)
const rotateFrom = useState(`rotate-to-${props.id}`, () => Math.random() * 10 - 8)

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
.card {
  transform: rotate(var(--rotate));
}
</style>