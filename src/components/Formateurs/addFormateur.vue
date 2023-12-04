<template>
  <div class="w-full max-w-full px-3 text-center flex-0">
    <h3 class="mt-12">Build Your Profile</h3> 
    <h5 class="font-normal dark:text-white text-slate-400">
      This information will let us know more about you.
    </h5>
    <div multisteps-form class="mb-12">
      <div class="flex flex-wrap -mx-3">
        <div class="w-full max-w-full px-3 mx-auto my-12 flex-0 lg:w-8/12">
          <div class="grid grid-cols-3">
            <button
              aria-controls="about"
              type="button"
              class="before:w-3.4 before:h-3.4 before:rounded-circle before:scale-120 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 text-slate-700 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:bg-current before:transition-all before:ease-linear before:content-[''] sm:indent-0"
              title="About"
            >
              <span class="text-slate-400">About</span>
            </button>
            <button
              aria-controls="account"
              type="button"
              class="before:w-3.4 before:h-3.4 before:rounded-circle after:top-1.25 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 text-slate-100 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:bg-white before:transition-all before:ease-linear before:content-[''] after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[''] sm:indent-0"
              title="Account"
            >
              Account
            </button>
            <button
              aria-controls="address"
              type="button"
              class="before:w-3.4 before:h-3.4 before:rounded-circle after:top-1.25 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 text-slate-100 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:bg-white before:transition-all before:ease-linear before:content-[''] after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[''] sm:indent-0"
              title="Address"
            >
              Address
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3">
        <div class="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
          <form class="relative mb-32">
            <transition name="slide-fade">
              <div
                v-show="stepIndex === 1"
                active
                form="about"
                class="absolute top-0 left-0 flex flex-col visible w-full h-auto min-w-0 p-4 break-words bg-white border-0 opacity-100 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
              >
                <div class="flex flex-wrap -mx-3 text-center">
                  <div class="w-10/12 max-w-full px-3 mx-auto flex-0">
                    <h5 class="font-normal dark:text-white">
                      Let's start with the basic information
                    </h5>
                    <p>
                      Let us know your name and email address. Use an address you don't
                      mind other users contacting you at
                    </p>
                  </div>
                </div>
                <div>
                  <div class="flex flex-wrap mt-4 -mx-3">
                    <div class="w-full max-w-full px-3 flex-0 sm:w-4/12">
                      <div
                        class="relative inline-flex items-center justify-center text-white transition-all duration-200 w-28 h-28 text-base ease-soft-in-out rounded-xl"
                      >
                        <img
                          class="w-full rounded-lg"
                          src="../../assets/img/team-2.jpg"
                          alt="Image placeholder"
                        />
                        <a
                          href="javascript:;"
                          class="inline-block w-6 h-6 p-1.2 right-0 bottom-0 absolute -mb-2 -mr-2 font-bold text-center uppercase align-middle transition-all bg-gradient-to-tl from-gray-400 to-gray-100 text-slate-800 border-0 border-transparent border-solid rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 active:opacity-85"
                        >
                          <i class="top-0 fa fa-pen text-3xs"></i>
                        </a>
                      </div>
                    </div>
                    <div
                      class="w-full max-w-full px-3 mt-6 text-left flex-0 sm:w-8/12 sm:mt-0"
                    >
                      <label
                        class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                        for="First Name"
                        >First Name</label
                      >
                      <input
                        type="text"
                        name="First Name"
                        placeholder="Eg. Michael"
                        class="mb-4 focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      />
                      <label
                        class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                        for="Last Name"
                        >Last Name</label
                      >
                      <input
                        type="text"
                        name="Last Name"
                        placeholder="Eg. Tomson"
                        class="mb-4 focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      />
                      <label
                        class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                        for="Email Address"
                        >Email Address</label
                      >
                      <input
                        type="email"
                        name="Email Address"
                        placeholder="Eg. soft@dashboard.com"
                        class="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div class="flex mt-6">
                    <button
                      type="button"
                      aria-controls="account"
                      next-form-btn
                      href="#" @click.prevent="nextStep()"
                      class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </transition>
            <transition name="slide-fade">
              <div
                v-show="stepIndex === 2"
                form="account"
                class="absolute top-0 left-0 flex flex-col invisible w-full h-0 min-w-0 p-4 break-words bg-white border-0 opacity-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
              >
                <div class="flex flex-wrap -mx-3 text-center">
                  <div class="w-10/12 max-w-full px-3 mx-auto flex-0">
                    <h5 class="font-normal dark:text-white">
                      What are you doing? (checkboxes)
                    </h5>
                    <p>
                      Give us more details about you. What do you enjoy doing in your
                      spare time?
                    </p>
                  </div>
                </div>
 <!---- ici --->
              </div>
            </transition>
            <transition name="slide-fade">
              <div
                v-show="stepIndex === 3"
                form="address"
                class="absolute top-0 left-0 flex flex-col invisible w-full h-0 min-w-0 p-4 break-words bg-white border-0 opacity-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
              >
                <div class="flex flex-wrap -mx-3 text-center">
                  <div class="w-10/12 max-w-full px-3 mx-auto flex-0">
                    <h5 class="font-normal dark:text-white">
                      Are you living in a nice area?
                    </h5>
                    <p>
                      One thing I love about the later sunsets is the chance to go for a
                      walk through the neighborhood woods before dinner
                    </p>
                  </div>
                </div>

                <div>
                  <div class="flex flex-wrap -mx-3 text-left">
                    <div class="w-full max-w-full px-3 mt-4 ml-auto flex-0 md:w-8/12">
                      <label
                        class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                        for="Street Name"
                        >Street Name</label
                      >
                      <input
                        type="text"
                        name="Street Name"
                        placeholder="Eg. Soft"
                        class="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      />
                    </div>
                    <div class="w-full max-w-full px-3 mt-4 ml-auto flex-0 md:w-4/12">
                      <label
                        class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                        for="Street No"
                        >Street No</label
                      >
                      <input
                        type="number"
                        name="Street No"
                        min="01"
                        placeholder="Eg 221"
                        class="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      />
                    </div>
                    <div class="w-full max-w-full px-3 mt-4 ml-auto flex-0 md:w-7/12">
                      <label
                        class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                        for="City"
                        >City</label
                      >
                      <input
                        type="text"
                        name="City"
                        placeholder="Eg Tokyo"
                        class="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      />
                    </div>
                <!---- ici --->
                    
                  </div>
                  <div class="flex flex-wrap -mx-3">
                    <div class="flex w-full max-w-full px-3 mt-6 flex-0">
                      <button
                        type="button"
                        aria-controls="account"
                        prev-form-btn
                        href="#" @click.prevent="prevStep()"
                        class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-gray-400 to-gray-100 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 text-slate-800"
                      >
                        Prev
                      </button>
                      <button
                        type="button"
                        send-form-btn
                        href="#" @click.prevent="nextStep()"
                        class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watchEffect, ref } from "vue";
export default {
  name: "AddFormateur",
  props: {},

  setup(props) {
    watchEffect(() => {}); // expose the state to the template

    return {};
  },
  mounted() {},
  data() {
    let stepIndex = 1;
    return {
      stepIndex,
    };
  },
  methods: {
    nextStep() {
      this.stepIndex += 1;
    },
    prevStep() {
      this.stepIndex -= 1;
    },
  },
};
</script>

<style></style>
