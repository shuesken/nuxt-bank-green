<template>
    <div v-if="blog">
        <div>
            <div class="page-fade-in contain pb-8 sm:pb-10 md:pb-12 pt-24 sm:pt-32">
                <div class="max-w-3xl mx-auto mt-4 mb-8 sm:text-center">
                    <h1 class="text-2xl sm:text-5xl font-extrabold text-sushi-900 mb-4" v-html="blog.property.title">
                    </h1>
                    <span class="text-base text-gray-700 font-semibold">
                        {{ blog.property.date }} by {{ blog.property.author }}
                    </span>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <NotionRenderer class="prose sm:prose-lg xl:prose-xl break-words" :blockMap="blog.body">
                    </NotionRenderer>
                </div>
            </div>
        </div>
        <div class="bg-blue-100 text-gray-800">
            <Swoosh :color="swooshColor" direction="down" />
            <div class="contain">
                <div class="flex justify-center">
                    <CallToAction class="max-w-5xl" :title="$t('TAKE_THE_BANK_GREEN_PLEDGE')"
                        :paragraph="$t('BANKS_LIVE_AND_DIE_ON_REPUTATIONS')" :checkListItems="checkList"
                        :buttonText="$t('TAKE_THE_PLEDGE')" :light="true" />
                </div>
            </div>
            <div class="flex items-end justify-end pointer-events-none">
                <div class="w-11/12">
                    <LottiePlayer path="/anim/wind_2_without_bg.json" />
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="error" class="w-full h-screen flex items-center justify-center flex flex-col items-center">
        <p class="text-4xl font-bold">No blog found</p>
        <router-link class="mt-2 border-b border-primary-dark" to="/blog">Go back to Blogs</router-link>
    </div>
    <div v-else class="w-full h-screen flex items-center justify-center">
        <span>
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 561 553"
                style="animation: ring 2s linear infinite">
                <path d="M478 0A481 481 0 0 0 0 485v76h75c264 0 478-217 478-485V0h-75z" fill="#6C9039" />
            </svg>
        </span>
    </div>
</template>

<script>
import CallToAction from '@/components/CallToAction.vue'
import LottiePlayer from '@/components/LottiePlayer.vue'
import Swoosh from '@/components/Swoosh.vue'
import { getBlog } from '@/api/blog'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { removeTags } from '@/utils/remoeTags'
import { NotionRenderer } from 'vue3-notion'
import { useI18n } from 'vue-i18n'


export default {
    components: {
        CallToAction,
        LottiePlayer,
        Swoosh,
        NotionRenderer,
    },
    setup() {
        const route = useRoute()
        const blog = ref()
        const error = ref(false)

        onMounted(async () => {
            try {
                blog.value = await getBlog(route.params.slug)
            } catch (e) {
                error.value = true
            }
        })
        const { t } = useI18n({ useScope: 'global' })
        useHead({
            title: computed(
                () => removeTags(blog.value?.property?.title) ?? 'Bank Green'
            ),
            description: computed(
                () => blog.value?.property?.description ?? t('INDEX_DESC')
            ),
            image: computed(
                () => blog.value?.property?.image ?? '/img/logo.svg'
            ),
        })

        const checkList = [
            t('SEND_A_MESSAGE_TO_YOUR_BANK'),
            t('JOIN_A_FAST_GROWING_MOVEMENT'),
            t('TAKE_A_CRITICAL_CLIMATE_ACTION'),
        ]
        return { blog, error, checkList }
    },
}
</script>

<style lang="postcss">
.notion-image-inset {
    margin: 0 !important;
    @apply absolute inset-0;
}

.notion-h2 span {
    @apply font-bold;
}

.notion-toggle>div {
    @apply ml-5;
}

.notion-asset-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.notion-asset-wrapper>div {
    @apply w-full h-full;
}

.notion-asset-wrapper>div>iframe {
    @apply w-full h-full;
}

.notion img {
    @apply w-full;
}
</style>
