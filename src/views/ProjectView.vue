<script>
import projectsData from '@/data/projects.json'

export default {
  data() {
    return {
      project: projectsData.find(project => project.id === this.$route.params.slug)
    }
  },
  methods: {
    unmuteAndPlay(event) {
      const video = event.target;
      video.muted = false;
      video.play();
    }
  },
  beforeRouteEnter(to, from, next) {
    next(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    });
  }
}
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 mt-20 ml-6 gap-5">
  
    <p v-if="project.titleText" class="poppins text-5xl w-ful pr-6 sm:text-7xl text-[#DC4E36] font-bold italic"> 
      {{ project.titleText }} 
    </p>
  
    <p v-if="project.descriptionText" class="poppins text-xl w-full pr-6 sm:text-2xl mt-5 sm:mt-10 w-full col-start-1"> 
      {{ project.descriptionText }} 
    </p>
  
    <img v-if="project.titleImage" class="mt-5 w-full pr-6 sm:w-auto col-start-1" :src="project.titleImage" alt="">
    <video v-else-if="project.video" :src="project.video" class="mt-5  col-start-1 w-full pr-6 object-cover" autoplay muted loop playsinline @click="unmuteAndPlay"></video>

  
    <img v-if="project.Image2" class="mt-5 w-full pr-6 sm:w-auto col-start-1 w-4/5" :src="project.Image2" alt="">
    <video v-else-if="project.video2" :src="project.video2" class="mt-5 w-full sm:w-auto col-start-1 w-4/5 pr-6" autoplay muted loop playsinline @click="unmuteAndPlay"></video>
  
    <p v-if="project.description2Text" class="poppins text-lg pr-6 w-full sm:w-1/3 mt-5 w-4/5"> 
      {{ project.description2Text }} 
    </p>
  
    <img v-if="project.Image3" class="mt-5 w-full pr-6 sm:w-auto col-start-1 w-4/5" :src="project.Image3" alt="">
    <video v-else-if="project.video3" :src="project.video3" class="mt-5 w-full sm:w-auto col-start-1 w-4/5 pr-6" autoplay muted loop playsinline @click="unmuteAndPlay"></video>

    <p v-if="project.description25Text" class="poppins text-lg pr-6 w-full sm:w-1/3 mt-5 w-4/5"> 
      {{ project.description25Text }} 
    </p>
  
    <img v-if="project.image4" class="mt-5 w-full sm:w-auto col-start-1 w-4/5 pr-6" :src="project.image4" alt="">
    <video v-else-if="project.video4" :src="project.video4" class="mt-5 w-full sm:w-auto col-start-1 w-4/5 pr-6" autoplay muted loop playsinline @click="unmuteAndPlay"></video>
  
    <p v-if="project.description3Text" class="poppins text-lg w-full sm:w-1/3 mt-5 w-4/5 pr-6"> 
      {{ project.description3Text }} 
    </p>
  
    <img v-if="project.image5" class="mt-5 w-full sm:w-auto col-start-1 w-4/5 pr-6" :src="project.image5" alt="">
    <video v-else-if="project.video5" :src="project.video5" class="mt-5 w-full sm:w-auto col-start-1 w-4/5 pr-6" autoplay muted loop playsinline @click="unmuteAndPlay"></video>

    <p v-if="project.description4Text" class="poppins text-lg w-full sm:w-1/3 mt-5 w-4/5 pr-6"> 
      {{ project.description4Text }} 
    </p>
  
    <img v-if="project.image6" class="mt-5 w-full sm:w-auto col-start-1 w-4/5 pr-6" :src="project.image6" alt="">
    <video v-else-if="project.video6" :src="project.video6" class="mt-5 w-full sm:w-auto col-start-1 w-4/5 pr-6" autoplay muted loop playsinline @click="unmuteAndPlay"></video>
  
    <img v-if="project.image7" class="mt-5 w-full sm:w-auto col-start-1 w-4/5 pr-6" :src="project.image7" alt="">
    <video v-else-if="project.video7" :src="project.video7" class="mt-5 w-full sm:w-auto col-start-1 w-4/5 pr-6" autoplay muted loop playsinline @click="unmuteAndPlay"></video>
  
  </div>
</template>