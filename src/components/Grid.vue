<template>
    <div class="portfolio">
        <div class="proyectos">
            <div class="container">
                <div v-for="(proyecto, index) in proyectos" class="proyecto is-marginless" :key="index">
                    <a :href='proyecto.ref'>
                        <div class="box is-paddingless">
                            <img :src="proyecto.image"/>
                            <div class="texto">
                                <div class="top">
                                    <p class="nombre">{{ proyecto.nombre }}</p>
                                    <p class="project-status tag is-rounded is-uppercase" :class="proyecto.status == 'en construcción' ? 'yellow': 'green'">{{ proyecto.status }}</p>
                                </div>
                                <p class="fecha is-uppercase">{{ proyecto.fecha }}</p>
                                <read-more class="descripcion" more-str="Ver más" :text="proyecto.descripción" link="#" less-str="Ver menos" :max-chars="80"></read-more>
                                <div class="herramientasContainer">
                                    <i class="material-icons">explore</i>
                                    <p class="herramientas">{{ proyecto.herramientas }}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Grid',
  data () {
    return {
      proyectos: [
        {
          nombre: 'Mundial de Clanes',
          descripción: 'Este proyecto consiste en una plataforma hecha para organizar y monitorear los torneos de fútbol organizados por el Grupo Scout 30 de Nuevo León.',
          status: 'en construcción',
          fecha: 'Mayo 2020',
          herramientas: 'VueJs + FirebaseDB',
          image: require('@/assets/Mundial.jpeg'),
          ref: 'https://mundialdeclanes.netlify.app/#/'
        },
        {
          nombre: 'Medicis',
          descripción: 'Este proyecto consiste en la creación de una página web para Medicis, empresa dedicada a la producción museográfica en Nuevo León.',
          status: 'en construcción',
          fecha: 'Mayo 2020',
          herramientas: 'Figma + VueJs',
          image: require('@/assets/medicis.jpeg'),
          ref: 'https://soytanmax.github.io/medicis/'
        },
        {
          nombre: 'Neurofinanzas',
          descripción: 'Este proyecto consiste en la creación de una página web para Neurofinanzas, O.N.G. enfocada a brindar educación financiera a las comunidades de México a través de talleres y conferencias.',
          status: 'terminado',
          fecha: 'Mayo 2020',
          herramientas: 'VueJs',
          image: require('@/assets/neuro.jpeg'),
          ref: 'https://neurofinanzas.netlify.app/#/'
        }
      ]
    }
  }
}
</script>

<style scoped>
    p {
        font-family: 'Nunito', sans-serif;
    }
    .container{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 20px;
        margin: 24px 0;
    }
    .box{
        transition: 300ms;
        width: 100%;
        height: fit-content;
    }
    .box:hover{
        transform: scale(1.05);
    }
    img {
        border-radius: 8px 8px 0 0;
    }
    .texto{
        padding: 12px;
    }
    .top{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 8px;
    }
    .nombre{
        font-weight: 800;
        font-size: 18px;
        line-height: 1.2;
        color: hsl(197, 85%, 24%);
    }
    .tag{
        margin: 0;
        font-weight: 600;
        font-size: 12px;
    }
    .project-status.yellow{
        background-color: hsl(56, 85%, 90%);
        border: 2px solid hsl(56, 85%, 58%);
        color: hsl(56, 65%, 35%);
    }
    .project-status.green{
        background-color: hsl(90, 85%, 90%);
        border: 2px solid hsl(90, 85%, 58%);
        color: hsl(90, 65%, 35%);
    }
    .fecha {
        font-size: 14px;
        font-weight: 600;
        color: hsl(208, 12%, 58%);
        margin-bottom: 6px;
    }
    .descripcion{
        font-size: 14px;
        color:hsl(210, 10%, 43%);
        text-align: justify;
        margin-bottom: 24px;
    }
    .herramientasContainer{
        display: flex;
        align-items: flex-end;
    }
    i {
        margin-right: 8px;
        color: hsl(197, 32%, 41%);
    }
    .herramientas{
        font-size: 14px;
        font-weight: 600;
        color: hsl(197, 32%, 41%);
        align-items: center;
    }
    @media (max-width: 1023px){
        .proyectos{
        margin: 0;
        padding: 24px;
        }
    }
</style>
