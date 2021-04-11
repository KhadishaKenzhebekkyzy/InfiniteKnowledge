<template>
  <div id="main">
    <div class="container">
      <div class="row">
        <div class="col-xs-5 col-sm-5 col-lg-5" style="margin-left:5%">
            <h1 id="main-text">{{ $t('main.welcome') }}</h1>
            <h1><b>{{ $t('main.message') }}{{ $t('main.math') }}</b></h1>
            <p id="main-p">
            {{ $t('main.description') }}
            </p>
            <router-link to="/sign-in"><button>{{ $t('main.interest') }}</button></router-link>
          </div>
          <div class="col-xs-6 col-sm-6 col-lg-6">
            <img class="logo" src="../assets/static/main-img.svg" style="max-width:109%; height:auto; position:absolute"/>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped src='../assets/styles/main.css'>

</style>