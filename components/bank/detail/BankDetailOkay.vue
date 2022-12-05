<template>
    <div class="text-gray-800 overflow-hidden py-16">
        <div class="contain">
            <div class="flex flex-col md:flex-row items-center justify-center pt-8 pb-16">
                <div class="md:w-1/2 max-w-sm">
                    <p class="text-lg md:text-2xl tracking-wide mb-4" v-text="$t('NOT_LISTED_DESC_1')" />
                    <p class="md:text-xl tracking-wide whitespace-pre-line text-gray-600 mb-12 md:mb-0">
                        {{ $t('NOT_LISTED_DESC_2') }}
                    </p>
                    <div class="flex justify-center mt-12">
                        <ArrowDownBounce class="inline-block w-10" />
                    </div>
                </div>
                <img class="md:order-first md:w-1/2 -mx-24 sm:mx-0 lg:-ml-32 md:mr-16" src="/img/illustrations/dig.svg"
                    alt="" />
            </div>
        </div>
    </div>

    <div class="bg-blue-100 text-gray-800">
        <Swoosh direction="down" />
        <div class="contain">
            <h2 class="text-center text-gray-800 font-semibold text-lg md:text-2xl tracking-wider mb-4">
                {{ $t('JOIN_MONEY_MOVEMENT') }}
            </h2>
            <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-8">
                <div class="lg:w-1/2 md:max-w-sm">
                    <p class="text-lg md:text-2xl tracking-wide mb-4">
                        {{ $t('MONEY_IS_THE_OXYGEN') }}
                    </p>
                </div>
                <CheckList class="lg:w-1/2 w-full my-8" :list="checkList" />
            </div>
            <div class="flex flex-row justify-center items-center">
                <SignupBox :title="$t('BANK_DETAIL_OK_SIGNUP')" tag="bank ok bottom" class="max-w-4xl w-full mt-8" />
            </div>
        </div>

        <div v-if="details.rating === 'great'" class="flex items-end justify-end pointer-events-none">
            <div class="w-11/12">
                <LottiePlayer path="/anim/wind_2_without_bg.json" />
            </div>
        </div>

        <div v-else class="flex flex-row items-center justify-center">
            <LottiePlayer path="/anim/money_smoke.json" class="w-full md:max-w-2xl h-42 object-cover object-bottom" />
        </div>
    </div>
</template>

<script>
import CheckList from '@/components/CheckList.vue'
import Swoosh from '@/components/Swoosh.vue'
import SignupBox from '@/components/forms/SignupBox.vue'
import LottiePlayer from '@/components/LottiePlayer.vue'
import markup from '@/utils/directives/markup'
import ArrowDownBounce from '@/components/icons/ArrowDownBounce.vue'

export default {
    components: { CheckList, SignupBox, LottiePlayer, Swoosh, ArrowDownBounce },
    directives: { markup },

    props: {
        details: Object,
    },
    computed: {
        checkList() {
            return [
                this.$t('LEARN_ABOUT_THE_ISSUES'),
                this.$t('JOIN_OUR_CAMPAIGNS_TAKE_ACTION'),
                this.$t('DISCOVER_WAYS_TO_DIVEST'),
            ]
        },
    },
}
</script>
