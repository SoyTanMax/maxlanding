<template>
  <div class="home">
    <div class="hero is-fullheight">
      <div class="hero-head">
        <Navbar/>
      </div>
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <p class="lets">{{ heading }}</p>
            <button class="button is-uppercase">my work</button>
            <div class="tools">
              <img src="@/assets/figma.png"/>
              <img src="@/assets/sketch.png"/>
              <img src="@/assets/vue.png"/>
            </div>
          </div>
          <div class="column center">
            <div class="job">
              <img src="@/assets/photo.jpeg"/>
              <p class="ux is-uppercase has-text-centered">UI / UX Designer <br> + <br> Frontend Developer</p>
            </div>
          </div>
      </div>
      <span class="circle"></span>
      <span class="circle2"></span>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'Home',
  components: {
    Navbar
  },
  data () {
    return {
      heading: "Let's design things to work as they should."
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* helpers */
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* full hd */
  .home{
    margin-right: 96px;
    margin-left: 96px;
    font-family: 'Nunito', sans-serif;
  }
  .hero-body{
    padding: 48px 0 48px 0;
  }
  .lets{
    font-size: 68px;
    line-height: 72px;
    color: #000000;
    font-weight: bold;
    margin: 52px 0 32px 0;
    animation-name: appear;
    animation-timing-function: ease-in;
    animation-duration: 0.8s;
  }
  .button{
    font-size: 20px;
    padding: 24px 32px;
    border-radius: 10px;
    background: linear-gradient(90deg, #26AED9 -9.85%, #3173B4 116.29%);
    color: white;
    font-weight: bold;
    margin-bottom: 24px;
    border: none;
    animation-name: appear;
    animation-timing-function: ease-in;
    animation-duration: 0.8s;
    animation-delay: 0.4s;
  }
  .tools{
    display: flex;
    animation-name: appear;
    animation-timing-function: ease-in;
    animation-duration: 0.8s;
    animation-delay: 0.6s;
  }
  .tools img{
    height: 50px;
    padding-right: 18px;
  }
  .job img{
    border-radius: 50%;
    width: 320px;
    margin-bottom: 32px;
  }
  .ux{
    font-size: 18px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.08em;
    color: hsl(210, 75%, 25%);
    margin-bottom: 48px;
  }
  .circle{
    position: absolute;
    width: 690px;
    height: 690px;
    border: 1px solid #9FBFDF;
    border-radius: 50%;
    top: -10%;
    left: -7%;
    z-index: -1;
    animation-name: float;
    animation-iteration-count: infinite;
    animation-duration: 20s;
    animation-timing-function: ease-in-out;
  }
  .circle2{
    position: absolute;
    width: 840px;
    height: 840px;
    border: 1px solid #9FBFDF;
    border-radius: 50%;
    bottom: -40%;
    right: -7%;
    z-index: -1;
    animation-name: float2;
    animation-iteration-count: infinite;
    animation-duration: 25s;
    animation-timing-function: ease-in-out;
  }
  /* keyframes */
  @keyframes float{
    from{transform: translate(0px, 0px)}
    65%{transform: translate(20px, 50px);}
    to{transform: translate(0px, 0px)}
  }
  @keyframes float2{
    from{transform: translate(0px, 0px)}
    65%{transform: translate(-50px, -80px);}
    to{transform: translate(0px, 0px)}
  }
  @keyframes appear {
    0%{
      opacity: 0;
      transform: translateY(-20px);
      visibility: hidden;
    }
    100%{
      opacity: 1;
      transform: translateY(0px);
      visibility: visible;
    }
  }
</style>
