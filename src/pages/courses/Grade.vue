<template>
  <div id="grade">
        <div class="container">
            <Header/>
            <h3>{{$route.params.number}} {{ $t('courses.grades') }}</h3>
            <div class="row" style="margin-top:4%; text-align:left; justify-content:center; margin-bottom: 5%">
            <div 
                    v-for="course in app.courses" 
                    :key="course"
                    class="card-course"
                    v-bind:id="course">
                    <div class="row">
                        <div class="col-md-9">
                    <p>{{course}}</p>
                        </div>
                    </div>
            </div>
            </div>
            <Footer/>
        </div>
  </div>
</template>

<script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>
<script>

import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import {grades} from "../../data/main-page-info"

export default {
    
    components:{
        Header,
        Footer
    },
    data(){
        grades,
        app
    },
    methods: {
        findcourses:function(){
            console.log(this.grades);
            for(var i = 0; i < grades.length; i++) {
                if (grades[i].name == this.$route.params.number) {
                    this.app = grades[i];
                    console.log(this.app);
                }        
            }
        }
    },
    beforeMount(){
    this.findcourses()
 },
}
</script>


<style scoped src='../../assets/styles/grade.css'>

</style>
