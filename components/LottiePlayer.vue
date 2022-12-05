<template>
    <RenderWhenVisibleInViewPort
        :placeholderWidth="placeholderWidth"
        :placeholderHeight="placeholderHeight"
        :options="{ rootMargin: '500px' }"
    >
        <LottieFile :path="path" />
    </RenderWhenVisibleInViewPort>
</template>

<script>
import LottieFile from './LottieFile.vue'
import RenderWhenVisibleInViewPort from './func/RenderWhenVisibleInViewPort'

export default {
    components: { LottieFile, RenderWhenVisibleInViewPort },
    props: {
        placeholderWidth: Number,
        placeholderHeight: Number,
        path: String,
    },
}
</script>
