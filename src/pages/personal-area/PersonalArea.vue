<template>
    <div class="personal-area">
       <Sidebar/>
        <div class="sections">
            <div class="card">
                <div class="row">
        <div class="col-xs-6 col-md-9">
                <section id="dashboard">
                    <Dashboard />
                </section>
        </div>
        <div class="col-xs-6 col-md-3">
            <Account/>
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
import Sidebar from "../../components/personal-area/Sidebar"

export default{
  name: 'App',
  components: {
    Dashboard,
    SignIn,
    Account,
    Sidebar
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