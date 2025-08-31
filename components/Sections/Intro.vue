<template>
  <section id="intro" class="p-site grid xl:grid-cols-2 gap-12 xl:max-w-[1800px] mx-auto">
    <BlocksCard id="card1">
      El segon semestre de 2024, les joves d’entre 16 i 29 anys van destinar <UtilsAnnotated>més del 90% del seu sou a pagar el lloguer</UtilsAnnotated>.

      <template #chart>
        <img src="~/assets/images/charts/rent.svg" alt="Gràfica de donut, 90% del sou dedicat al lloguer, 10% a la resta" class="w-full" />
      </template>
    </BlocksCard>
    <BlocksCard id="card2">
      L’últim semestre de 2024 es va tancar amb una <UtilsAnnotated type="highlight" :delay="0.2">taxa d’emancipació del 14,8%</UtilsAnnotated>, la mínima des de que es te registre.
    </BlocksCard>
    <BlocksCard id="card3">
      Així, més del 85% dels joves valencians <UtilsAnnotated type="highlight" :delay="0.4">no han pogut independitzar-se abans dels 30 anys</UtilsAnnotated>.
    </BlocksCard>
    <BlocksCard id="card4">
      Els sous de les joves han augmentat un 10,8% respecte a 2008, mentre que el lloguer ho ha fet <UtilsAnnotated type="circle" :delay="0.6">més del 55%</UtilsAnnotated>.

      <template #source>
        Font: Observatori Emancipació CJE 2024
      </template>
    </BlocksCard>
    <BlocksCard id="card5">
      Espanya té <UtilsAnnotated type="highlight" :delay="0.8">només el 2,5% d’habitatge social</UtilsAnnotated> sobre el total del parc residencial front a la Mitjana europea: 9,3%

      <template #source>
        Font: <a href="https://www.housingeurope.eu/resource-1833/the-state-of-housing-in-the-eu-2023" target="_blank" class="underline">Informe anual de Housing Europe</a>
      </template>
    </BlocksCard>
  </section>
</template>
