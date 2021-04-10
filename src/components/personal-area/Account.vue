<template>
  <div id="account">
       <div class="row">
        <div class="col-xs-6 col-md-1">
            <img src="../../assets/static/notifications.svg"/>
        </div>
        <div class="col-xs-6 col-md-1">
            <img src="../../assets/static/messages.svg"/>
        </div>
        <div class="col-xs-6 col-md-4" style="text-align:right">
            Ann Lee
        </div>
          <div class="col-xs-6 col-md-5">
            <img src="../../assets/static/avatar.svg"/>
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
