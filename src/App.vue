<template>
  <div id="app">

    <Header />
    <router-view />
    <Footer />

  </div>
</template>

<script>
import Header from './components/sections/HeaderSection.vue'
import Footer from './components/sections/FooterSection.vue'

export default {
  name: 'App',

  components:{
    Header,
    Footer
  }
  
}
</script>

<style lang="scss">
@import url('./assets/scss/_common.scss');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app{

  a{
    text-decoration: none;
  }

  img{
    max-width: 100%;
    display: block;
  }

  .w-container{
    max-width: 1340px;
    padding: 0 20px;
    margin: 0 auto;
  }
}

</style>
