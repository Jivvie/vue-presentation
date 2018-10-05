<template>
  <div id="app">
    <!-- HEADER WITH INTERNAL LOGO AND SUCH! -->
    <header class="header">
      <div class="logo-box">
        <img src="./assets/logo-vue.png" class="logo"/>
      </div>
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">Vuejs presentation</span>
          <span class="heading-primary-sub">Why I enjoy VUEJS and the features behind the framework.</span>
          <img src="./assets/PICTURE-jivvie.png" class="logo2"/>
        </h1>
      </div>
    </header>
    <Main-Container></Main-Container>
  </div>
</template>

<script>
  import MainContainer from './components/MainContainer.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      'Main-Container': MainContainer
  }
}
</script>

<style>

  * {
    padding:0;
    margin:0;
  }
#app {
  font-family: 'Barlow Semi Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

div .logo-box {
    top:10px;
    left:40px;
    position: absolute;
}

div .logo {
  height: 95px;
}

  div .logo2 {
    height: 195px;
  }


div .header {
    position: relative;
    height: 45vh;

}
    .text-box {
      top:60%;
      left: 50%;
      position: absolute;
      transform:translate(-50%, -50%);
    }

    .heading-primary {

    }

    .heading-primary-main{
      display:block;
      text-transform: uppercase;
      font-weight: 600;
    }

    .heading-primary-sub{
      display:block;
      font-size: 15px;
      font-weight: 300;
    }
</style>
