<template>
    <div class="information">
        <div class="card">
          <div class="container">
            <div class="row" style="text-align:center">
          <div class="col-md-4" style="text-align:center">
            <p><b>{{ $t('information.1.name') }}</b></p>
            <div class="row" style="text-align:left; justify-content:center">
            <div class="col-md-2">
            <img src="../assets/static/video-files.svg"/>
            </div>
            <div class="col-md-7">
              <p class="info">{{ $t('information.1.desc') }}</p>
            </div>
            </div>
          </div>
          <div class="col-md-4">
            <p><b>{{ $t('information.2.name') }}</b></p>
            <div class="row" style="text-align:left; justify-content:center">
            <div class="col-md-2">
            <img src="../assets/static/together.svg"/>
            </div>
            <div class="col-md-7">
              <p class="info">{{ $t('information.2.desc') }}</p>
            </div>
            </div>
          </div>
          <div class="col-md-4" style="text-align:center">
            <p><b>{{ $t('information.3.name') }}</b></p>
            <div class="row" style="text-align:left; justify-content:center">
            <div class="col-md-2">
            <img src="../assets/static/teaching.svg"/>
            </div>
            <div class="col-md-8">
              <p class="info">{{ $t('information.3.desc') }}</p>
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div class="container">
          <div class="row" style="justify-content:center; text-align:center">
          <input type="search" :placeholder="$t('information.search')" />
          <button type="button">{{ $t('information.explore') }}</button>
        </div>
        </div>
        <div class="container" style="margin-top:5%">
          <h4><b>{{ $t('courses.name1') }}</b></h4>
          <div class="row" style="margin-top:4%; text-align:center; justify-content:center; margin-bottom: 5%">
            <div 
                    v-for="grade in grades" 
                    :key="grade.name"
                    method="changediv"
                    class="card-grade"
                    v-bind:id="grade.id"
                    v-on:click="select(grade.name)">
                    <h5>{{grade.name}} <br>{{ $t('courses.grades') }}</h5></div>
        </div>
        <h4><b>{{ $t('courses.name2') }}</b></h4>
        <div class="row" style="margin-top:4%; text-align:center; justify-content:center">
        <Courses style="height: 200px"/>
        </div>
        </div>
    </div>
</template>

<script>
import {grades} from '../data/main-page-info'
import Courses from '../components/Courses'

export default {
  components:{
    Courses
  },
  data(){
    return{
    grades
    }
  },
  methods: {
    select: function(number) {
        this.$router.push(
          {
            path: '/grade-'+number,
          }
        )
      }
  }
}
</script>


<style scoped src='../assets/styles/information.css'>

</style>
