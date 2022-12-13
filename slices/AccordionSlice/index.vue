<template>
  <div>
    <!-- <pre>
      {{ JSON.stringify(slice.primary.contentlink.data, null, 2) }}
    </pre> -->
    <div class="px-5 py-4 flex items-center justify-between cursor-pointer bg-white hover:bg-gray-50" :class="{
      'rounded-t-xl': isOpen,
      'rounded-xl': !isOpen,
      'pointer-events-none bg-gray-50': !loaded,
    }" @click="isOpen = !isOpen">
      <transition enter-active-class="duration-200 transform-gpu origin-top ease-out"
        enter-from-class="opacity-0 scale-y-95" enter-to-class="opacity-100 scale-y-100"
        leave-active-class="duration-100 transform-gpu origin-top ease-in" leave-from-class="opacity-100 scale-y-100"
        leave-to-class="opacity-0 scale-y-95" mode="out-in">
        <h2 class="font-semibold md:!text-lg text-gray-700 mr-4">
          {{ slice.primary.contentlink.data.title }}
        </h2>
      </transition>

      <svg :class="
        'flex-none transform-gpu transition-transform h-3 text-sushi-500 ' +
        caratClass +
        (isOpen ? ' rotate-180' : ' rotate-0')
      " viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </div>
    <transition enter-active-class="duration-200 transform-gpu origin-top ease-out"
      enter-from-class="opacity-0 scale-y-95" enter-to-class="opacity-100 scale-y-100"
      leave-active-class="duration-100 transform-gpu origin-top ease-in" leave-from-class="opacity-100 scale-y-100"
      leave-to-class="opacity-0 scale-y-95">
      <div v-if="isOpen"
        class="max-w-full prose md:prose-lg border-t border-gray-200 px-5 py-4 text-gray-600 rounded-b-xl bg-white">
        <SliceZone :slices="slice.primary.contentlink.data.slices" :components="sliceComps" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { getSliceComponentProps } from "@prismicio/vue";
import { components } from '~~/slices'
import { defineSliceZoneComponents } from '@prismicio/vue';
const sliceComps = ref(defineSliceZoneComponents(components))

const props = defineProps({
  caratClass: {
    type: String,
    default: "text-ocean-400"
  },
  ...getSliceComponentProps(["slice", "index", "slices", "context"])
}
)

const isOpen = ref(true)

</script>

<style scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}

.title {
  margin-bottom: 2em;
}
</style>
