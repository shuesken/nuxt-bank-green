<template>
    <div class="bg-sushi-50">
        <!-- <pre>
            {{ JSON.stringify(ecobanks, null, 2) }}
        </pre> -->
        <div class="page-fade-in contain pt-10 pb-16">
            <div class="prose sm:prose-lg xl:prose-xl mx-auto max-w-4xl xl:max-w-5xl mb-10">
                <SliceZone :slices="ecobanks?.data.slices ?? []" :components="sliceComps" />
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
                                    No country selected
                                </div>
                                <div class="text-sm text-gray-500">
                                    To continue, please select a country.
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
                                <EthicalBankCards :list="banks" :isNoCredit="isNoCredit" />
                            </div>

                            <div v-else-if="!loading" class="mt-20">
                                <h2 class="text-xl font-semibold mb-4 md:text-center">
                                    Sorry, we don't have any banks that met the required filters
                                </h2>
                                <p class="text-gray-600 mb-8 md:text-center max-w-lg mx-auto">
                                    {We’re working hard to increase the number of banks we provide data on. If you tell
                                    us your bank’s name, we’ll email you as soon as we have a score for it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <div class="prose sm:prose-lg xl:prose-xl mx-auto max-w-4xl xl:max-w-5xl mb-10">
                <SliceZone :slices="ecobanks?.data.slices1 ?? []" :components="sliceComps" />
            </div>

        </div>
        <div class="flex items-end justify-end pointer-events-none">
            <div class="w-11/12">

                <LottiePlayer path="'/anim/wind_2_without_bg.json'" />

            </div>
        </div>
    </div>
</template>

<script setup>
import LocationSearch from '@/components/forms/location/LocationSearch.vue'
import EthicalBankCards from '@/components/bank/EthicalBankCards'


import { components } from '~~/slices'
import { defineSliceZoneComponents } from '@prismicio/vue';
const sliceComps = ref(defineSliceZoneComponents(components))

useHeadHelper('Find Eco Banks & Sustainable Banks In Your Area - Bank.Green', 'Find and compare the service offerings of ethical and sustainable banks.')

const { client } = usePrismic()

const { data: ecobanks } = await useAsyncData('ecobanks', () => client.getSingle('ecobankspage', { fetchLinks: ['accordionitem.title', 'accordionitem.slices'], }))

const { location, locationPicker } = useCountryLocation()

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
</script>
