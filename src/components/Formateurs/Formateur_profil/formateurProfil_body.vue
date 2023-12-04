<template>
  <main class="main-container">
    <section
      class="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500"
    >
      <div
        class="ease-soft-in-out relative h-full max-h-screen bg-gray-50 transition-all duration-200"
      >
        <div class="w-full px-6 mx-auto">
          <div
            class="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl"
            style="
              background-image: url('../../assets/img/curved-images/curved0.jpg');
              background-position-y: 50%;
            "
          >
            <span
              class="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-purple-700 to-pink-500 opacity-60"
            ></span>
          </div>
          <div
            class="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200"
          >
            <div class="flex flex-wrap -mx-3">
              <div class="flex-none w-auto max-w-full px-3">
                <div
                  class="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200"
                >
                  <img
                    src="../../../assets/img/bruce-mars.jpg"
                    alt="profile_image"
                    class="w-full shadow-soft-sm rounded-xl"
                  />
                </div>
              </div>
              <div class="flex-none w-auto max-w-full px-3 my-auto">
                <div class="h-full">
                  <h5 class="mb-1">Nom & Prénom(s) du Formateur</h5>
                  <p class="mb-0 font-semibold leading-normal text-sm">
                    Domaine du Formateur
                  </p>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <div class="w-full p-6 mx-auto">
          <div class="flex flex-wrap -mx-3">
            <!-- --->
            <Compte_autorisation_cardVue />
            <!-- --->

            <infos_personnel_cardVue />
            <!-- --->
            <evalutionsCardVue />
            <!-- --->

            <div class="flex-none w-full max-w-full px-3 mt-6">
              <div
                class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border"
              >
                <div class="p-4 pb-0 mb-0 bg-white rounded-t-2xl">
                  <h6 class="mb-1">Projects</h6>
                  <p class="leading-normal text-sm">Architects design houses</p>
                </div>
                <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-3">
                    <moduleItemVue />
                    <moduleItemVue />
                    <moduleItemVue />
                    <div
                      class="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12"
                    >
                      <div
                        class="relative flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none rounded-2xl border-slate-100 bg-clip-border"
                      >
                        <div
                          class="flex flex-col justify-center flex-auto p-6 text-center"
                        >
                          <a href="/addModule">
                            <i class="mb-4 fa fa-plus text-slate-400"></i>
                            <h5 class="text-slate-400">New project</h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="pt-4"></footer>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { watchEffect } from "vue";
import moduleItemVue from "../../modules/moduleItem.vue";
import footerVue from "../../general/footer.vue";
import Compte_autorisation_cardVue from "./Compte_autorisation_card.vue";
import infos_personnel_cardVue from "./infos_personnel_card.vue";
import evalutionsCardVue from "./evalutionsCard.vue";
export default {
  name: "ShowFormateurProfil_body",
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
  components: {
    footerVue,
    moduleItemVue,
    Compte_autorisation_cardVue,
    infos_personnel_cardVue,
    evalutionsCardVue,
  },
};
</script>

<style scoped></style>
