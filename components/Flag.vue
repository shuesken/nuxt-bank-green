<template>
    <LazyImage
        v-if="country && country != -1"
        :src="`/img/flags/${country.toLowerCase()}.png`"
        imgClass="bg-no-repeat bg-center bg-contain"
    />
    <span v-else></span>
</template>

<script>
import LazyImage from '@/components/LazyImage.vue'

export default {
    components: { LazyImage },
    props: {
        country: String,
    },
}
</script>
