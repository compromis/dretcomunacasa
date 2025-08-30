<template>
  <section class="proposals px-site py-12 lg:py-32 xl:max-w-[1800px] mx-auto">
    <div class="header">
      <h2 class="font-headline uppercase font-normal leading-[.9]">
        <span class="inline-block">Mereixem</span> {{ ' ' }}
        <span class="inline-block">una</span> {{ ' ' }}
        <span class="inline-block">casa</span>
      </h2>
      <p class="font-extrabold text-lg leading-snug text-balance xl:-mt-4">
        Com ho farem?
      </p>
    </div>
    <div class="flex flex-col gap-24 mt-24">
      <BlocksProposal>
        <template #heading>
          Per lluitar contra el despoblament
        </template>
        <template #points>
          <p>Vius en un poble que es buida? No volem marxar, volem quedar-nos.</p>
          <ul>
            <li>Ajudes per rehabilitar habitatges i destinar-los a <UtilsAnnotated color="highlight">lloguer jove assequible</UtilsAnnotated></li>
            <li>Suport per quedar-te o tornar al poble</li>
          </ul>
        </template>
        <template #headlines>
          <BlocksHeadline :source="['Safor Guia', saforguiaLogo]" url="https://saforguia.com/art/77213/almisera-comprara-y-reformara-una-casa-para-destinarla-a-alquiler-para-jovenes">
            Almiserà comprará y reformará una casa para destinarla a <UtilsAnnotated>alquiler para jóvenes</UtilsAnnotated>
          </BlocksHeadline>
          <BlocksHeadline :source="['Castellón Plaza', castellonplazaLogo]" url="https://castellonplaza.com/castellonplaza/comarcas/betxi-dota-con-10000-euros-una-convocatoria-de-ayudas-para-rehabilitar-fachadas-del-casco-antiguo">
            Betxí dota con <UtilsAnnotated type="highlight">10.000 euros</UtilsAnnotated> una convocatoria de ayudas para rehabilitar fachadas del casco antiguo
          </BlocksHeadline>
          <BlocksHeadline :source="['COPE', copeLogo]" url="https://www.cope.es/emisoras/comunidad-valenciana/castellon-provincia/castellon/noticias/detener-despoblacion-una-prioridad-para-castellon-20240202_3125140#google_vignette">
            Detener la despoblación es una prioridad para Castellón
          </BlocksHeadline>
        </template>
      </BlocksProposal>
      <BlocksProposal>
        <template #heading>
          Per fer front al turisme de masses
        </template>
        <template #points>
          <p>Vius en una ciutat o poble saturat pel turisme? L’habitatge no pot ser només per a turistes.</p>
          <ul>
            <li><UtilsAnnotated color="highlight">Limitar i regular pisos turístics</UtilsAnnotated></li>
            <li>Penalitzar l’especulació</li>
            <li>Limitar la intervenció de <UtilsAnnotated type="box" color="highlight">fons voltors</UtilsAnnotated> i grans tenedors en la compra i lloguer d’habitatge</li>
          </ul>
        </template>
        <template #headlines>
          <BlocksHeadline :source="['À Punt', apuntLogo]" url="https://www.apuntmedia.es/noticies/politica/compromis-reuneix-4-000-denuncies-veinals-pisos-turistics-il-legals-valencia_1_1757818.html">
            Compromís reuneix <UtilsAnnotated type="box">4.000</UtilsAnnotated> denúncies veïnals contra pisos turístics il·legals a València
          </BlocksHeadline>
          <BlocksHeadline :source="['Cadena SER', serLogo]" url="https://cadenaser.com/comunitat-valenciana/2024/12/13/compromis-presenta-alegaciones-en-el-ultimo-tramite-de-licencia-ambiental-para-la-construccion-de-un-macro-camping-de-lujo-en-gandia-radio-gandia/">
            Compromís presenta alegaciones contra la construcción de un macro camping de lujo en Gandia
          </BlocksHeadline>
          <BlocksHeadline :source="['La Marin Plaça', lamarinaLogo]" url="https://lamarina.eldiario.es/ca/2024/09/13/denia-donara-ajudes-per-rehabilitar-els-5-000-habitatges-buits-si-es-converteixen-en-lloguers-de-llarga-durada/">
            Dénia donarà ajudes per rehabilitar <UtilsAnnotated type="highlight">5.000 habitatges</UtilsAnnotated> buits si es converteixen en lloguers de llarga durada
          </BlocksHeadline>
          <BlocksHeadline :source="['Castellón Plaza', castellonplazaLogo]" url="https://castellonplaza.com/castellonplaza/comarcas/compromis-reclama-mesures-per-enfrontar-la-proliferacio-de-pisos-turistics-a-la-provincia">
            Compromís reclama mesures per enfrontar la proliferació de pisos turístics a la província
          </BlocksHeadline>
          <BlocksHeadline :source="['À Punt', apuntLogo]" url="https://www.apuntmedia.es/noticies/politica/compromis-exigeix-modificar-decret-d-habitatges-turistics_1_1768855.html">
            Compromís exigeix modificar el <UtilsAnnotated>decret d'habitatges turístics</UtilsAnnotated>
          </BlocksHeadline>
        </template>
      </BlocksProposal>
      <BlocksProposal>
        <template #heading>
          Per poder viure en els nostres pobles
        </template>
        <template #points>
          <p>Vius en una ciutat amb lloguers abusius? Emancipar-se no pot ser un luxe.</p>
          <ul>
            <li><UtilsAnnotated color="highlight">Aplicar la Llei d’Habitatge</UtilsAnnotated>: limitar el preu del lloguer</li>
            <li>Declarar zones tensionades</li>
            <li>Crear un <UtilsAnnotated color="highlight">parc públic de lloguer jove</UtilsAnnotated></li>
            <li>Ajudes directes al lloguer</li>
          </ul>
        </template>
        <template #headlines>
          <BlocksHeadline :source="['La Marin Plaça', lamarinaLogo]" url="https://lamarina.eldiario.es/ca/2024/12/13/denia-donara-incentius-a-la-rehabilitacio-dhabitatges-buits-per-facilitarne-leixida-al-mercat/">
            Dénia donarà incentius a la rehabilitació d’habitatges buits per facilitar-ne l’eixida al mercat
          </BlocksHeadline>
          <BlocksHeadline :source="['valenciaplaza', valenciaplazaLogo]" url="https://valenciaplaza.com/valenciaplaza/gandia-destina-ajudes-fins-1250-euros-propietaris-posen-lloguer-habitatges-buits">
            Gandia destina ajudes de fins a <UtilsAnnotated type="highlight">1.250 euros</UtilsAnnotated> per als propietaris que posen en lloguer habitatges buits
          </BlocksHeadline>
          <BlocksHeadline :source="['elperiodic', elperiodicLogo]" url="https://www.elperiodic.com/val/almenara/compromis-impulsa-creacio-duna-borsa-dhabitatge-almenara_1022351">
            Compromís impulsa la creació d’una <UtilsAnnotated type="highlight">borsa d’habitatge</UtilsAnnotated> a Almenara
          </BlocksHeadline>
        </template>
      </BlocksProposal>
    </div>
  </section>
</template>

<script setup>
import saforguiaLogo from '~/assets/images/headlines/saforguia.png'
import castellonplazaLogo from '~/assets/images/headlines/castellonplaza.png'
import copeLogo from '~/assets/images/headlines/cope.svg'
import apuntLogo from '~/assets/images/headlines/apunt.svg'
import serLogo from '~/assets/images/headlines/ser.svg'
import lamarinaLogo from '~/assets/images/headlines/marinaplaza.svg'
import valenciaplazaLogo from '~/assets/images/headlines/valenciaplaza.svg'
import elperiodicLogo from '~/assets/images/headlines/elperiodic.svg'

const { $gsap } = useNuxtApp()

onMounted(() => {
  $gsap.from('.proposals .header h2 span', {
    opacity: 0,
    y: -120,
    ease: 'Power4.easeIn',
    duration: .5,
    stagger: .5,
    scrollTrigger: {
      trigger: '.proposals .header h2',
      start: 'top bottom',
      toggleActions: "restart none none reverse"
    },
  })
})
</script>

<style lang="scss" scoped>
.header {
  h2 {
    font-size: clamp(6rem, 10vi + 1.5rem, 19rem);
    letter-spacing: 0;
  }
}
</style>