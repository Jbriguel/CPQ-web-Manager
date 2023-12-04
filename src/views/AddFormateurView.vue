<template>
  <body
    class="m-0 font-sans text-base antialiased font-normal leading-default text-slate-500"
  >
    <main
      class="ease-soft-in-out relative h-full max-h-screen rounded-xl transition-all duration-200"
    >
      <!-- Navbar -->
      <nav
        class="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
        navbar-main
        navbar-scroll="true"
      >
        <div
          class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit"
        >
          <div>
            <img
              src="../assets/images/logo/Logo.png"
              class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl"
              alt="user1"
            />
          </div>
          <h6 class="mb-0 font-bold capitalize">Cloud PractoQuiz</h6>

          <div
            class="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto"
          >
            <li class="flex items-center md:ml-auto md:pr-4">
              <a
                class="inline-block px-8 py-2 mb-0 mr-4 text-xs font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro border-blue-500 ease-soft-in hover:scale-102 active:shadow-soft-xs text-blue-500 hover:border-blue-500 active:bg-blue-500 active:hover:text-blue-500 hover:text-blue-500 tracking-tight-soft hover:bg-transparent hover:opacity-75 hover:shadow-none active:text-white active:hover:bg-transparent"
                href="/"
                >Accueil</a
              >
            </li>
          </div>
        </div>
      </nav>

      <!-- cards -->
      <div class="w-full px-6 py-2 mx-auto">
        <addFormateur></addFormateur> 
       
      </div>
      <!-- end cards  <footerVue></footerVue>-->
    </main>
  </body>
</template>
<script>
import { ref, reactive, watchEffect, computed } from "vue";
import addFormateur from "../components/Formateurs/addFormateur.vue";

import footerVue from '../components/general/footer.vue';

export default {
  name: "AddFormateurView",
  props: {},

  setup(props) {
    watchEffect(() => {}); // expose the state to the template
    return {};
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  components: { footerVue ,addFormateur},
};
</script>
<style lang="scss" scoped></style>
