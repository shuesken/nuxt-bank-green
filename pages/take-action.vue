<template>
    <div class="page">
        <div class="bg-sushi-50">
            <div class="page-fade-in contain max-w-4xl xl:max-w-5xl pt-28 pb-16">
                <PrismicRichText :field="action?.data.introduction" />
                <div class=" mt-8 lg:mt-16 rounded-xl ring-2 ring-sushi-600 overflow-hidden bg-white">
                    <div class="flex flex-col items-center">
                        <div class="flex flex-row w-full bg-sushi-400 divide-x-2 divide-sushi-600">
                            <div v-for="(tab, index) in tabs" :key="index" class="flex-grow">
                                <input class="hidden" type="radio" :id="index" :value="index"
                                    v-model="selectedTabIndex" />
                                <label
                                    class="flex justify-center py-2 text-sm sm:text-base md:text-2xl font-semibold cursor-pointer"
                                    :class="
                                        selectedTabIndex === index
                                            ? 'bg-sushi-200'
                                            : 'text-white'
                                    " :for="index">{{ tab }}</label>
                            </div>
                        </div>
                        <div class="prose md:prose-lg px-4">
                            <div class="pb-4 md:pb-8" v-if="tabs[selectedTabIndex] === 'Pressure'">
                                <SliceZone :slices="action?.data.slices1 ?? []" :components="sliceComps" />
                            </div>
                            <div class="pb-4 md:pb-8" v-else-if="tabs[selectedTabIndex] === 'Switch'">
                                <SliceZone :slices="action?.data.slices2 ?? []" :components="sliceComps" />
                            </div>
                            <div class="pb-4 md:pb-8" v-else-if="tabs[selectedTabIndex] === 'Share'">
                                <SliceZone :slices="action?.data.slices3 ?? []" :components="sliceComps" />
                            </div>
                            <div class="pb-4 md:pb-8" v-else-if="tabs[selectedTabIndex] === 'Learn'">
                                <SliceZone :slices="action?.data.slices4 ?? []" :components="sliceComps" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contain max-w-5xl pb-16">
                    <CallToAction :title="$t('TAKE_THE_BANK_GREEN_PLEDGE')"
                        :paragraph="$t('BANKS_LIVE_AND_DIE_ON_REPUTATIONS')" :checkListItems="checkList"
                        :buttonText="$t('TAKE_THE_PLEDGE')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { components } from '~~/slices'
import { defineSliceZoneComponents } from '@prismicio/vue';
const sliceComps = ref(defineSliceZoneComponents(components))
const { t } = useI18n()

useHeadHelper('Take action')
const { client } = usePrismic()
const { data: action } = await useAsyncData('takeaction', () => client.getSingle('takeactionpage'))


const tabs = ['Pressure', 'Switch', 'Share', 'Learn']
const selectedTabIndex = ref(0)

const checkList = [
    t('SEND_A_MESSAGE_TO_YOUR_BANK'),
    t('JOIN_A_FAST_GROWING_MOVEMENT'),
    t('TAKE_A_CRITICAL_CLIMATE_ACTION'),
]
</script>
