<template>
  <div id="error">
            <h1 id="main-text">{{ $t('error.name') }}</h1>
            <h3>{{ $t('error.desc') }}</h3>
            <router-link to="/"><button>{{ $t('error.back') }}</button></router-link>
  </div>
</template>

<style scoped src='../assets/styles/error.css'>

</style>