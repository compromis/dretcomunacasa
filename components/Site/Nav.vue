<script setup>
const scrolled = ref(false)
const section = ref('blue')
const { $gsap } = useNuxtApp()

onMounted(() => {
  document.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    const shareSection = document.querySelector('#share')?.getBoundingClientRect()
    const shareTop = shareSection.top + scrollY
    const shareHeight = shareSection.height || 0
    const sectionThreshold = shareTop + (shareHeight / 2)
    scrolled.value = scrollY > 10
    section.value = scrollY > sectionThreshold ? 'orange' : 'blue'  
  })
})

watch(section, (newSection) => {
  const color = newSection === 'orange' ? '#DE5413' : '#1F4C90'
  document.querySelector('meta[name="theme-color"]').setAttribute('content', color)
})
</script>

<template>
  <div :class="['campaign-header', { scrolled, blue: section === 'blue', orange: section === 'orange' }]">
    <nav class="campaign-nav">
      <div class="flex gap-site w-full md:w-auto justify-between">
        <a href="https://jovespv.org" aria-label="JovesPV - Compromís" class="logo compromis">
          <SiteLogo /> {{ section }}
        </a>
      </div>
      <div class="campaign-name flex text-md font-extrabold leading-[1] text-right">
        Un dret com una casa
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.campaign {
  &-nav {
    position: fixed;
    display: flex;
    align-items: center;
    padding: 1rem var(--spacing-site);
    justify-content: space-between;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1100;

    .logo {
      display: flex;
      align-items: center;
      color: var(--color-white);
      gap: 1rem;
      text-decoration: none;

      svg {
        height: 2.25rem;
      }

      &.compromis svg {
        height: 1.35rem;
      }
    }
  }

  &-header {
    &::before,
    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 6rem;
      pointer-events: none;
      background: linear-gradient(to bottom, #1F4C90, #1f4c9000);
      z-index: 1000;
      transform: translateY(-100%);
      transition: 1s ease;
    }

    &::after {
      background: linear-gradient(to bottom, #DE5413, #de531300);
    }

    &.scrolled::before {
      transform: translateY(0);
    }

    &.orange::after {
      transform: translateY(0);
    }

    &.orange::before {
      transform: translateY(-100%);
    }
  }
}

@media (max-width: 46rem) {
  .campaign {
    &-nav {
      position: relative;

      .logo {
        svg {
          height: 1.75rem;
        }

        &.compromis svg {
          height: 1rem;
        }
      }
    }

    &-header {
      &::before {
        display: none;
      }
    }
  }
}
</style>
