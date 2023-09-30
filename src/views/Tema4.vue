<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 #[i Software] para pronósticos de ventas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.recuadro-color.p-4 El #[em software] para pronóstico de ventas es un conjunto de programas, instrucciones y reglas informáticas que ejecutan las funciones correspondientes a la estimación de las ventas futuras de un bien o servicio para un determinado periodo de tiempo, con base en diferentes métodos. En otras palabras, es una solución tecnológica que almacena información histórica de las ventas y características de consumo sobre los clientes de una empresa y  basado en estos datos, se calcula el crecimiento de ingresos para facilitar la planificación en los recursos humanos, físicos y financieros de la organización.  
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema4/img1.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-lg-11
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #fff2ca")
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros




</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
