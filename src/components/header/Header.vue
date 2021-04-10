<template>
  <div id="header">
      <nav class="navbar navbar-expand-lg">
        <router-link to="/">
          <img class="logo" src="../../assets/static/logo.svg" />
        </router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="text-align:right; justify-content:right">
          <ul class="navbar-nav mr-auto" style="text-align:right; justify-content:right">
            <li class="nav-item" style="margin-left: 630px; margin-right:30px; margin-top:7px">
              <language-switch/>
            </li>
            <li class="nav-item" >
              <a class="nav-link active" href="/">
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
    </div>
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
