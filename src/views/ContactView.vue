<template>
  <div class="flex justify-center items-center h-screen px-4 -mt-16 pt-6">
    <div class="text-center poppins font-semibold w-full">
      <div v-for="(contact, key) in contacts" :key="key">
        <a
          href="#"
          class="block text-4xl md:text-4xl lg:text-7xl xl:text-8xl hover:text-[#DC4E36]"
          @mouseover="showContact(key)"
          @mouseout="hideContact(key)"
          @click.prevent="toggleContact(key, contact.link)"
        >
          {{ show[key] ? contact.display : contact.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: {},
      contacts: [
        { label: 'Write me', display: 'thea0604@gmail.com', link: 'mailto:thea0604@gmail.com' },
        { label: 'Linkedn', display: 'Thea Ravnsbæk Bode', link: 'https://www.linkedin.com/in/thea-ravnsb%C3%A6k-bode-6043a528b/' },
        { label: 'Instagram', display: '@lil_theaikea', link: 'https://instagram.com/lil_theaikea' },
        { label: 'Github', display: 'theaikea', link: 'https://github.com/theaikea' },
      ],
    };
  },
  methods: {
    showContact(key) {
      this.show[key] = true;
    },
    hideContact(key) {
      this.show[key] = false;
    },
    toggleContact(key, url) {
      if (window.innerWidth < 640) {
        // On mobile, clicking toggles the display
        this.show[key] = !this.show[key];
        if (this.show[key]) return;
      }
      window.open(url, '_blank');
    },
  },
};
</script>

<style>
</style>
