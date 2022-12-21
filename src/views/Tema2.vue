<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mercado

    .row.justify-content-center.align-items-center
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='Texto que describa la imagen')
      
      .col-lg-6
        p El mercado turístico es el espacio físico o virtual donde se produce el intercambio de bienes y servicios, además de todas las interacciones que surgen a partir de este intercambio; por lo tanto, se mueve alrededor de las actividades económicas fundamentales (producción, distribución y consumo), evidenciando así que sus actores principales son los viajeros, visitantes y prestadores de servicios turísticos, quienes en la dinámica de compra y venta, generan unas relaciones denominadas oferta y demanda.  Adicionalmente, dentro de los elementos que componen al mercado, se encuentran el precio, la tarifa, el producto y el proceso de intercambio.

        p A continuación, conocerá más acerca de la demanda.

    separador

    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.1 Demanda

    .bg--img_03
      .row.justify-content-center.mb-2
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img2.svg", alt="alt").img400.m-auto
        .col-lg-8
          p.m-2 La demanda es uno de los componentes fundamentales del mercado turístico y se define como la cantidad de un producto o servicio específico que las personas quieren tener en un horizonte de tiempo determinado.
          
          AcordionA.mb-5.mt-3(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="¿Qué es?")
              .col-12
                p.mb-0 La demanda constituye el número de productos o servicios que para una hora, día, mes o año determinado, se ha calculado que los consumidores están dispuestos a adquirir.

            .row(titulo="Respecto a esto, Arévalo (2019) considera que la demanda es:")
              .col-12
                p.mb-0 La cantidad de bienes y servicios que los consumidores están dispuestos a adquirir o comprar en el mercado, de acuerdo a un precio y unas condiciones específicas. La demanda se enfoca en los consumidores, su comportamiento y disposición a comprar los bienes, de acuerdo al precio que rige en ese momento. (p. 41)
                
            .row(titulo="Según Quiroa (2019)")
              .col-12
                p.mb-0 “La demanda de mercado es el volumen total que se espera que la gente compre en esa área comercial o industrial, pero la demanda de la empresa representa la participación que la empresa tiene dentro de ese mercado” (párr. 3), por lo que es el volumen de ventas que se espera o la participación de la empresa, dependiendo del tipo de demanda.


    .row.mt-3
      p A partir de lo anterior, ¿qué tipos de demanda hay en el mercado? 

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
        
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img3.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el mercado turístico puede presentarse cualquiera de los tipos de demanda explicados anteriormente, en especial el irregular o estacional, teniendo en cuenta los periodos de temporada alta, media y baja que suelen estar relacionados con las vacaciones de los colegios, universidades y empresas. A continuación, se explica más a detalle lo que debe conocer para realizar una debida planificación.

    .row.mt-5
      p En este caso, es de vital importancia una planificación anual con pronósticos de venta y la programación de contratación de personal acorde a las ventas proyectadas, para de esta manera adaptar la oferta a la demanda.    

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5.tarjeta-color-1
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='Texto que describa la imagen')
          
        p.text-center Para realizar la medición de los cambios en la demanda de un producto y servicio, es necesario hacer uso del registro constante de datos relacionados con las características del consumo y del consumidor de dicho producto o servicio. Además de esto, se debe crear un conjunto de variables clave, las cuales son determinantes para indicar el desempeño de la demanda.

        p.text-center Según Piñero y Piñero (2019) definen una variable como:

        p.text-center Una propiedad que puede cambiar en el tiempo, adquirir diversos valores y cuya variación es susceptible de ser medida. Las variables adquieren valor cuando pueden ser relacionadas con otras (formar parte de una hipótesis o una teoría). Como ejemplo de ellas se tienen: edad, peso, talla, sexo, procedencia, nivel socioeconómico, hábitos de consumo, entre otras (p. 6)

      .col-md.tarjeta.color-acento-contenido.p-5.tarjeta-color-2
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Texto que describa la imagen')
          
        p.text-center.mb-0 En este orden de ideas, las variables de la demanda derivan de los componentes de esta, como se puede apreciar en el siguiente ejemplo:

        p.text-center.mt-0.mb-0 Crece la cifra de visitantes no residentes en el país y rompe récord en 2019. De acuerdo con las cifras de Migración Colombia, entre agosto 2018 y junio 2022 han llegado al país 11.968.326 visitantes. En particular, se destaca la recuperación presentada en 2021 (equivalente a un 55 %) frente al 2020, cuando inició la pandemia, y la llegada de 4.530.574 visitantes en 2019, un hito histórico en el país (Procolombia, 2022, p. 10)

        p.text-center.mt-0.mb-0 En el ejemplo anterior se mide la demanda de turistas extranjeros según las cifras entregadas por Migración, comparando esta medición con años anteriores.

        p.text-center.mt-0A manera de ejemplo, otras variables de la demanda turística en este caso podrían ser:

        ul.lista-ul--color.ps-5
          li 
            i.fas.fa-square
            p.mb-0 El nivel de consumo de turistas extranjeros en el país durante un mes o año determinado.

          li 
            i.fas.fa-square
            p.mb-0 El número promedio de días que se hospedan en el país.

          li 
            i.fas.fa-square
            p.mb-0 El valor promedio de dinero que los turistas ingresan al país.

          li 
            i.fas.fa-square
            p.mb-0 El tipo de servicios que consumen.

    .row.mt-5
      p A partir de lo anterior, se indagará sobre la oferta.
            

    separador

    #t_2_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.2 Oferta

    .row.justify-content-center.align-items-center
      .col-lg-6
        p Es la cantidad de un producto o servicio que se dispone para la venta en un periodo determinado, es decir, el número de productos o servicios que están disponibles para la venta en una hora, día, mes o año determinado. Según Arévalo (2019):

        p La oferta se define como la cantidad de bienes y servicios que los fabricantes están dispuestos a lanzar en el mercado, de acuerdo a un precio y unas condiciones específicas. Dicho en otras palabras, al hablar de oferta hacemos referencia a los productores y su comportamiento y disposición a vender sus bienes, de acuerdo al precio que rige en ese momento. (p.39)

        .cajonAmarillo.bgr-tarjeta-tema2.p-4
           p Es importante conocer el concepto de oferta turística, que constituye el conjunto de productos y servicios que están disponibles para su disfrute en un destino o área turística.

      .col-lg-6
        figure 
          img(src='@/assets/curso/temas/tema2/img6.svg', alt='Texto que describa la imagen')
        
    separador

    #t_2_3

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.3 Equilibrio entre oferta y demanda

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img7.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La relación entre la oferta y la demanda está mediada por las interacciones que tengan los oferentes y los clientes en cuanto a precio, cantidad y calidad de los productos o servicios que son puestos en el mercado por los oferentes y consumidos por los clientes. Por tanto, el equilibrio entre la oferta y la demanda es el que se da cuando se nivela el precio que tiene el producto con el valor que está dispuesto a pagar el cliente, y el número de unidades disponibles a la venta con el número de unidades que el mercado demanda. 

    .row.mt-5
      p A continuación, se analiza lo referente al pronóstico de ventas.
    

</template>

<script>
export default {
  name: 'Tema2',
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
