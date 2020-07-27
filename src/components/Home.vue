<template>
  <div class="home">
    <div class="hero">
      <div class="hero-head">
        <Navbar/>
      </div>
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half-desktop is-full-mobile is-full-tablet">
            <p class="lets">{{ heading }}</p>
            <button class="button is-uppercase">my work</button>
            <div class="tools">
              <img src="@/assets/figmalogo.png"/>
              <img src="@/assets/sketch.png"/>
              <img src="@/assets/vue.png"/>
            </div>
          </div>
          <div class="column center is-half-desktop is-full-mobile is-full-tablet">
            <div class="job">
              <img src="@/assets/photo.jpeg"/>
              <div class="line mobile"></div>
              <p class="ux is-uppercase has-text-centered">UI / UX Designer <br> + <br> Frontend Developer</p>
            </div>
          </div>
        </div>
        <span class="circle"></span>
        <span class="circle2"></span>
      </div>
    </div>
    <UI/>
    <div class="section is-medium projects">
      <Grid/>
    </div>
    <div class="section is-small vid">
      <div class="columns center is-paddingless">
        <div class="column">
          <p class="web has-text-white has-text-centered has-text-weight-bold is-size-3">Web Development</p>
          <p class="has-text-white is-size-5">From prototype to reality! I am able to produce fully responsive and functional web sites.</p>
        </div>
        <div class="column">
          <vue-video-section
            :elementId="'header-background-video'"
            :ref="'header-background-video'"
            :mp4Source="require('@/assets/vidio.mp4')"
            :mobileBreakpoint="769"
            :desktopHeight="370"
            :mobileHeight="190"
            :playsinline="true"
            :loop="true"
            :autoplay="true"
            :autobuffer="true"
            :muted="true"
            >
          </vue-video-section>
        </div>
      </div>
    </div>
    <div class="section is-small expBx">
      <p class="has-text-centered experiments is-size-3">Experiments</p>
      <Card/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import UI from '@/components/UI'
import Grid from '@/components/Grid'
import Card from '@/components/Card'
export default {
  name: 'Home',
  components: {
    Navbar,
    UI,
    Grid,
    Card
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

  /* full hd */
  .home{
    position: relative;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(237, 242, 247, 0) 28.65%, #EDF2F7 66.15%);
  }
  .columns{
    margin-top: 48px;
  }
  .hero{
    margin-right: 96px;
    margin-left: 96px;
    height: 100vh;
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
    animation-duration: 1s;
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
    animation-duration: 1s;
    animation-delay: 0.4s;
  }
  .tools{
    display: flex;
    animation-name: appear;
    animation-timing-function: ease-in;
    animation-duration: 1s;
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
    top: 15%;
    right: -7%;
    z-index: -1;
    animation-name: float2;
    animation-iteration-count: infinite;
    animation-duration: 25s;
    animation-timing-function: ease-in-out;
  }
  .projects{
    margin-right: 96px;
    margin-left: 96px;
    padding-left:0;
  }
  .vid{
    background: linear-gradient(136.42deg, #2C66A0 0%, #1AB4E6 100%);
    padding-right: 96px;
    padding-left: 96px;
  }
  .web{
    margin-bottom: 18px;
  }
  .experiments{
    margin-top: 0;
    margin-bottom: 24px;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: hsl(0,0%, 20%);
  }
  .expBx{
    background: linear-gradient(180deg, #FFFFFF 0%, #EEF2F7 100%);
    padding-right: 96px;
    padding-left: 96px;
    position: relative;
  }
  /* mobile */
  @media screen and (max-width: 769px) {
    .hero{
      margin-right: 24px;
      margin-left: 24px;
      height: fit-content;
    }
    .columns{
      display:flex;
      flex-direction: column-reverse;
      margin-top: 0;
    }
    .job img{
      width: 124px;
      margin-bottom: 0;
    }
    .lets{
      text-align: left;
      font-size: 36px;
      line-height: 50px;
      margin-top: 18px;
      margin-bottom: 12px;
    }
    .ux{
      margin-bottom: 0;
      font-size: 16px;
      line-height: 20px;
    }
    .tools{
      display: none;
    }
    .circle{
      position: absolute;
      width: 400px;
      height: 400px;
      border: 1px solid #9FBFDF;
      border-radius: 50%;
      top: -20%;
      left: -20%;
      z-index: -1;
      animation-name: float;
      animation-iteration-count: infinite;
      animation-duration: 20s;
      animation-timing-function: ease-in-out;
    }
    .circle2{
      position: absolute;
      width: 320px;
      height: 320px;
      border: 1px solid #9FBFDF;
      border-radius: 50%;
      bottom: 40%;
      right: -30%;
      z-index: -1;
      animation-name: float2;
      animation-iteration-count: infinite;
      animation-duration: 25s;
      animation-timing-function: ease-in-out;
    }
    .job{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .line{
      border-left: 1px solid hsl(210, 75%, 25%);
      height: 100px;
      margin-left: 12px;
      margin-right: 12px;
    }
    .button{
      font-size: 24px;
      padding: 28px 38px;
      border-radius: 10px;
      margin-bottom: 0;
      animation-name: appear;
      animation-timing-function: ease-in;
      animation-duration: 0.8s;
      animation-delay: 0.4s;
    }
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
