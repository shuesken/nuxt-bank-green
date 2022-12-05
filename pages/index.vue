<template>
    <div class="page">
        <div class="bg-gradient-to-b from-sushi-50 to-sushi-100 md:pt-20">
            <div class="page-fade-in contain flex flex-col justify-center items-center">
                <a id="top"></a>
                <div class="max-w-4xl pt-28 lg:pt-12">
                    <h2 class="text-center text-2xl font-semibold text-gray-800 sm:text-5xl">
                        {{ $t('MAIN_TITLE') }}
                    </h2>
                    <div
                        class="flex flex-col md:flex-row items-stretch md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-8 md:mt-10 md:mb-10">
                        <LocationSearch class="md:w-1/2 flex-initial" ref="locationPicker" v-model="location" />
                        <BankSearch class="md:w-1/2 flex-initial" ref="bankSearch" :disabled="!location"
                            :country="location" v-model="bank" />
                        <app-link :to="`/banks/${bank?.tag}`" class="flex-initial md:w-48 button-green"
                            :class="{ disabled: !bank }" @click="onCheckBankClick">{{ $t('CHECK_MY_BANK') }}</app-link>
                    </div>
                    <div class="flex flex-col items-center md:flex-row w-full pt-10 md:pt-8 md:pb-16">
                        <h3 class="text-center text-2xl md:text-xl font-semibold whitespace-nowrap mb-6 md:mb-0 md:mr-2 lg:mr-12"
                            style="font-family: serif">
                            {{ $t('AS_FEATURED_IN') }}
                        </h3>
                        <div
                            class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between items-center w-full filter-grayscale opacity-20">
                            <img class="h-6 w-auto" src="/img/featured/forbes.png"
                                alt="Bank Green featured in Forbes" />
                            <img class="h-12 pb-2 w-auto" src="/img/featured/the-new-yorker.png"
                                alt="Bank Green featured in The New Yorker" />
                            <img class="h-10 w-auto" src="/img/featured/independent.png"
                                alt="Bank Green featured in Independent" />
                            <img class="h-12 w-auto" src="/img/featured/the-big-issue.png"
                                alt="Bank Green featured in The Big Issue" />
                        </div>
                    </div>
                    <div class="hidden md:flex flex-col justify-center items-center">
                        <p class="text-center text-lg font-medium text-gray-700 mb-2">
                            {{ $t('IN_ASSOCIATION_WITH') }}
                        </p>
                        <div class="flex flex-row justify-center items-center space-x-6">
                            <a href="https://www.banktrack.org/" rel="noopener" target="_blank">
                                <div class="bg-white rounded-xl p-5">
                                    <img class="w-36" src="/img/logos/banktrack.svg" />
                                </div>
                            </a>
                        </div>
                        <app-link to="/partners" class="underline mt-2 text-sm">{{ $t('SEE_OUR_PARTNERS') }}</app-link>
                    </div>
                    <div class="mt-16">
                        <div class="mt-12 text-lg text-gray-700 text-center leading-4">
                            <i18n-t keypath="WHY_BANK" scope="global">
                                <img class="inline-block h-5 px-0.5" src="/img/trim-hor-light.svg" alt="Bank.Green" />
                            </i18n-t>
                        </div>
                        <ArrowDownBounce class="mx-auto mt-4 w-10" />
                    </div>
                </div>
            </div>
            <Swoosh />
        </div>
        <div class="flex flex-col md:flex-row items-center justify-center py-16 contain">
            <div class="md:w-1/2 max-w-sm">
                <p class="text-lg md:text-2xl tracking-wide mb-4" v-text="$t('FP_DESC_1')" />
                <p class="md:text-xl tracking-wide whitespace-pre-line text-gray-600 mb-12 md:mb-0">
                    {{ $t('FP_DESC_2') }}
                </p>
            </div>
            <LottiePlayer :placeholderHeight="480" :placeholderWidth="426" class="md:w-2/5 max-w-full md:ml-24"
                path="/anim/atm_without_bg.json" alt="" />
        </div>
        <div class="bg-blue-100 text-gray-800">
            <div class="overflow-hidden">
                <Swoosh direction="down" />
                <div class="contain">
                    <div class="flex flex-col md:flex-row items-center justify-center pt-8 pb-4 md:pb-16">
                        <div class="md:w-1/2 max-w-sm">
                            <p class="text-lg md:text-2xl tracking-wide mb-4" v-text="$t('FP_DESC_3')" />
                            <p class="md:text-xl tracking-wide whitespace-pre-line text-gray-600 mb-12 md:mb-0">
                                {{ $t('FP_DESC_4') }}
                            </p>
                        </div>
                        <img class="md:order-first md:w-2/5 -mx-24 md:mx-0 md:mr-24" src="/img/illustrations/bank.svg"
                            alt="" width="450" height="450" />
                    </div>
                </div>
                <div id="join" class="contain max-w-5xl">
                    <CallToAction :title="$t('TAKE_THE_BANK_GREEN_PLEDGE')"
                        :paragraph="$t('BANKS_LIVE_AND_DIE_ON_REPUTATIONS')" :checkListItems="checkList"
                        :buttonText="$t('TAKE_THE_PLEDGE')" />
                </div>
            </div>
            <div class="flex flex-row items-center justify-center">
                <LottiePlayer path="/anim/money_smoke.json"
                    class="w-full md:max-w-2xl h-42 object-cover object-bottom" />
            </div>
        </div>
    </div>
</template>

<script>
import LocationSearch from '@/components/forms/location/LocationSearch.vue'
import BankSearch from '@/components/forms/banks/BankSearch.vue'
import markup from '@/utils/directives/markup'
import ArrowDownBounce from '@/components/icons/ArrowDownBounce.vue'
import useCountryLocation from '@/services/hooks/useCountryLocation'
import { useGtm } from 'vue-gtm'
import LottiePlayer from '@/components/LottiePlayer.vue'
import Swoosh from '@/components/Swoosh.vue'
import CallToAction from '@/components/CallToAction.vue'
import { useI18n } from 'vue-i18n'


export default {
    components: {
        LocationSearch,
        BankSearch,
        ArrowDownBounce,
        LottiePlayer,
        Swoosh,
        CallToAction,
    },
    directives: { markup },
    setup() {
        const { t: $t } = useI18n({ useScope: 'global' })
        useHead({
            title: $t('INDEX_TITLE'),
            description: $t('INDEX_DESC'),
        })

        const gtm = useGtm()
        const onCheckBankClick = () => {
            gtm.trackEvent({ event: 'onBankCheckClick' })
        }

        const { location, locationPicker } = useCountryLocation()
        return { location, locationPicker, onCheckBankClick }
    },
    data() {
        return {
            bank: null,
        }
    },
    computed: {
        checkList() {
            const { t: $t } = useI18n({ useScope: 'global' })
            return [
                $t('SEND_A_MESSAGE_TO_YOUR_BANK'),
                $t('JOIN_A_FAST_GROWING_MOVEMENT'),
                $t('TAKE_A_CRITICAL_CLIMATE_ACTION'),
            ]
        },
    },
    watch: {
        location() {
            this.bank = null
        },
    },
}
</script>
