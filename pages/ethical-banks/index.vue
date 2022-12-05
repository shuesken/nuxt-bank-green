<template>
    <div class="bg-sushi-50">
        <div class="page-fade-in contain pt-28 pb-16">
            <h1 class="text-3xl font-semibold whitespace-pre-line mb-4 md:text-center" v-t="'COMPARE_ETHICAL_TITLE'" />

            <p class="max-w-4xl mx-auto mb-8 text-gray-600 whitespace-pre-line" v-t="'ETHICAL_BLURB'" />
            <p class="max-w-4xl mx-auto mb-8 text-gray-600 whitespace-pre-line" v-t="'ETHICAL_BLURB_2'" />

            <div class="max-w-4xl mx-auto flex mb-8">
                <AccordionItem class="" :title="$t('WHAT_IS_FOSSIL_FREE_ALLIANCE_TITLE')">
                    It's hard to believe, but in the 6 years since 197 countries
                    agreed to drastically reduce their greenhouse gas emissions
                    as part of the Paris Climate Agreement, big banks have
                    provided $4.6 trillion to support the environmental
                    destruction caused by the fossil fuel industry.

                    <br /><br /><img class="h-20 mr-4 float-left" style="margin-top: 5px; margin-bottom: 0px"
                        src="/img/certification/certified.png"
                        alt="Fossil-Free Seal for Eco Banks & Sustainable Banks" />

                    Of the financial institutions you can find below, those
                    denoted with the symbol pictured here form part of our
                    Fossil Free Alliance. These banks and credit unions have all
                    gone on record as stating that going forward, they will play
                    no part in the provision of loans, underwriting or
                    investments to aid the expansion of fossil fuel extraction,
                    production or infrastructure - and in the majority of cases,
                    they never have.

                    <br /><br />Those green banks and credit unions who appear
                    below but are not part of the alliance may very well have
                    the same credentials as those who are - it could just be
                    that we have not approached them yet, but we are working on
                    it! While we cannot provide a guarantee as to the level of
                    their environmental credentials, to the best of our
                    knowledge they are committed to working on their social and
                    environmental impact.

                    <br /><br />To understand more about why we consider
                    divestment from fossil fuels in particular such a critical
                    part of the fight against climate change,
                    <a href="/certification">visit our page</a> describing our
                    reasons for creating this alliance and what we hope to
                    accomplish with it.

                    <br /><br />If you think your own green financial
                    institution would be eligible to join, we would love for you
                    to ask them to reach out to us at hello@bank.green.
                </AccordionItem>
            </div>

            <transition enter-active-class="duration-200 transform-gpu origin-top ease-out"
                enter-from-class="opacity-0 scale-y-95" enter-to-class="opacity-100 scale-y-100"
                leave-active-class="duration-100 transform-gpu origin-top ease-in"
                leave-from-class="opacity-100 scale-y-100" leave-to-class="opacity-0 scale-y-95" mode="out-in">
                <div class="flex flex-col md:flex-row">
                    <div class="lg:w-80 md:sticky mb-4 md:mb-0 top-20 flex-shrink-0 rounded-2xl lg:px-10"
                        style="height: fit-content">
                        <EthicalBankFilters v-if="location" :location="location" @filter="applyFilter">
                        </EthicalBankFilters>
                    </div>

                    <div class="relative w-full md:ml-6">
                        <LocationSearch class="z-30 mb-8" ref="locationPicker" v-model="location" />

                        <div v-if="!location">
                            <h2 class="w-full px-5 py-4 bg-gray-100 border border-gray-300 rounded-2xl text-sm">
                                <div class="font-medium text-gray-600">
                                    {{ $t('NO_COUNTRY_SELECTED') }}
                                </div>
                                <div class="text-sm text-gray-500">
                                    {{ $t('NO_COUNTRY_SELECTED_DESCRIPTION') }}
                                </div>
                            </h2>
                        </div>
                        <div v-else>
                            <transition enter-from-class="opacity-0" enter-active-class="transition ease duration-300"
                                enter-to-class="opacity-100" leave-from-class="opacity-100"
                                leave-active-class="transition ease duration-300" leave-to-class="opacity-0" appear>
                                <div v-if="loading" class="absolute left-1/2 top-20 z-10">
                                    <span>
                                        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 561 553" style="
                                                animation: ring 2s linear
                                                    infinite;
                                            ">
                                            <path d="M478 0A481 481 0 0 0 0 485v76h75c264 0 478-217 478-485V0h-75z"
                                                fill="#6C9039" />
                                        </svg>
                                    </span>
                                </div>
                            </transition>

                            <div v-if="banks.length" :class="[
                                loading
                                    ? 'opacity-50 pointer-events-none'
                                    : '',
                            ]" class="transition">
                                <EthicalBankCards :list="banks" :isUK="isUK" :isNoCredit="isNoCredit" />
                            </div>

                            <div v-else-if="!loading" class="mt-20">
                                <h2 class="text-xl font-semibold mb-4 md:text-center">
                                    {{ $t('SORRY_NO_CRITERIA_MET') }}
                                </h2>
                                <p class="text-gray-600 mb-8 md:text-center max-w-lg mx-auto">
                                    {{ $t('SORRY_NO_CRITERIA_MET_DESC') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

            <EthicalFAQ />

            <div class="prose prose-sushi max-w-3xl mx-auto">
                <div class="py-6 font-semibold text-xl tracking-wider">
                    <!-- <p v-if="location == 'US'">
                        Looking for more fossil-free banking options? Our
                        friends at Bank For Good
                        <a
                            href="https://bankforgood.org/search/"
                            target="_blank"
                        >
                            have made a list for you.
                        </a>
                    </p> -->
                    <p v-if="location == 'CA'">
                        Looking for more fossil-free banking options? Our
                        friends at Banking On A Better Future
                        <a href="https://bankingonabetterfuture.org/banking-alternatives" target="_blank">
                            have made a list for you.
                        </a>
                    </p>
                </div>

                <p class="mb-2 font-semibold text-xl tracking-wider">
                    This is a happy webpage, so here are some happy banking
                    stories:
                </p>
                <ul>
                    <li>
                        Bank Australia funds a t-shirt company in Sydney that’s
                        <a
                            href="https://www.bankaust.com.au/blog/waste-not-meet-the-company-making-carbon-negative-clothing">on
                            a mission to make fast fashion obsolete.</a>
                    </li>
                    <li>
                        <a
                            href="https://impact.beneficialstate.org/wp-content/uploads/2020/07/2019-Impact-Report_Final_sm_07.24.2020.pdf">Beneficial
                            State Bank used its foundation to
                            support grants for Californians</a>
                        who wish to purchase a hybrid or electric car.
                    </li>
                    <li>
                        <a href="https://www.triodos.co.uk/projects/empower-communities/20190417102743428352000000">Triodos
                            Bank co-financed a British social
                            enterprise</a>
                        that directs renewable energy profits back into local
                        communities.
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex items-end justify-end pointer-events-none">
            <div class="w-11/12">
                <LottiePlayer path="/anim/wind_2_without_bg.json" />
            </div>
        </div>
    </div>
</template>

<script>
import useCountryLocation from '@/services/hooks/useCountryLocation'
import LocationSearch from '@/components/forms/location/LocationSearch.vue'
import { getBanksListWithFilter } from '@/api/banks'
import EthicalBankCards from '@/components/bank/EthicalBankCards'
import EthicalBankFilters from '@/components/bank/EthicalBankFilters'
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'


import AccordionItem from '@/components/AccordionItem.vue'
import EthicalFAQ from '../../components/ethical/EthicalFAQ.vue'
import LottiePlayer from '@/components/LottiePlayer.vue'

export default {
    components: {
        LocationSearch,
        EthicalBankCards,
        EthicalBankFilters,
        AccordionItem,
        EthicalFAQ,
        LottiePlayer,
    },

    setup() {
        const { t } = useI18n({ useScope: 'global' })
        useHead({
            title: t('ETHICAL_BANKS_INDEX_TITLE'),
            description: t('ETHICAL_BANKS_INDEX_DESC'),
        })

        const { location, locationPicker, isUK } = useCountryLocation()

        const banks = ref([])
        const loading = ref(false)
        const loadBanks = async ({
            regions,
            subregions,
            fossilFreeAlliance,
            features,
        }) => {
            loading.value = true
            if (!location.value) {
                return
            }
            const result = await getBanksListWithFilter({
                country: location.value,
                regions,
                subregions,
                fossilFreeAlliance,
                features,
            })

            banks.value = result
                // filter show_on_sustainable_banks_page
                .filter((a) => a.showOnSustainableBanksPage)
                // sort by fossiil_free_alliance_rating first, then by name
                .sort(
                    (a, b) =>
                        b.fossilFreeAllianceRating -
                        a.fossilFreeAllianceRating || a.name - b.name
                )
            loading.value = false
        }
        watch(location, () => {
            banks.value = []
        })

        const isNoCredit = computed(() => {
            return location.value === 'FR' || location.value === 'DE'
        })

        const applyFilter = (payload) => {
            loadBanks(payload)
        }

        return {
            banks,
            location,
            locationPicker,
            loading,
            isUK,
            isNoCredit,
            applyFilter,
        }
    },
}
</script>
