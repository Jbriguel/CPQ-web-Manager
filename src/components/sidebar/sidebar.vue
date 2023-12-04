<template>
  <!-- sidenav  -->
  <section class="bg-slate-50">
  <aside
    class="max-w-62.5 ease-nav-brand bg-slate-50 z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0  p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent"
  >
    <div class="h-16 bg-slate-50">
      <i
        class="absolute top-0 right-0 hidden p-4 opacity-50 bg-transparent cursor-pointer fas fa-times text-slate-400 xl:hidden"
        sidenav-close
      ></i>
      <a
        class="block bg-slate-50 px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700"
        href="javascript:;"
        target="_blank"
      >
        <img
          src="@/assets/images/logo/Logo.png"
          class="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8"
          alt="main_logo"
        />
        <span class="ml-1 font-semibold transition-all duration-200 ease-nav-brand"
          >Practo Manager</span
        >
      </a>
    </div>

    <hr
      class="h-px mt-0   "
    />

    <div class="items-center block w-auto overflow-hidden grow basis-full bg-slate-50">
      <ul class="flex flex-col pl-0 mb-0 bg-slate-50">
        <li class="w-full mt-4">
          <h6 class="pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60">
            DashBoard
          </h6>
        </li>
        <li class="mt-0.5 w-full">
          <siderbarItem
            :title="'Tableau de Bord '"
            :isSelected="optSelected == 0"
            @click="$emit('selectOption', 0)"
          >
            <template #icon>
              <i
                class="leading-none fa fa-square-poll-vertical text-lg text-white"
                aria-hidden="true"
              >
              </i>
            </template>
          </siderbarItem>
        </li>
        <li class="w-full mt-4">
          <h6 class="pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60">
            Membres
          </h6>
        </li>

        <li class="mt-0.5 w-full">
          <siderbarItem
            :title="'Les utilisateurs '"
            :isSelected="optSelected == 1"
            @click="$emit('selectOption', 1)"
          >
            <template #icon>
              <i class="leading-none fa fa-users text-lg text-white" aria-hidden="true">
              </i>
            </template>
          </siderbarItem>
        </li>
        <li class="mt-0.5 w-full">
          <siderbarItem
            :title="'Les Formateurs'"
            :isSelected="optSelected == 2"
            @click="$emit('selectOption', 2)"
          >
            <template #icon>
              <i class="leading-none fa fa-users text-lg text-white" aria-hidden="true">
              </i>
            </template>
          </siderbarItem>
        </li>

        <li class="w-full mt-4">
          <h6 class="pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60">
            Gestion
          </h6>
        </li>
        <li class="mt-0.5 w-full">
          <siderbarItem
            :title="'Modules/Cours'"
            :isSelected="optSelected == 3"
            @click="$emit('selectOption', 3)"
          >
            <template #icon>
              <i
                class="leading-none fa fa-book text-lg text-white"
                aria-hidden="true"
              ></i>
            </template>
          </siderbarItem>
        </li>
        <li class="mt-0.5 w-full">
          <siderbarItem
            :title="'Gestion de Contenus'"
            :isSelected="optSelected == 4"
            @click="$emit('selectOption', 4)"
          >
            <template #icon>
              <i
                class="leading-none fa-solid fa-magnifying-glass-chart text-lg text-white"
                aria-hidden="true"
              ></i>
            </template>
          </siderbarItem>
        </li>

        <li class="w-full mt-4">
          <h6 class="pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60">
            Messages
          </h6>
        </li>

        <li class="mt-0.5 w-full">
          <siderbarItem
            :title="'Contributions '"
            :isSelected="optSelected == 5"
            @click="$emit('selectOption', 5)"
          >
            <template #icon>
              <i
                class="leading-none fa fa-message text-lg text-white"
                aria-hidden="true"
              ></i>
            </template>
          </siderbarItem>
        </li>
        <li class="mt-0.5 w-full">
          <siderbarItem
            :title="'Problèmes  '"
            :isSelected="optSelected == 6"
            @click="$emit('selectOption', 6)"
          >
            <template #icon>
              <i
                class="leading-none fa fa-comments text-lg text-white"
                aria-hidden="true"
              ></i
            ></template>
          </siderbarItem>
        </li>
        <li class="w-full mt-4">
          <h6 class="pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60">
            Paramètres
          </h6>
        </li>
        <li class="mt-0.5 w-full">
          <siderbarItem
            :title="'Paramètres de la Plateforme '"
            :isSelected="optSelected == 7"
            @click="$emit('selectOption', 7)"
          >
            <template #icon>
              <i
                class="leading-none fa fa-gear text-lg text-white"
                aria-hidden="true"
              ></i
            ></template>
          </siderbarItem>
        </li>
        <li class="mt-0.5 w-full">
          <siderbarItem
            :title="'Support et Aide  '"
            :isSelected="optSelected == 8"
            @click="$emit('selectOption', 8)"
          >
            <template #icon>
              <i
                class="leading-none fa fa-exclamation text-lg text-white"
                aria-hidden="true"
              ></i
            ></template>
          </siderbarItem>
        </li>
      </ul>
    </div>
  </aside>
</section>
  <!-- end sidenav -->
</template>

<script>
import siderbarItem from "./siderbarItem.vue";
import usersIconVue from "../../assets/images/icons/usersIcon.vue";
import moduleIconVue from "../../assets/images/icons/moduleIcon.vue";
import questionIconVue from "../../assets/images/icons/questionIcon.vue";
export default {
  props: {
    isSelected: {
      require: true,
      type: Boolean,
    },
    optSelected: {
      require: true,
      type: Number,
    },
  },
  components: { siderbarItem, usersIconVue, moduleIconVue, questionIconVue },
};
</script>

<style></style>
