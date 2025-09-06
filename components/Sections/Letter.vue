<template>
  <section id="signa" class="sign px-site py-12 lg:py-32 grid xl:grid-cols-6 gap-site xl:max-w-[1400px] mx-auto">
    <div class="xl:col-span-2">
      <h2 class="text-balance text-xl font-extrabold tracking-tight leading-[1.1]">
        Signa perquè s’aplique la lleidel lloguer
      </h2>
      <div class="lg:w-64 border-2 border-white mt-6 flex gap-2">
        <div class="text-xl p-3 mt-1">
          <Icon name="mingcute:send-plane-line" />
        </div>
        <div class="p-3">
          <p class="text-xl animated-number">
            {{ signatures }}
          </p>
          <p class="text-base leading-[1.1]">signatures rebudes i correus enviats a Carlos Mazón</p>
        </div>
      </div>
    </div>
    <div class="xl:col-span-4">
      <form v-if="!submitted" ref="card" @submit.prevent="submit" class="letter bg-white text-black text-base lg:rotate-1 max-w-[800px] mx-auto">
        <div class="px-site py-2 border-b border-slate-300 grid grid-cols-[5.5rem_1fr] lg:grid-cols-[7rem_1fr] gap-2 items-center">
          <div class="text-right">
            Per a
          </div>
          <div>
            <a href="mailto:presidencia@gva.es" class="bg-slate-200 py-1 px-2 rounded-lg whitespace-nowrap inline-block w-full lg:w-auto">
              <strong class="me-2 pe-2 border-r border-slate-400">Carlos Mazón</strong> presidencia@gva.es
            </a>
          </div>
        </div>
        <div class="px-site py-2 border-b border-slate-300 grid grid-cols-[5.5rem_1fr] lg:grid-cols-[7rem_1fr] gap-2 items-center">
          <label class="text-right">
            De
          </label>
          <div>
            <input type="email" v-model="form.email" required class="bg-slate-200 py-1 px-2 font-bold w-full lg:w-auto lg:min-w-96 field-sizing-content rounded-lg placeholder-slate-500 focus:outline-orange h-[2em]" placeholder="Escriu el teu e-mail" aria-label="El teu e-mail" maxlength="125" />
          </div>
        </div>
        <div class="px-site py-2 border-b border-slate-300 grid grid-cols-[5.5rem_1fr] lg:grid-cols-[7rem_1fr] gap-2 items-center">
          <label class="text-right">
            Nom
          </label>
          <div>
            <input type="text" v-model="form.name" required class="bg-slate-200 py-1 px-2 font-bold w-full lg:w-auto lg:min-w-96 field-sizing-content rounded-lg placeholder-slate-500 focus:outline-orange h-[2em]" placeholder="Escriu el teu nom" aria-label="El teu nom" maxlength="125" />
          </div>
        </div>
        <div class="px-site py-2 border-b border-slate-300 grid grid-cols-[5.5rem_1fr] lg:grid-cols-[7rem_1fr] gap-2 items-center">
          <label class="text-right">
            Codi postal
          </label>
          <div>
            <input type="text" v-model="form.postal_code" pattern="\d*" class="bg-slate-200 py-1 px-2 font-bold w-full lg:w-auto lg:min-w-64 field-sizing-content rounded-lg placeholder-slate-500 focus:outline-orange h-[2em]" placeholder="Escriu el teu codi postal" maxlength="5" />
          </div>
        </div>
        <div class="px-site py-4">
          <p>Bon dia, Carlos Mazón,</p>
          <p>Soc
            {{ form.name || '__________' }}
          , una persona jove afectada per l'actual situació del lloguer al País Valencià.</p>
          <p>Com a president de la Generalitat Valenciana (tant de bo no ho fores), des de l’any 2023 tens la possibilitat d'aplicar la Llei d’Habitatge per a posar límit als preus del lloguer, però no ho fas. </p>
          <p>Això està provocant que moltes persones com jo haguem de destinar una part excessiva del nostre sou a pagar l'habitatge, vivint en una situació d'inestabilitat i precarietat constant.</p>
          <p>Per tot açò, exigisc que s’aplique el límit al preu del lloguer i, com no, #MazónDimissió.</p>
        </div>
        <input type="text" class="sr-only" aria-label="No escrigues res" v-model="form.control" />
        <div class="px-site py-4 border-t border-slate-300 grid lg:grid-cols-2 gap-site items-center">
          <div>
            <label class="text-sm flex gap-2 items-center">
              <input type="checkbox" v-model="form.terms" required class="scale-125 accent-orange" />
              <span>Accepte la <a href="" class="underline">Política de privacitat de Compromís</a></span>
            </label>
          </div>
          <div class="flex lg:justify-end">
            <button
              type="submit"
              :class="[
                'flex items-center gap-2 bg-orange text-white font-extrabold py-1 px-3 text-md cursor-pointer hover:scale-110 hover:-rotate-3 transition',
                { 'opacity-50': submitting }
              ]"
              :disabled="submitting"
            >
              Signa i envia
              <Icon name="ri:send-plane-fill" />
            </button>
          </div>
          <div v-if="errors" class="col-span-2 bg-red-200 py-2 px-4 font-bold text-red-800">
            Hi ha hagut un error enviant el formulari. Torna-ho a intentar més tard.
          </div>
        </div>
      </form>
      <div v-else class="bg-white text-black">
        <div class="p-site text-balance">
          <h2 class="text-xl">
            Correu enviat!
          </h2>
          <p class="text-md mb-2">
            Gràcies per ajudar-nos a exigir a Mazón que aplique la llei del lloguer.
          </p>
          <p class="text-md">
            Comparteix la campanya entre els teus amics i amigues perquè arribe a més gent!
          </p>
        </div>

        <div class="border-t border-slate-300 p-site">
          <a href="#share" class="inline-flex font-extrabold text-md text-white bg-orange py-2 px-4 hover:scale-125 hover:-rotate-3 transition">
            Comparteix la campanya
          </a>
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
const submitting = ref(false)
const submitted = ref(false)
const errors = ref(null)

const form = reactive({
  name: '',
  email: '',
  postal_code: '',
  terms: false,
  control: ''
})

const signatures = ref(props.count || 0)

async function submit () {
  if (submitting.value) return
  submitting.value = true

  try {
    const response = await $fetch(config.public.apiBase + 'sign', {
      method: 'POST',
      body: form
    })
    submitted.value = true
    signatures.value = response.signatures
  } catch (err) {
    errors.value = err.data
  } finally {
    submitting.value = false
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

  $gsap.from('.sign .animated-number', {
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
.letter {
  p {
    margin-bottom: .75em;
  }
}
</style>