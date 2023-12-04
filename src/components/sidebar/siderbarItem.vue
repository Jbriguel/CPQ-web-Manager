<template>
  <a
    :class="isSelected == true ? 'bg-blue-400  shadow-soft-xl  ' : 'transition-colors'"
    class="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
    
  >
    <div
    :class="isSelected == true ? 'bg-blue-400 ' : 'bg-gradient-to-tl from-blue-600 to-blue-400 shadow-soft-2xl  '"
      class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg  bg-center stroke-0 text-center xl:p-2.5"
    >
      <slot  name="icon"></slot>
    </div>
    <span style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"  :class="isSelected == true ? 'text-white  ' : 'transition-colors  '" class="ml-1 duration-300 whitespace-break-spaces   ">{{
      title
    }}</span>
  </a>
</template>

<script>
import { ref, reactive, watchEffect, computed } from "vue";

export default {
  name: "",
  props: {
    isSelected: {
      require: true,
      type: Boolean,
    },
    title: {
      require: true,
      type: String,
    },
  },

  setup(props) {
    let isSelected = ref(false);

    watchEffect(() => {
      isSelected.value = props.isSelected;
    }); // expose the state to the template
    return {
      isSelected,
    };
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  methods: {},
  components: {},
};
</script>

<style></style>
