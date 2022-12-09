<template>
  <div v-if="slice?.primary.target.provider_name === 'YouTube'" v-html="fixYoutube(slice.primary.target.html)">
  </div>
  <div v-else-if="slice?.primary.target.provider_name === 'Instagram'" v-html="slice.primary.target.html">
  </div>
  <div v-else>
    <pre>
      {{ JSON.stringify(slice?.primary.target) }}
    </pre>
  </div>
</template>

<script setup>
import { getSliceComponentProps } from "@prismicio/vue";

function fixYoutube(html) {
  const widthRe = /width="\d+"/
  const heightRe = /height="\d+"/
  return html.replace(widthRe, `width=640`).replace(heightRe, `height=360`)
}

const props = defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
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
