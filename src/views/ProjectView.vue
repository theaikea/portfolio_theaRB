<script>
import projectsData from '@/data/projects.json'

export default {
    data() {
        return {
            project: projectsData.find(project => project.id === this.$route.params.slug)
        }
    }
}

</script>


<template>
    <div class="grid grid-cols-2 mt-20 ml-6">

      <p class="poppins text-7xl text-[#DC4E36] font-bold italic"> {{ project.titleText }} </p>

      <p class="col-start-1 row-start-2 poppins text-2xl mt-10"> {{ project.descriptionText }} </p>

      <img v-if="project.titleImage" class="col-start-1 row-start-3 mt-5" :src="project.titleImage" alt="">
      <video v-else :src="project.video" class="col-start-1 row-start-3 sticky mt-10" autoplay muted loop></video>

      <img v-if="project.Image2" class="col-start-1 row-start-4 mt-5" :src="project.Image2" alt="">
      <video v-else :src="project.video2" class="col-start-1 row-start-5 sticky mt-5" autoplay muted loop></video>

      <p class="col-start-2 row-start-5 poppins text-lg  w-1/3 ml-6 mt-5"> {{ project.description2Text }} </p>

      <img v-if="project.Image3" class="col-start-1 row-start-5" :src="project.Image3" alt="">
      <video v-else :src="project.video3" class="col-start-1 row-start-5 sticky mt-5" autoplay muted loop></video>

      <img v-if="project.image4" class="col-start-1 row-start-6 mt-5" :src="project.image4" alt="">
      <video v-else :src="project.video4" class="col-start-1 row-start-6 sticky mt-5" autoplay muted loop></video>


      <p class="col-start-2 row-start-7 poppins text-lg  w-1/3 ml-6 mt-5"> {{ project.description3Text }} </p>

      <img v-if="project.image5" class="col-start-1 row-start-7 mt-5" :src="project.image5" alt="">
      <video v-else :src="project.video5" class="col-start-1 row-start-7 sticky mt-5" autoplay loop></video>

      <img v-if="project.image6" class="col-start-1 row-start-8 mt-5" :src="project.image6" alt="">
      <video v-else :src="project.video6" class="col-start-1 row-start-8 sticky mt-5" autoplay loop></video>
    </div>
  </template>
  