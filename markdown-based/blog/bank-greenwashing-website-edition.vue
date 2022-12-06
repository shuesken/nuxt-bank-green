<template>
    <div>
        <div>
            <div class="page-fade-in contain pb-8 sm:pb-10 md:pb-12 pt-24 sm:pt-32">
                <div class="max-w-3xl mx-auto mt-4 mb-8 sm:text-center">
                    <h1 class="text-2xl sm:text-5xl font-extrabold text-sushi-900 mb-4">
                        Bank Greenwashing:<br />
                        Website Edition
                    </h1>
                    <span class="text-base text-gray-700 font-semibold">
                        October 22, 2021 by Neil Simpson
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
import contentBody from './bank-greenwashing-website-edition.md'
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
            title: 'Bank Greenwashing: Website Edition',
            description:
                'Banks are under pressure to take climate action, which is a great opportunity to whack some wholesome messaging on their websites. But what if those same banks are also financing environmental devastation? Welcome to greenwashing.',
            image:
                '/img/uploads/bank-greenwashing-website-edition/thumbnail.jpg',
        })
        const checkList = [
            t('SEND_A_MESSAGE_TO_YOUR_BANK'),
            t('JOIN_A_FAST_GROWING_MOVEMENT'),
            t('TAKE_A_CRITICAL_CLIMATE_ACTION'),
        ]
        return { contentBody, checkList }
    },
}
</script>
