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
        <h6 class="mb-0 font-bold capitalize">Gestion des Utilisateurs</h6>

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
              <div class="inline-flex items-end px-2">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-norma py-1 px-4 rounded"
                >
                  Rechecher
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="text-right m-1 px-5">
      <div class="inline-flex items-end px-5">
        <a href="/addUser">
        <button class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded">
          <i class="p-2 fa fa-add text-slate-50"></i>
          Nouvel utilisateur
        </button></a>
      </div>
    </div>

    <!-- cards -->
    <div class="w-full px-2 py-2 mx-auto">
      <usersBodyVue></usersBodyVue>
      <footerVue></footerVue>
    </div>
    <!-- end cards -->
  </main>
</template>
<script>
import { ref, reactive, watchEffect, computed } from "vue";

import sidebarVue from "../components/sidebar/sidebar.vue";
import footerVue from "../components/general/footer.vue";
import usersBodyVue from "../components/users/usersBody.vue";

export default {
  name: "",
  props: {},

  setup(props) {
    const Login = ref(false);
    let isMenuOpen = ref(false);
    const toggleNav = () => (isMenuOpen.value = !isMenuOpen.value);

    watchEffect(() => {}); // expose the state to the template
    return {
      isMenuOpen,
      toggleNav,
      Login,
    };
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  methods: {},
  components: { sidebarVue, footerVue, usersBodyVue },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700;800&display=swap");

@keyframes float {
  0% {
    box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 15px 10px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-10px);
  }
  100% {
    box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}

.floatated {
  box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.6);
  transform: translatey(0px);
  animation: float 4s ease-in-out infinite;
}

/**################### ################### */
nav {
  z-index: 10;
}

nav.scrolled {
  @apply shadow-2xl;
  border-bottom: 0px;
  background-color: #000000;
}
.Nav_Link::after {
  content: "";
  display: block;
  width: 0;
  height: 3px;
  background: orange;
  transition: width 0.3s ease-in-out;
}

.Nav_Link:hover::after {
  width: 100%;
}
</style>
