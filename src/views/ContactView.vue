<template>
    <div class="flex justify-center -mt-10 items-center h-screen">
      <div class="text-center poppins font-semibold">
        <div v-for="(contact, key) in contacts" :key="key">
          <a href="#" class="text-8xl block hover:text-[#DC4E36]" @mouseover="showContact(key)" @mouseout="hideContact(key)" @click.prevent="navigate(contact.link)">
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
        show: {
          phoneNumber: false,
          email: false,
          instagram: false,
          github: false,
        },
        contacts: [
          { label: 'Call me', display: '+45 60 54 21 51', link: 'tel:+4560542151' },
          { label: 'Write me', display: 'thea0604@gmail.com', link: 'mailto:thea0604@gmail.com' },
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
      navigate(url) {
        window.open(url, '_blank');
      },
    },
  };
  </script>