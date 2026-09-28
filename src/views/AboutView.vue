<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 md:mt-8 mx-4 md:ml-6">
      <div class="col-start-1 relative z-1 poppins md:text-lg text-black leading-relaxed">
        <p class="poppins text-xl md:text-4xl mb-10">
          Hej!:) Mit navn er Thea og jeg er mega sej og det her er noget af det jeg har brugt min tid på:
        </p>

        <section v-for="section in cv" :key="section.title" class="mb-20">
          <h2 class="poppins text-black text-xl md:text-2xl mb-8">{{ section.title }}</h2>
          <div v-for="item in section.items" :key="item.title" class="mb-6">
            <p v-if="item.period" class="text-sm poppins-extralight mb-1">{{ item.period }}</p>
            <p class="">{{ item.title }}</p>
            <p v-if="item.text" class="poppins-extralight mt-2">{{ item.text }}</p>
          </div>
        </section>
      </div>
    </div>

    <div class="image-container">
      <img v-for="(image, index) in images" :key="index" :src="image.src" :style="{ bottom: image.positionY + 'px', left: image.positionX + 'px' }" class="sticker absolute">
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
      cv: [
        {
          title: 'Uddannelse',
          items: [
            {
              period: 'Aug 2026 -',
              title: 'Københavns Universitet, kandidat i Visuel Kultur',
            },
            {
              period: 'Sep 2023 - Jun 2026',
              title: 'Danmarks Medie- og Journalisthøjskole, professionsbachelor i Visuel Kommunikation, Coded Design',
              text: 'Min bachelor har givet mig stærke praktiske kompetencer i at arbejde kreativt, konceptuelt og analytisk med visuel kommunikation, med særligt fokus på kode som kreativt værktøj.',
            },
            {
              period: 'Sep 2021 - Maj 2022',
              title: 'Fana folkehøgskule i Bergen, billedkunstlinje',
              text: 'Undervisning i billedkunstens principper og teknikker som oliemaling, kul, linoleumstryk og akvarel.',
            },
          ],
        },
        {
          title: 'Erhvervserfaring',
          items: [
            {
              period: 'Aug 2026 -',
              title: 'Redaktionsassistent hos Radionauterne',
            },
            {
              period: 'Maj 2025 -',
              title: 'Forhuspersonale og bartender hos kultur- og comedyscenen Teater Play',
            },
            {
              period: 'Okt 2025 - Mar 2026',
              title: 'Praktikant hos No Parking',
              text: 'Jeg udviklede grafisk materiale og visuelt indhold til skærme og rum til museumsudstillinger i hele Norden.',
            },
            {
              period: 'Feb 2023 - Apr 2025',
              title: 'Bartender og garderobe i K.B. Hallen',
            },
            {
              period: 'Aug 2020 - Jun 2021',
              title: 'Socialpædagogisk støtte-sekretær',
              text: 'Jeg var sekretær for en ung mand med cerebral parese, som læste HF-enkeltfag.',
            },
            {
              period: 'Sep 2019 - Aug 2021',
              title: 'Frivillig hos værestedet KOMsammen KBH Ventilen',
              text: 'Et værested for unge, der føler sig ensomme.',
            },
          ],
        },
      ],
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
