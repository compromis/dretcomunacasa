<template>
  <section id="signa" class="sign px-site py-12 lg:py-32 grid xl:grid-cols-6 gap-site xl:max-w-[1400px] mx-auto">
    <div class="xl:col-span-2">
      <h2 class="text-balance text-xl font-extrabold tracking-tight leading-[1.1]">
        Signa perquè s’aplique la llei del lloguer
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
        <div class="px-3 lg:px-site py-2 border-b border-slate-300 grid lg:grid-cols-[9rem_1fr] gap-2 items-center">
          <div class="lg:text-right">
            Per a
          </div>
          <div>
            <a href="mailto:presidencia@gva.es" class="bg-slate-200 py-1 px-2 rounded-lg whitespace-nowrap inline-block w-full lg:w-auto">
              <strong class="me-2 pe-2 border-r border-slate-400">Carlos Mazón</strong> presidencia@gva.es
            </a>
          </div>
        </div>
        <div class="px-3 lg:px-site py-2 border-b border-slate-300 grid lg:grid-cols-[9rem_1fr] gap-2 items-center">
          <label class="lg:text-right">
            Nom i cognoms
          </label>
          <div>
            <input type="text" v-model="form.name" required class="bg-slate-200 py-1 px-2 font-bold w-full lg:w-auto lg:min-w-96 field-sizing-content rounded-lg placeholder-slate-500 focus:outline-orange h-[2em]" placeholder="Nom i cognoms" aria-label="El teu nom i cognoms" maxlength="125" />
          </div>
        </div>
        <div class="px-3 lg:px-site py-2 border-b border-slate-300 grid lg:grid-cols-[9rem_1fr] gap-2 items-center">
          <label class="lg:text-right">
            DNI/NIE
          </label>
          <div>
            <input type="text" v-model="form.id_card" required class="bg-slate-200 py-1 px-2 font-bold w-full lg:w-auto lg:min-w-96 field-sizing-content rounded-lg placeholder-slate-500 focus:outline-orange h-[2em]" placeholder="El teu DNI o NIE" aria-label="El teu DNI o NIE" maxlength="125" />
            <div class="text-red-600 font-extrabold text-sm">{{ errors?.errors?.hasOwnProperty('id_card') ? 'El format de DNI/NIE és invalid' : '' }}</div>
          </div>
        </div>
        <div class="px-3 lg:px-site py-2 border-b border-slate-300 grid lg:grid-cols-[9rem_1fr] gap-2 items-center">
          <label class="lg:text-right">
            E-mail
          </label>
          <div>
            <input type="email" v-model="form.email" required class="bg-slate-200 py-1 px-2 font-bold w-full lg:w-auto lg:min-w-96 field-sizing-content rounded-lg placeholder-slate-500 focus:outline-orange h-[2em]" placeholder="El teu e-mail" aria-label="El teu e-mail" maxlength="125" />
          </div>
        </div>
        <div class="px-3 lg:px-site py-2 border-b border-slate-300 grid lg:grid-cols-[9rem_1fr] gap-2 items-center">
          <label class="lg:text-right">
            Telèfon
          </label>
          <div>
            <input type="tel" v-model="form.phone" class="bg-slate-200 py-1 px-2 font-bold w-full lg:w-auto lg:min-w-96 field-sizing-content rounded-lg placeholder-slate-500 focus:outline-orange h-[2em]" placeholder="El teu mòbil (opcional)" aria-label="El teu mòbil (opcional)" maxlength="125" />
          </div>
        </div>
        <div class="px-3 lg:px-site py-2 border-b border-slate-300 grid lg:grid-cols-[9rem_1fr] gap-2 items-center">
          <label class="lg:text-right">
            Municipi
          </label>
          <div>
            <input type="text" v-model="form.municipality" required class="bg-slate-200 py-1 px-2 font-bold w-full lg:w-auto lg:min-w-64 field-sizing-content rounded-lg placeholder-slate-500 focus:outline-orange h-[2em]" placeholder="Escriu el municipi on vius" maxlength="5" />
          </div>
        </div>
        <div class="px-3 lg:px-site py-4">
          <p>Bon dia, Carlos Mazón,</p>
          <p>Soc
            {{ form.name || '__________' }}
          , una persona jove afectada per l'actual situació del lloguer al País Valencià.</p>
          <p>Com a president de la Generalitat Valenciana (tant de bo no ho fores), des de l’any 2023 tens la possibilitat d'aplicar la Llei d’Habitatge per a posar límit als preus del lloguer, però no ho fas. </p>
          <p>Això està provocant que moltes persones com jo hàgem de destinar una part excessiva del nostre sou a pagar l'habitatge, vivint en una situació d'inestabilitat i precarietat constant.</p>
          <p>Per tot açò, exigisc que s’aplique el límit al preu del lloguer i, per descomptat, #MazónDimissió.</p>
        </div>
        <input type="text" class="sr-only" aria-label="No escrigues res" v-model="form.control" />
        <div class="px-site py-4 border-t border-slate-300 grid lg:grid-cols-2 gap-site items-center">
          <div>
            <label class="text-sm flex gap-2 items-center">
              <input type="checkbox" v-model="form.terms" required class="scale-125 accent-orange" />
              <span>Accepte la <a href="https://compromis.net/avis-legal/" class="underline" target="_blank">Política de privacitat de Compromís</a></span>
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
            Hi ha hagut un error enviant el formulari.
            {{ errors.message }}
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
  id_card: '',
  municipality: '',
  phone: '',
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