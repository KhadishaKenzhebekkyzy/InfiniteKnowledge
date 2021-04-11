<template>
      <nav class="navbar navbar-expand-lg navbar-light">
        <router-link to="/">
          <img class="logo" src="../../assets/static/logo.svg" />
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="text-align:right; justify-content:right">
          <ul class="navbar-nav mr-auto" style="text-align:right; justify-content:right">
            <li class="nav-item" style="margin-left: 630px; margin-right:30px; margin-top:7px">
              <language-switch/>
            </li>
            <li class="nav-item" >
              <a class="nav-link active" href="/courses">
                {{ $t('main.courses') }}
              </a>
            </li>
            <li class="nav-item">
              <router-link to="/sign-in">
                <button class="login">
                    {{ $t('main.login') }}
                </button>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
</template>

<style scoped src="../../assets/styles/header.css">

</style>

<script>
import LanguageSwitch from '../LanguageSwitch.vue'

export default{
  name: 'Header',
  components:{
    LanguageSwitch
  }
}
</script>
