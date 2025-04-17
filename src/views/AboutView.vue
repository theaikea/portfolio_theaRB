can you make this site responsive to a phone screen:

<template>
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 md:mt-8 mx-8 md:ml-8 text-xl md:text-3xl">
        <p class="poppins col-start-1 row-start-5">Hello! I’m Thea <br> - a digital designer driven by creativity, curiosity, and a deep passion for human connections and the world we live in <3 <br> Based in Copenhagen, where I'm currently studying Coded Design at the Danish School of Media and Journalism. </p>
      </div>
      <div class="image-container">
        <img v-for="(image, index) in images" :key="index" :src="image.src" :style="{ bottom: image.positionY + 'px', left: image.positionX + 'px' }" class="sticker absolute">
      </div>

      <div class="cvButton ml-8 mt-2 col-start-1 row-start-6 inline-block hover:rotate-180">
        <a :href="CVTheaPDF" target="_blank" class="poppins font-bold text-[#DC4E36] ">click here to see my resume</a>
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
  // Import the PDF file
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
        // Assign the imported PDF file to a variable
        CVTheaPDF: CVTheaPDF
      };
    },
    mounted() {
      this.animateImages();
    },
    methods: {
      animateImages() {
        const self = this;
        setInterval(() => {
          self.images.forEach(image => {
            image.positionY += image.speed;
            if (image.positionY >= window.innerHeight) {
              image.positionY = -800;
            }
          });
        }, 50);
      }
    }
  };
  </script>
  
  <style>
  .image-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
  }
  
  .sticker {
    height: 60%;
  }

  </style>
  