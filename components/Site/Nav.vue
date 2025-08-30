<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const scrolled = ref(false)

onMounted(() => {
  document.addEventListener('scroll', () => {
    const chart = document.querySelector('.rent-chart')
    const scrollY = window.scrollY
    const threshold = chart?.offsetTop
    scrolled.value = scrollY > threshold
  })
})
</script>

<template>
  <div class="campaign-header">
    <nav :class="['campaign-nav', { scrolled }]">
      <div class="flex gap-site w-full md:w-auto justify-between">
        <a href="https://jovespv.org" aria-label="JovesPV - Compromís" class="logo compromis">
          <SiteLogo />
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
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 6rem;
      pointer-events: none;
      background: linear-gradient(to bottom, rgba(2, 17, 27, .6), rgba(2, 17, 27, 0));
      z-index: 1000;
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
