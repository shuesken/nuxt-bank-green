<template>
    <div>
        <div>
            <div class="page-fade-in contain pb-8 sm:pb-10 md:pb-12 pt-24 sm:pt-32">
                <div class="max-w-3xl mx-auto mt-4 mb-8 sm:text-center">
                    <h1 class="text-2xl sm:text-5xl font-extrabold text-sushi-900 mb-4">
                        A Conquistador, the Climate Crisis, and the Finances of
                        Atrocity
                    </h1>
                    <span class="text-base text-gray-700 font-semibold">
                        April 12, 2021 by Albert R Carter
                    </span>
                </div>
                <article class="flex flex-col justify-center items-center">
                    <div class="prose sm:prose-lg xl:prose-xl break-words" v-html="contentBody"></div>
                </article>
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
                <p class="text-base text-gray-700 font-semibold mt-16">
                    Footnotes
                </p>
                <div class="mx-auto prose prose-sm max-w-3xl" v-html="contentFootnotes"></div>
            </div>
            <div class="flex items-end justify-end pointer-events-none">
                <div class="w-11/12">
                    <LottiePlayer path="/anim/wind_2_without_bg.json" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import contentBody from './cortes-climate-crisis.md'
import contentFootnotes from './cortes-climate-crisis-footnotes.md'
import CallToAction from '@/components/CallToAction.vue'
import LottiePlayer from '@/components/LottiePlayer.vue'
import Swoosh from '@/components/Swoosh.vue'
import { useI18n } from 'vue-i18n'



export default {
    components: {
        CallToAction,
        LottiePlayer,
        Swoosh,
    },
    setup() {
        const { t } = useI18n({ useScope: 'global' })
        useHead({
            title:
                'A Conquistador, the Climate Crisis, and the Finances of Atrocity',
            description:
                'Hernán Cortés, the conquistador who toppled the Aztec Empire, was a man of terrible and unrelenting ambition. Yet his conquests shrank as time went on. Learn about how Cortés’ crimes were brought to a halt, as the crimes of the climate crisis can be too.',
            image: '/img/uploads/cortes-climate-crisis-image6.png',
        })
        const checkList = [
            t('SEND_A_MESSAGE_TO_YOUR_BANK'),
            t('JOIN_A_FAST_GROWING_MOVEMENT'),
            t('TAKE_A_CRITICAL_CLIMATE_ACTION'),
        ]
        return { contentBody, contentFootnotes, checkList }
    },
}
</script>
