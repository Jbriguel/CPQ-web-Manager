<template>
  <section
    class="m-0 font-sans text-base antialiased font-normal leading-default text-slate-500 bg-transparent"
  >
  
    <sidebarVue @selectOption="selectOption" :optSelected="optionSelected" :isSelected ="isOptionSelected"/>
    <p>{{ optionSelected }}</p>
    <main
      class="ease-soft-in-out xl:ml-68.5  relative  h-screen rounded-xl transition-all duration-200"
    >
      <!-- cards -->
      <DashboardView v-if="optionSelected==0"/>
      <UsersView v-if="optionSelected==1"/>
      <FormateursView v-if="optionSelected==2"/>
      <ModulesView v-if="optionSelected==3"/>

      <!-- end cards -->
    </main>
          <!--<footer>
      <footerVue></footerVue>
    </footer>-->
  </section>
</template>
<script>
import { ref, reactive, watchEffect, computed } from "vue";

import sidebarVue from "../components/sidebar/sidebar.vue";
import footerVue from "../components/general/footer.vue";
import UsersView from "./UsersView.vue";
import ModulesView from "./ModulesView.vue";
import FormateursView from "./FormateursView.vue";
import DashboardView from "./DashboardView.vue";


export default {
  name: "",
  props: {},

  setup(props) {
    const Login = ref(false);
    const optionSelected = ref(0);

    function selectOption(n) {
      optionSelected.value = n;
    }

    function isOptionSelected(n) {
      if(optionSelected.value = n) return true;
      return false
    }

    watchEffect(() => {}); // expose the state to the template
    return {
      Login,
      optionSelected,selectOption,isOptionSelected
    };
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  methods: {},
  components: { sidebarVue, footerVue, DashboardView,UsersView,ModulesView,FormateursView },
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
