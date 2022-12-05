<template>
    <div>
        <div class="page-fade-in contain pb-8 sm:pb-10 md:pb-12 pt-24 sm:pt-32">
            <div class="max-w-3xl mx-auto mt-4 mb-8 sm:text-center">
                <h1 class="text-2xl sm:text-5xl font-extrabold text-sushi-900 mb-4">
                    Line 3: An Unthinkable Pipeline Powered by Our Cash
                </h1>
                <span class="text-base text-gray-700 font-semibold">
                    May 4, 2021 by Neil Simpson
                </span>
            </div>
            <article class="flex flex-col justify-center items-center">
                <div class="prose sm:prose-lg xl:prose-xl break-words" v-html="partOne"></div>
                <button @click="selectedDeal = 1" class="button-green w-auto my-6">
                    {{ $t('DID YOUR BANK SUPPORT THIS DEAL') }}
                </button>
                <div class="prose sm:prose-lg xl:prose-xl break-words" v-html="partTwo"></div>
                <button @click="selectedDeal = 2" class="button-green w-auto my-6">
                    {{ $t('DID YOUR BANK SUPPORT THIS DEAL') }}
                </button>
                <div class="prose sm:prose-lg xl:prose-xl break-words" v-html="partThree"></div>
            </article>
            <Modal v-if="selectedDeal" v-on:closeModal="selectedDeal = 0" class="z-50">
                <div class="bg-sushi-200 p-8 prose sm:prose-sm xl:prose-lg rounded-2xl">
                    <span v-if="selectedDeal === 1">Other participants included Bank of Tokyo Mitsubishi
                        UFJ; Mizuho Bank; Citibank; Export Development Canada;
                        Credit Suisse; HSBC; National Bank of Canada; Bank of
                        America/Merrill Lynch; Bank of Nova Scotia; Royal Bank
                        of Canada; BNP Paribas; Toronto Dominion (TD); Deutsche
                        Bank; Barclays; Canadian Imperial Bank; Sumitomo Mitsui
                        Bank; Bank of Montreal; Morgan Stanley; DNB Capital/ASA;
                        JP Morgan Chase; Crédit Agricole; Desjardins Group;
                        Société Générale; Alberta Treasury Branches; Bank of
                        China; China Construction Bank; Industrial and
                        Commercial Bank of China; UBS; United Overseas Bank
                        Limited; China Merchants Bank; and Huntington National
                        Bank</span>
                    <span v-else>Other lenders included Bank of America, Bank of
                        Montreal, Bank of Nova Scotia, Barclays, Canadian
                        Imperial Bank of Commerce, China Construction Bank,
                        Citibank, Credit Suisse, Deutsche Bank, HSBC, Industrial
                        & Commercial Bank of China, JP Morgan, Mizuho, MUFG,
                        Royal Bank of Canada, Société Générale, and Sumitomo
                        Mitsui Banking Corp</span>
                </div>
            </Modal>
        </div>
        <div class="bg-blue-100 text-gray-800">
            <Swoosh :color="swooshColor" direction="down" />
            <div class="contain max-w-5xl">
                <CallToAction :title="$t('TAKE_THE_BANK_GREEN_PLEDGE')"
                    :paragraph="$t('BANKS_LIVE_AND_DIE_ON_REPUTATIONS')" :checkListItems="checkList"
                    :buttonText="$t('TAKE_THE_PLEDGE')" :light="true" />
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
import partOne from './2021-05-04-line-3-part-1.md'
import partTwo from './2021-05-04-line-3-part-2.md'
import partThree from './2021-05-04-line-3-part-3.md'

import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Modal from '@/components/Modal'
import CallToAction from '@/components/CallToAction.vue'
import LottiePlayer from '@/components/LottiePlayer.vue'
import Swoosh from '@/components/Swoosh.vue'
import { useI18n } from 'vue-i18n'


export default {
    components: {
        Modal,
        CallToAction,
        LottiePlayer,
        Swoosh,
    },
    setup() {
        const { t } = useI18n({ useScope: 'global' })
        useHead({
            title: 'Line 3: An Unthinkable Pipeline Powered by Our Cash',
            description:
                'Banks continue to use our money to enable fossil fuel megaprojects. With Keystone XL blocked by Biden, the Line 3 “Replacement” Project is now a headline battle in North America’s pipeline war. Is your bank financing this quest for unimaginable greenhouse gas emissions?',
            image: '/img/uploads/04-05-21-line-3-image1.jpg',
        })
        const checkList = [
            t('SEND_A_MESSAGE_TO_YOUR_BANK'),
            t('JOIN_A_FAST_GROWING_MOVEMENT'),
            t('TAKE_A_CRITICAL_CLIMATE_ACTION'),
        ]
        const prefill = computed(() => {
            return useRoute()?.query
        })
        return { partOne, partTwo, partThree, checkList, prefill }
    },
    data() {
        return {
            selectedDeal: 0,
        }
    },
}
</script>
