<template>
    <div class="bg-sushi-50">
        <div class="page-fade-in contain max-w-3xl xl:max-w-4xl py-24 sm:py-32">
            <h1 class="text-2xl sm:text-5xl font-extrabold text-sushi-900 mb-4">
                Disclaimer
            </h1>
            <article class="mx-auto prose sm:prose-lg xl:prose-xl break-words" v-html="content"></article>
        </div>
    </div>
</template>

<script>
import content from './disclaimer.md'

export default {
    data() {
        return { content }
    },
    setup() {
        useHead({ title: 'Disclaimer' })
    },
}
</script>

