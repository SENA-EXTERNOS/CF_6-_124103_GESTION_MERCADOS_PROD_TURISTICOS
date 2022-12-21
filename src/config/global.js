export default {
  global: {
    componenteFormativo: 'Demanda turística',
    descripcionCurso:
      'La demanda turística es la cantidad de un producto o servicio turístico específico que los visitantes han consumido en un horizonte de tiempo determinado. Involucra temas como el precio y la oferta, permite proyectar el mercado según segmentos y los métodos de pronóstico a través de procedimientos y herramientas técnicas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Precio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Demanda',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Oferta',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Equilibrio entre oferta y demanda',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Pronóstico de ventas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<em>Software</em> para pronósticos de ventas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Precio',
      referencia:
        'Red Universitaria Virtual Internacional (RED SUMMA). (2019). Marketing-Mix.',
      tipo: 'Nota técnica',
      link:
        'https://campusvirtual.iep.edu.es/recursos/recursos_premium/programa-habilidades/pdf/marketing/pdf4.pdf',
    },
    {
      tema: 'Mercado turístico',
      referencia:
        'Arévalo, G. (2019), <em>Fundamentos de mercadeo.</em> Fundación Universitaria del Área Andina.',
      tipo: 'Libro electrónico',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/1382/Fundamentos%20de%20mercadeo.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Demanda turística',
      referencia: 'Procolombia. (2022). <em>Informe de gestión 2018-2022.</em>',
      tipo: 'Informe gubernamental',
      link: 'https://procolombia.co/publicaciones/informe-de-gestion-2018-2021',
    },
    {
      tema: 'Pronósticos de ventas',
      referencia:
        'Soy ingenio. (2019). <em>Pronóstico de ventas - (conceptos clave)</em>. [Video]. YouTube.',
      tipo: 'Vídeo YouTube',
      link: 'https://www.youtube.com/watch?v=4hipNkC6me0',
    },
  ],
  glosario: [
    {
      termino: 'Costo fijo',
      significado:
        'los costos fijos son aquellos gastos que no varían, se mantienen iguales sin importar el nivel de ventas que tenga la empresa, pues son necesarios para su funcionamiento.',
    },
    {
      termino: 'Costo variable',
      significado:
        'los costos variables hacen referencia a los costos que dependen del volumen de la actividad, el movimiento de las ventas o las estrategias de mercadeo que se realicen. Se consideran los costos en los que solo se incurre cuando el producto o servicio se vende, es decir, valores que no se mantienen iguales mes tras mes y que están sujetos a las ventas.',
    },
    {
      termino: 'Demanda turística',
      significado:
        'la demanda turística es la cantidad de un producto o servicio turístico específico que los visitantes quieren tener en un horizonte de tiempo determinado, es decir, que constituye el número de productos o servicios que en una hora, día, mes o año determinado se ha calculado que los viajeros están dispuestos a adquirir.',
    },
    {
      termino: 'Elasticidad precio de la demanda',
      significado:
        'la elasticidad precio de la demanda es un parámetro que indica el cambio porcentual en la demanda de un bien como respuesta al cambio porcentual de su precio. Este parámetro es normalmente negativo, porque la relación entre demanda y precio es negativa: a mayor precio, menor demanda y viceversa. Se dice que un bien es elástico si el cambio en la demanda es igual o más que proporcional al cambio en el precio (eρ ≤ -1),  y  que es inelástico si el cambio en la demanda es menos que proporcional al cambio en su precio (eρ > -1 y ≤ 0). (Moreno <em>et al</em>., 2021, p. 2).',
    },
    {
      termino: 'Mercado turístico',
      significado:
        'el mercado turístico es el espacio físico o virtual donde se produce el intercambio de bienes, servicios turísticos y todas las interacciones que surgen a partir de este intercambio, por lo tanto, se mueve alrededor de las actividades económicas fundamentales (producción, distribución y consumo), lo que deja ver que sus actores principales son los viajeros o visitantes y los prestadores de servicios turísticos, quienes, en la dinámica de compra y venta, generan unas relaciones denominadas oferta y demanda.  Adicionalmente, dentro de los elementos que componen al mercado se encuentran el precio, la tarifa, el producto y el proceso de intercambio.',
    },
    {
      termino: 'Oferta turística',
      significado:
        'la oferta turística constituye el conjunto de productos y servicios que están activos y disponibles para su disfrute en un destino o área turística.',
    },
    {
      termino: 'Precio',
      significado:
        'el precio es el valor monetario que quienes producen o comercializan un bien o servicio establecen como el indicado para realizar el intercambio de dicho bien o servicio con sus clientes.',
    },
    {
      termino: 'Pronóstico de ventas',
      significado:
        'el pronóstico de ventas corresponde a la estimación de las ventas futuras de un bien o servicio para un determinado periodo de tiempo. Las ventas estimadas pueden ser expuestas en unidades o en valores monetarios, expresando qué y cuánto se puede vender, considerando las variables internacionales, la situación de la industria en el mercado y la participación de la empresa en el sector industrial y, valga la redundancia, en el mercado. (Moreno <em>et al</em>., 2021, p. 19).',
    },
    {
      termino: '<em>Software</em> para pronóstico de ventas',
      significado:
        'el <em>software</em> para pronóstico de ventas es un conjunto de programas, instrucciones y reglas informáticas que ejecutan las funciones correspondientes a la estimación de las ventas futuras de un bien o servicio para un determinado periodo de tiempo, con base en diferentes métodos.',
    },
    {
      termino: 'Tarifa',
      significado:
        'la tarifa es una cantidad monetaria determinada que se otorga para adquirir o consumir un servicio. Dicho monto es previamente establecido por el oferente del mismo, el cual se basa en aquellos factores que considere relevantes. (Enciclopedia económica, s.f.).',
    },
    {
      termino: 'Utilidad',
      significado:
        'la utilidad es el interés o provecho que se puede sacar de un producto; es el beneficio económico efectivo que obtiene una empresa u organización después de pagar todos los gastos y costos de todo tipo, la ganancia resultante de la venta del servicio o producto. (Alban <em>et al</em>., 2020, p. 3).',
    },
  ],
  referencias: [
    {
      referencia:
        'Libro electrónico: Acosta Véliz, M., Salas Narváez, L., Jiménez Cercado, M., & Guerra Tejada, A. M. (2018). La administración de ventas. 3Ciencias.',
      link:
        'https://www.3ciencias.com/wp-content/uploads/2018/02/La-administracion-de-ventas.pdf',
    },
    {
      referencia:
        'Artículo: Alban, J., García, D., & Tapia, J. (2020). <em>Costos de importación de productos textiles y su incidencia en la utilidad empresarial</em>. Universidad Ciencia y Tecnología, 24(105), 12-19.',
      link:
        'https://uctunexpo.autanabooks.com/index.php/uct/article/view/376/777',
    },
    {
      referencia:
        'Libro electrónico: Arévalo, G. (2019). <em>Fundamentos de mercadeo</em>. Fundación Universitaria del Área Andina.',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/1382/Fundamentos%20de%20mercadeo.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Página web: Guaramaco, K. (2017). 5 <em>Estrategias de mercadeo basadas en el precio</em>. Sirloin Roastbrief.',
      link:
        'https://roastbrief.com.mx/2017/01/5-estrategias-de-mercadeo-basadas-en-el-precio/',
    },
    {
      referencia:
        'Artículo digital: Moreno, L. A. Guerrero, C. M. Colchero, M. A. Quezada, A. D., & Bautista, S. (2021). Elasticidad, precio y elasticidad ingreso de la demanda de cerveza en México. <em>Salud pública de México, 63</em>(4), p. 575-582.',
      link: 'https://saludpublica.mx/index.php/spm/article/view/12026/12109',
    },
    {
      referencia:
        'Libro: Pérez, R. (2019). <em>Modelación financiera: Conceptos y aplicaciones</em>. Universidad Piloto de Colombia.',
      link: 'https://www-digitaliapublishing-com.ezproxy.utp.edu.co/a/111481.',
    },
    {
      referencia:
        'Artículo: Piñero, L., & Piñero, L. D. M. P. (2019). Ruta metodológica para avanzar en el periplo de la investigación educativa con variable compuesta o predicativa. <em>Orbis: Revista de Ciencias Humanas</em>, 14(42), 60-74.',
      link: '',
    },
    {
      referencia:
        'Informe gubernamental: Procolombia. (2022). <em>Informe de gestión 2018-2022</em>. Procolombia.',
      link: 'https://procolombia.co/publicaciones/informe-de-gestion-2018-2021',
    },
    {
      referencia:
        'Página web: Quiroa, M. (2019). <em>Tipos de demanda en marketing</em>. Economipedia.com.',
      link:
        'https://economipedia.com/definiciones/tipos-de-demanda-en-marketing.html',
    },
    {
      referencia:
        'Artículo digital: Rebollar, S. Hernández, J. Guzmán, E. Rebollar, E. & González, F. D. J. (2021). <em>La elasticidad precio de la demanda: caso teórico no corroborado.</em>',
      link: 'http://ri.uaemex.mx/handle/20.500.11799/111196',
    },
    {
      referencia:
        'Nota técnica: Red Universitaria Virtual Internacional (RED SUMMA). (2019). <em>Marketing-Mix.</em> ',
      link:
        'https://campusvirtual.iep.edu.es/recursos/recursos_premium/programa-habilidades/pdf/marketing/pdf4.pdf',
    },
    {
      referencia:
        'Artículo digital: Vaca, L. M. F., Guerrero, M. F. G., Fajardo, C. E. V., Vaca, L. A. F., Santillán, X. L. Z., Granda, L. E. S., & Salazar, J. A. P. (2019). Valor actual neto y tasa interna de retorno como parámetros de evaluación de las inversiones. <em>Investigación Operacional, 40</em>(4), 469-474.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
