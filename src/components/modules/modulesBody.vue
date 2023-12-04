<template>
  <div class="w-full px-2 py-6 mx-2">
    <!-- table 1 -->

    <div class="flex-none w-full max-w-full px-2 mt-2">
      <div
        class="relative flex flex-col min-w-0 mb-6 break-words bg-slate-50 border-0 shadow-sm rounded-2xl bg-clip-border"
      >
        <div class="p-4 pb-0 mb-0 bg-slate-50 rounded-t-2xl">
          <h6 class="mb-1">Tous les modules</h6> 
        </div>
        <div class="flex-auto p-4">
          <div class="flex flex-wrap -mx-3">
            <div
              class="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12"
            >
              <div
                class="relative flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none rounded-2xl border-slate-100 bg-clip-border"
              >
                <div class="flex flex-col justify-center flex-auto p-6 text-center">
                  <a href="/addModule">
                    <i class="mb-4 fa fa-plus text-slate-400"></i>
                    <h5 class="text-slate-400">Nouveau Module</h5>
                  </a>
                </div>
              </div>
            </div>

            <moduleItemVue/>
            <moduleItemVue/>
            <moduleItemVue/> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moduleItemVue from './moduleItem.vue';
export default {
  components: {moduleItemVue},
};
</script>

<style></style>
