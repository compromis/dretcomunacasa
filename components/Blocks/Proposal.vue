<template>
  <article class="grid grid-cols-12 gap-site">
    <div class="col-span-12 lg:col-span-3">
      <h3 class="font-extrabold text-lg xl:text-xl leading-[1.1] text-balance sticky top-24">
        <slot name="heading" />
      </h3>
    </div>
    <div class="col-span-12 lg:col-span-4 text-base xl:text-md">
      <div class="points sticky top-24 font-semibold">
        <slot name="points" />
      </div>
    </div>
    <div class="col-span-12 lg:col-span-5 flex flex-col gap-8">
      <slot name="headlines" />
    </div>
  </article>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.points {
  p {
    margin-bottom: 1em;
  }

  ul {
    list-style-type: '→';

    li {
      margin-bottom: .5em;
      padding-left: 1em;
      margin-left: 1em;
    }
  }
}
</style>