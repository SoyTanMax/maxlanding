<template>
    <div class="section">
      <div class="columns">
        <div class="column is-7-desktop">
          <img class="figma" src="@/assets/figma.png"/>
        </div>
        <div class="column">
          <p class="design has-text-weight-bold has-text-black has-text-centered is-size-3">User Interface and User Experience Design</p>
          <p class="description is-size-5">I research, outline, and design the processes involved with your products or services to make the user have the best experience when using your sites or web applications.</p>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'UI',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

  .figma{
    border-radius: 12px;
  }
  .section{
    margin-left: 96px;
    margin-right: 96px;
    padding:0;
  }
  .design{
    font-size: 32px;
    margin-bottom: 24px;
    line-height: 33px;
  }
  .description{
    font-size: 20px;
  }
  .columns{
    align-items: center;
  }
  /* mobile */
  @media screen and (max-width: 769px) {
    .section{
      margin-left: 24px;
      margin-right: 24px;
    }
  }
</style>
