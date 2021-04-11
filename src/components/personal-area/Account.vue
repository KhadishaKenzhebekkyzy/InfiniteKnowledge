<template>
  <div id="account">
       <div class="row">
        <div class="col-xs-6 col-md-2">
            <router-link to="/user/notifications"><img src="../../assets/static/notifications.svg"/></router-link>
        </div>
        <div class="col-xs-6 col-md-2">
            <router-link to="/user/messages"><img src="../../assets/static/messages.svg"/></router-link>
        </div>
        <div class="col-xs-6 col-md-4" style="margin-left:5%">
            <p>Ann Lee</p>
        </div>
          <div class="col-xs-6 col-md-3">
            <router-link to="/user/profile"><img src="../../assets/static/avatar.svg"/></router-link>
          </div>
        </div>
        <div class="row" style="margin-top:30px">
            <Calendar/>
        </div>
  </div>
</template>

<script>
import Calendar from './Calendar'
export default{
  name: 'App',
  components: {
    Calendar
  }
}

</script>


<style scoped src="../../assets/styles/account.css">

</style>
