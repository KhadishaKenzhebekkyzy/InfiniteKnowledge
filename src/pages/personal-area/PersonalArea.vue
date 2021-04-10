<template>
    <div class="personal-area">
      <div class="row">
        <div class="col-xs-6 col-md-1">
        <ul class="nav flex-column" style="width:90px">
        <li class="nav-item">
            <a class="nav-link" href="/"><img src="../../assets/static/menu-logo.svg" style="width:50%"/></a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="#dashboard"><img src="../../assets/static/menu-dashboard.svg" style="width:40%"/></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#courses"><img src="../../assets/static/menu-courses.svg" style="width:40%"/></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#statistics"><img src="../../assets/static/menu-statistics.svg" style="width:40%"/></a>
        </li>
        </ul>
        </div>
        <div class="col-xs-6 col-md-11">
        <div class="sections">
            <div class="card">
                <div class="row">
        <div class="col-xs-6 col-md-9">
                <section id="dashboard">
                    <Dashboard />
                </section>
            <!-- <router-view class="dashboard" name="dashboard"></router-view> -->
        </div>
        <div class="col-xs-6 col-md-3">
            <Account/>
        </div>
        </div>
          </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
<script>
import Dashboard from '../personal-area/Dashboard'
import SignIn from '../enter/SignIn'
import Account from '../../components/personal-area/Account'

export default{
  name: 'App',
  components: {
    Dashboard,
    SignIn,
    Account
  },
  methods:{
      dashboard: function(){
          return this.$route.path === '/dashboard'
      },
      courses: function(){
          return this.$route.path === '/courses'
      }
  }
}
</script>

<style scoped src='../../assets/styles/personal-area.css'>

</style>