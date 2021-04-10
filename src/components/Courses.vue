<template>
<carousel-3d>
  <slide v-for="(slide, i) in slides" :index="i" :key="slide.id" :id="slide.name" style="width:70%; height:60%">
      <div class="content"><h3>{{slide.title}}</h3></div>
</slide>
</carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import {grades} from '../data/main-page-info'

export default {
    data(){
        return{
        grades,
        slides: [
            { id: 1, title: 'Натуральные числа', name: 'one' },
            { id: 2, title: 'Площади и объемы', name: 'two' },
            { id: 3, title: 'Отношения и пропорции', name: 'three' },
            { id: 4, title: 'Решение уравнений', name: 'four' },
            { id: 5, title: 'Дробные числа', name: 'five' },
            { id: 6, title: 'Основы комбинаторики', name: 'six' },
            { id: 7, title: 'Делимость чисел', name: 'seven' },
            { id: 8, title: 'Координаты на плоскости', name: 'eight' },
            ]
        }
    },
  components: {
    Carousel3d,
    Slide
  }
};
</script>

<style scoped src="../assets/styles/components.css">

</style>