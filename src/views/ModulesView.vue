<template>
  <main
    class="ease-soft-in-out relative h-full max-h-screen rounded-xl transition-all duration-200"
  >
    <!-- Navbar -->
    <nav
      class="relative flex flex-wrap items-center justify-between px-0 py-2 mx-2 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
      navbar-main
      navbar-scroll="true"
    >
      <div
        class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit"
      >
        <h6 class="mb-0 font-bold capitalize">Gestion des Modules</h6>

        <div
          class="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto"
        >
          <div class="flex items-center md:ml-auto md:pr-4">
            <div
              class="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft"
            >
              <span
                class="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all"
              >
                <i class="fas fa-search"></i>
              </span>
              <input
                type="text"
                class="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                placeholder="Type here..."
              />
            </div>
          </div>
          <ul class="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
            <!-- online builder btn  -->

            <li class="flex items-center">
              <div class="inline-flex items-end px-5">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
                >
                  <i class="p-2 fa fa-search text-slate-50"></i>
                  Rechercher
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- cards -->
    <div class="w-full px-2 py-2 mx-auto">
      <modulesBodyVue></modulesBodyVue>
      <footerVue></footerVue>
    </div>
    <!-- end cards -->
  </main>
</template>
<script>
import { ref, reactive, watchEffect, computed } from "vue";

import footerVue from "../components/general/footer.vue";
import modulesBodyVue from "../components/modules/modulesBody.vue";

export default {
  name: "",
  props: {},

  setup(props) {
    const Login = ref(false);

    watchEffect(() => {}); // expose the state to the template
    return {
      Login,
    };
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {}, 
  components: { footerVue, modulesBodyVue },
};
</script>
<style lang="scss" scoped></style>
