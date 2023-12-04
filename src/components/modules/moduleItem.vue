<template>
   <div
              class="w-full max-w-full p-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12 "
            >
              <div
                class="relative flex flex-col p-2 min-w-0 break-words bg-white border-0 shadow-md rounded-xl bg-clip-border"
              >
                <div class="  h-40 overflow-hidden bg-cover rounded-xl"
            style="background-image: url('../../assets/img/ivancik.jpg')"> 
                   
                </div>
                <div class="flex-auto px-1 pt-6">
                  <p
                    class="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text"
                  >
                    Nom de l'auteur
                  </p>
                  <a href="#">
                    <h5>Titre du Module</h5>
                  </a>
                  <p class="mb-6 leading-normal text-sm">
                    As Uber works through a huge amount of internal management turmoil.
                  </p>
                  <div class="align-middle">
                    <button
                      type="button"
                      class="inline-block w-full px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-blue-500 text-blue-500 hover:border-blue-500 hover:bg-transparent hover:text-blue-500 hover:opacity-75 hover:shadow-none active:bg-blue-500 active:text-white active:hover:bg-transparent active:hover:text-blue-500"
                    >
                      Voir Module
                    </button>
                  </div>
                </div>
              </div>
            </div>
</template>

<script>
import { watchEffect } from 'vue'
export default {
    name:"ModuleItem",
    setup( ) {  
    watchEffect(() => {});
    return { 
    };
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {}, 
    components:{}

}
</script>

<style>

</style>