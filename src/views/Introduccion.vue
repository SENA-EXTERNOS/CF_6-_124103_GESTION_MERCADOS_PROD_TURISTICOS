<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/img1.svg', alt='Texto que describa la imagen')
      
      .col-lg-8
        p.mt-3 Estimado aprendiz, a continuación, conocerá sobre la demanda turística. Al finalizar este recurso, logrará determinar la demanda de productos turísticos de acuerdo con procedimientos técnicos y condiciones del mercado, teniendo como objetivo proyectar a futuro la demanda según segmentos y métodos de pronóstico. Con los siguientes recursos podrá ampliar la información sobre demanda turística, la cual es la cantidad de un producto o servicio turístico específico que los visitantes han consumido o pueden consumir en un horizonte de tiempo determinado, a través de procedimientos y herramientas técnicas.
        p.text-bold En el siguiente video conocerá, de forma general, la temática que estudiará a lo largo del componente formativo. ¡Muchos éxitos en este proceso de aprendizaje!


    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ZrbFFS2ustA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
