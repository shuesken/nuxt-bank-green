<template>
    <div
        class="contain flex flex-col-reverse md:flex-row justify-center items-center py-8 space-y-12 md:space-y-0 md:space-x-24">
        <RenderWhenVisibleInViewPort :options="{ rootMargin: '0px 0px 100% 0px' }" class="max-w-sm w-full md:w-1/2">
            <PiggybankAnimation />
        </RenderWhenVisibleInViewPort>
        <div class="md:w-1/2">
            <div v-if="this.details.details" class="text-lg md:text-2xl whitespace-pre-line text-gray-900"
                v-html="this.details.details"></div>
            <p v-else class="text-lg md:text-2xl whitespace-pre-line text-gray-900" v-text="piggyText"></p>
            <div class="mt-8 flex items-center">
                <div v-if="
                    details.rating === 'worst' || details.rating === 'bad'
                " class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-between items-center w-auto">
                    <app-link to="/sustainable-eco-banks" class="button-green w-auto">{{ $t('MOVE_YOUR_MONEY') }}
                    </app-link>
                    <div class="text-xs text-gray-500 mx-4 uppercase">
                        {{ $t('OR') }}
                    </div>
                    <app-link to="/pledge" class="underline">{{ $t('PLEDGE_TO_MOVE_IT') }}
                    </app-link>
                </div>
                <app-link v-else to="/pledge" class="button-green inline-block w-auto">{{
                        $t('PLEDGE_TO_MOVE_YOUR_MONEY')
                }}
                </app-link>
                <div class="flex md:hidden flex-grow justify-center">
                    <ArrowDownBounce class="inline-block w-10" />
                </div>
            </div>
        </div>
    </div>
    <div class="hidden md:flex justify-center transform md:-translate-y-10 lg:-translate-y-32">
        <ArrowDownBounce class="inline-block w-10" />
    </div>
    <div class="relative bg-blue-100">
        <Swoosh direction="down" />
        <img class="relative inline-block mb-4" src="/img/illustrations/fishes.svg" alt="" />
        <div class="relative z-10 contain max-w-2xl">
            <h3 class="text-center text-blue-900 text-lg md:text-2xl tracking-wider font-semibold mb-4">
                <template>
                    {{ $t('BANK_EXPLAIN_2_TITLE') }}
                </template>
            </h3>
            <p class="text-blue-900 leading-loose text-lg">
                {{ $t('BANK_EXPLAIN_2_DESC') }}
            </p>
        </div>
        <div class="w-full -mt-24 sm:-mt-16 lg:-mt-32 pointer-events-none overflow-hidden">
            <LottiePlayer class="-mx-5/6 sm:mx-0 sm:w-full" path="/anim/fishes.json" />
        </div>
    </div>
    <div class="bg-blue-100 pb-8 pt-8">
        <div class="contain flex flex-col justify-center items-center">
            <CallToAction :title="$t('WHAT_CAN_YOU_DO_TITLE', { name: details.name })"
                :paragraph="$t('BANKS_REQUIRE_PROFIT')" :checkListItems="checkList" :buttonText="$t('TAKE_THE_PLEDGE')"
                :light="true" :spaced="true" />
        </div>
    </div>
    <div class="bg-blue-100 overflow-hidden w-full pointer-events-none">
        <div class="-mx-1/4 sm:mx-0 sm:w-full">
            <img class="w-full" src="/img/illustrations/landscape.svg" alt="" />
        </div>
    </div>
</template>

<script>
import RenderWhenVisibleInViewPort from '@/components/func/RenderWhenVisibleInViewPort.vue'
import { defineAsyncComponent } from 'vue'
import markup from '@/utils/directives/markup'
import LottiePlayer from '@/components/LottiePlayer.vue'
import Swoosh from '@/components/Swoosh.vue'
import CallToAction from '@/components/CallToAction.vue'
import ArrowDownBounce from '@/components/icons/ArrowDownBounce.vue'

const PiggybankAnimation = defineAsyncComponent(() =>
    import('@/components/bank/PiggybankAnimation.vue')
)

export default {
    props: {
        details: Object,
    },
    components: {
        PiggybankAnimation,
        RenderWhenVisibleInViewPort,
        LottiePlayer,
        Swoosh,
        CallToAction,
        ArrowDownBounce,
    },

    directives: { markup },

    computed: {
        formattedTotal() {
            return this.details.amountFinancedSince2016 ?? 'large amounts'
        },
        checkList() {
            return [
                this.$t('SEND_A_MESSAGE_TO_YOUR_BANK'),
                this.$t('JOIN_A_FAST_GROWING_MOVEMENT'),
                this.$t('TAKE_A_CRITICAL_CLIMATE_ACTION'),
            ]
        },
        piggyText() {
            return (
                this.$t(
                    this.details.subsidiary
                        ? 'BANK_DETAIL_EXPLAIN_1_PARENT'
                        : 'BANK_DETAIL_EXPLAIN_1',
                    {
                        total: this.formattedTotal,
                        name: this.details.name,
                    }
                ) +
                (this.details.uniqueStatement
                    ? `\n\n*${this.details.uniqueStatement}*`
                    : '')
            )
        },
    },
}
</script>
