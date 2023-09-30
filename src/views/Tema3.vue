<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Pronóstico de ventas
    
    .row.justify-content-center.align-items-center
      .col-lg-6.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='Texto que describa la imagen')
      
      .col-lg-6
        p.text-bold Según Moreno #[em et al.] (2021):

        p El pronóstico de ventas corresponde a la estimación de las ventas futuras de un bien o servicio para un determinado periodo de tiempo. Las ventas estimadas pueden ser expuestas en unidades o en valores monetarios, expresando qué y cuánto se puede vender, considerando las variables internacionales, la situación de la industria en el mercado y la participación de la empresa en el sector industrial y, valga la redundancia, en el mercado. (p.10)
          br
          br
          |A continuación, se analizará lo referente al pronóstico de ventas.

    .row.justify-content-center.mb-5.mt-5
      .col-lg-8
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Acosta et al. (2018) considera que:")
            .col-md-12.mb-4.mb-md-0
              p Los pronósticos de ventas se realizan para periodos de tiempo de proyección y se usan varias fórmulas de cálculo para determinar su valor, incluyendo métodos subjetivos (expectativas y experiencia del vendedor o dueño) y objetivos (estadísticas y #[i software] especializados). (p.30)

          .row(numero="2" titulo="Pronósticos de ventas")
            .col-md-12.mb-4.mb-md-0
              p Los pronósticos de ventas son muy útiles para establecer los objetivos comerciales con sus metas y también en la planificación de los recursos humanos, físicos y financieros de la organización en el corto y mediano plazo.
                br
                br
                |Para la elaboración de un pronóstico de ventas se requiere contar con la siguiente información: 
              ul.lista-ul--color
                li 
                  i.fas.fa-square
                  p.mb-0 Histórico de las ventas: datos de las ventas del producto o servicio en el que se trabajará.  En el caso de productos o servicios turísticos, se deben incluir los registros de todo el año, discriminado por mes, debido a la estacionalidad que se da en este sector. 

                li 
                  i.fas.fa-square
                  p.mb-0 Calendario de eventos que tendrán lugar en la ciudad, departamento o país y que puedan afectar el nivel de las ventas durante el periodo que se pronosticará.

                li 
                  i.fas.fa-square
                  p.mb-0 Gestiones internas de la empresa, como nuevos productos, promociones, planes y estrategias de mercadeo, que se espera tengan resultados favorables en el periodo a pronosticar; este punto se valora en porcentaje.

          .row(numero="3" titulo="Métodos más utilizados")
            .col-md-12.mb-4.mb-md-0
              p “Los métodos más utilizados para realizar proyección de ventas son:  regresión lineal, crecimiento exponencial, promedios móviles, pronósticos aleatorios y tasa de crecimiento”. (Pérez, 2019, p. 94)

          .row(numero="4" titulo="Modelo")
            .col-md-12.mb-4.mb-md-0
              p Al elaborar el modelo se deben tener en cuenta los siguientes requisitos:

              ul.lista-ul--color
                li 
                  i.fas.fa-square
                  p.mb-0 Crearlo en Excel utilizando las herramientas que brinda este #[em software.]

                li 
                  i.fas.fa-square
                  p.mb-0 Recopilar la información de las ventas mensuales (en unidades o valores) de los años anteriores, con el fin de conocer el histórico sobre el producto o servicio estudiado.

                li 
                  i.fas.fa-square
                  p.mb-0 El pronóstico de ventas debe hacerse utilizando los siguientes métodos: regresión lineal, crecimiento exponencial, promedios móviles, pronóstico aleatorio y tasa de crecimiento.

                li 
                  i.fas.fa-square
                  p.mb-0 En la hoja de resultados debe incluirse un cuadro combinado que permita al usuario seleccionar un método de pronóstico y ver los resultados obtenidos.
              

      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema3/img2.svg", alt="alt").mt-2


</template>

<script>
export default {
  name: 'Tema3',
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
