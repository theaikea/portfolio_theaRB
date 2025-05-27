<template>
  <div class="relative">
    <!-- CV link always on top -->
    <div class="cvButton ml-4 mt-4 sm:ml-8 sm:mt-6 inline-block hover:rotate-180 z-50 relative">
      <a :href="CVTheaPDF" target="_blank" class="poppins font-bold text-[#DC4E36] text-base sm:text-xl">
        click here to see my resumé
      </a>
    </div>

    <!-- Text content -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-4 sm:mt-8 mx-4 sm:mx-8 text-base sm:text-xl md:text-3xl relative z-50">
      <p class="poppins">
        Hej! I’m Thea <br />
        a digital designer driven by creativity, curiosity, and a deep passion for human connections and the world we live in &lt;3
      </p>
      <p class="poppins">
        I’m currently studying Coded Design at the Danish School of Media and Journalism in Copenhagen, where I’m working on becoming even cooler than I already am :)
      </p>
    </div>

    <!-- Images container with lower z-index -->
    <div class="image-container z-0">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :style="{ bottom: image.positionY + 'px', left: image.positionX + 'px' }"
        class="sticker absolute pointer-events-none"
      />
    </div>
  </div>
</template>

<script>
import TheaImage from '@/assets/images/thea.png';
import Thea2Image from '@/assets/images/thealille.png';
import Thea3Image from '@/assets/images/thea3.png';
import Thea5Image from '@/assets/images/thea5.png';
import Thea6Image from '@/assets/images/thea6.png';
import Thea8Image from '@/assets/images/thea8.png';
import Thea9Image from '@/assets/images/thea9.png';
import CVTheaPDF from '@/assets/thea_cv.pdf';

export default {
  data() {
    return {
      images: [
        { src: TheaImage, positionX: 100, positionY: -700, speed: 5 },
        { src: Thea2Image, positionX: 200, positionY: -600, speed: 7 },
        { src: Thea3Image, positionX: 700, positionY: -610, speed: 4 },
        { src: Thea5Image, positionX: 500, positionY: -950, speed: 6 },
        { src: Thea6Image, positionX: 900, positionY: -1500, speed: 8 },
        { src: Thea8Image, positionX: 600, positionY: -1060, speed: 3 },
        { src: Thea9Image, positionX: 300, positionY: -1600, speed: 7 },
      ],
      CVTheaPDF: CVTheaPDF,
    };
  },
  mounted() {
    this.animateImages();
  },
  methods: {
    animateImages() {
      setInterval(() => {
        this.images.forEach(image => {
          image.positionY += image.speed;
          if (image.positionY >= window.innerHeight) {
            image.positionY = -800;
          }
        });
      }, 50);
    },
  },
};
</script>

<style>
.image-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0; /* behind the text and link */
}

.sticker {
  height: 40vw; /* responsive size relative to viewport width */
  max-height: 200px;
  object-fit: contain;
}
</style>