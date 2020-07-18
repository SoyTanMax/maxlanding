<template>
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <div class="navbar-item">
                <router-link :to="{name: 'Home'}">
                    <div class="is-uppercase logo"><strong>Max</strong>López</div>
                </router-link>
            </div>
        <!--
    Using the v-on: directive to listen for the click event and toggle the data property showNav. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span :style="{color: 'hsl(210, 75%, 25%)'}"></span>
          <span :style="{color: 'hsl(210, 75%, 25%)'}"></span>
          <span :style="{color: 'hsl(210, 75%, 25%)'}"></span>
        </div>
      </div>
      <!--
    Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
            <ul class="navbar-item">
                <router-link :to="{ name: 'Home'}">
                    <li>Home</li>
                </router-link>
                <router-link :to="{ name: ''}">
                    <li>Case Studies</li>
                </router-link>
                <router-link :to="{ name: ''}">
                    <li>About me</li>
                </router-link>
                <router-link :to="{ name: ''}">
                    <button class="button">Contact</button>
                </router-link>
            </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      showNav: false
    }
  }
}
</script>

<style scoped>
    body{
        margin: 0;
    }
    li {
        list-style: none;
        color: hsl(210, 75%, 25%);
        margin-right: 32px;
        font-size: 16px;
        letter-spacing: 0.15em;
        font-weight: normal;
    }
    .logo{
        font-family: 'Nunito', sans-serif;
        font-size: 24px;
        color: hsl(210, 75%, 25%);
    }
    .navbar-menu{
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
    }
    .navbar-item{
        padding: 24px 0 0;
    }
    .button{
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
        border-radius: 8px;
        background: linear-gradient(90deg, #26AED9 -9.85%, #3173B4 116.29%);
        color: white;
        border: none;
    }
</style>
