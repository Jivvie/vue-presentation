/* The main component that sits as the parent component of two child. */
<template>
  <div>
    <button class="next-button" v-if="3==2">NEXT SLIDE</button>
    <div class="container-main">
      <div class="container-info">
        <h1 class="info-title">pros</h1>
        <p>{{ slide1 }}</p>
      </div>
      <div class="container-markup">
        <p class="markup" v-html="previewInfo"></p>
      </div>
    </div>
  </div>
</template>

<script>
  var counter = 0;
  const html = marked('**Bold** *Italic* [link](http://vuejs.org/) <br>') ;
  console.log(html)
  var slide1 = marked('**Lightweight** <br> VUEJS has a relatively small filesize.   ');
  var slide2 = marked('**Scoping and DOM** <br> VUEJS has a relatively small filesize.');
    export default {
        name: "MainContainer",
        data: function() {
          return {
             slide1
          }
        },
      computed: {
          previewInfo() {
            return marked(slide1)
          }
      }
    }
</script>

<style scoped>
  * {
    padding:0;
    margin: 0;
  }

  p { background-color: white;}

  .info-title {
    font-weight: 400;
    text-transform: uppercase;
    padding: 20px;
    background: url("../assets/Rectangle 3.png");
  }

  .container-main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 40px;
  }

  .container-info  {
    background-color: white;
    height:400px;
    width: 500px;
    box-shadow: 25px 25px 25px rgba(0, 0, 0, 0.04);
  }

  .container-markup {
    background-color: white;
    height:400px;
    width: 500px;
    box-shadow: 25px 25px 25px rgba(0, 0, 0, 0.04);
  }

  p.markup{
    padding: 10px;
    padding-top:20px;
    ;
  }

  .next-button {
    padding:10px;
  }
</style>
