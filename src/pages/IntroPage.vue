<template>
  <div id="intro">
    <div id="back">
      <div class="container">
        <Header/>
      </div>
        <Main/>
    </div>
    <Information/>
    <div class="container">
      <Footer/>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
<script>
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../pages/Main';
import Information from '../pages/Information'

export default{
  name: 'App',
  components: {
    Header,
    Main,
    Information,
    Footer
  }
}
</script>


<style scoped src="../assets/styles/app.css">

</style>