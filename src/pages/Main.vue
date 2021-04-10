<template>
  <div id="main">
    <div class="container">
      <div class="row">
        <div class="col-xs-6 col-md-5" style="margin-left:50px">
            <h1 id="main-text">{{ $t('main.welcome') }}</h1>
            <h1>{{ $t('main.message') }}</h1>
            <p id="main-p">
            {{ $t('main.description') }}
            </p>
            <button>{{ $t('main.interest') }}</button>
          </div>

          <div class="col-xs-6 col-md-6">
            <img class="logo" id="lo" src="../assets/static/main-img.svg" style="width:109%"/>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped src='../assets/styles/main.css'>

</style>