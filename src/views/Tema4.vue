<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 #[i Software] para pronósticos de ventas

    .row.justify-content-center.align-items-center
      .col-lg-6
        p.recuadro-color.p-4 El #[em software] para pronóstico de ventas es un conjunto de programas, instrucciones y reglas informáticas que ejecutan las funciones correspondientes a la estimación de las ventas futuras de un bien o servicio para un determinado periodo de tiempo, con base en diferentes métodos. En otras palabras, es una solución tecnológica que almacena información histórica de las ventas y características de consumo sobre los clientes de una empresa y  basado en estos datos, se calcula el crecimiento de ingresos para facilitar la planificación en los recursos humanos, físicos y financieros de la organización.  
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema4/img1.svg', alt='Texto que describa la imagen')
      
      p.mt-4 A continuación encontrará la síntesis de este componente formativo.


 

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
