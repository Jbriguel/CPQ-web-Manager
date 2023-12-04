<template>
  <div class="w-full px-4 py-4 mx-auto bg-slate-50 rounded-2xl">
    <!-- table 1 -->

    <div class="flex flex-wrap -mx-3">
      <div class="flex-none w-full max-w-full px-3">
        <div
          class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-sm rounded-md bg-clip-border"
        >
          <div
            class="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent"
          >
            <h6>Tous les Formateurs</h6>
          </div>
          <div class="flex-auto px-0 pt-0 pb-2">
            <div class="p-0 overflow-x-auto">
              <table
                class="items-center w-full mb-0 align-top border-gray-200 text-slate-500"
              >
                <thead class="align-bottom">
                  <tr>
                    <th
                      class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                    >
                      Noms
                    </th>
                    <th
                      class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                    >
                      Adresse
                    </th>
                    <th
                      class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                    >
                      Status
                    </th>
                    <th
                      class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                    >
                      Domaine
                    </th>
                    <th
                      class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"
                    ></th>
                  </tr>
                </thead>
                <tbody></tbody>
                <formateurLine v-for="(item, index) in 5" :key="index" />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formateurLine from './formateurLine.vue';
export default {
  components: { formateurLine },
};
</script>

<style></style>
