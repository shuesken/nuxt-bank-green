<template>
    <div class="w-full rounded-2xl shadow-sm bg-white px-4">
        <div class="table table-fixed overflow-x-auto w-full">
            <div class="table-row-group">
                <div class="table-row">
                    <div class="table-cell pt-8 pb-4 w-32 md:w-48 lg:w-64">
                        &nbsp;
                    </div>
                    <div v-for="i in cardsCount" :key="i"
                        class="table-cell pt-8 pb-4 px-1 text-center overflow-hidden truncate">
                        <EthicalBankTableHeaderItem :item="list[i - 1]" />
                    </div>
                </div>

                <transition-group enter-active-class="transform-gpu ease-out duration-300 transition"
                    enter-from-class="-translate-y-2 opacity-0" enter-to-class="translate-y-0 opacity-100"
                    leave-active-class="transform-gpu transition ease-in duration-190" leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    <div v-for="i in featuresCount" :key="i" class="table-row alternate-rows">
                        <div
                            class="table-cell w-32 md:w-48 lg:w-64 text-right text-gray-500 font-bold text-sm pr-2 py-4 align-middle">
                            <transition enter-active-class="duration-200 transform-gpu origin-top ease-out"
                                enter-from-class="opacity-0 scale-y-95" enter-to-class="opacity-100 scale-y-100"
                                leave-active-class="duration-100 transform-gpu origin-top ease-in"
                                leave-from-class="opacity-100 scale-y-100" leave-to-class="opacity-0 scale-y-95"
                                mode="out-in">
                                <span v-if="!allFeatures[i - 1]" class="text-gray-300">
                                    loading...
                                </span>
                                <span v-else-if="$te(allFeatures[i - 1])">{{
                                        mapFeatureName($t(allFeatures[i - 1]))
                                }}</span>
                                <span v-else>{{
                                        mapFeatureName(
                                            translateFeatureName(allFeatures[i - 1])
                                        )
                                }}</span>
                            </transition>
                        </div>
                        <div v-for="j in cardsCount" :key="j" class="table-cell text-center align-middle p-4 w-1/4">
                            <transition enter-active-class="duration-200 transform-gpu origin-top ease-out"
                                enter-from-class="opacity-0 scale-y-95" enter-to-class="opacity-100 scale-y-100"
                                leave-active-class="duration-100 transform-gpu origin-top ease-in"
                                leave-from-class="opacity-100 scale-y-100" leave-to-class="opacity-0 scale-y-95"
                                mode="out-in">
                                <div v-if="!allFeatures[i - 1]">...</div>
                                <EthicalTableFeatureResult v-else class="text-center mx-auto" :feature="
                                    bankToFeature[list[j - 1].tag][
                                    allFeatures[i - 1]
                                    ]
                                " />
                            </transition>
                        </div>
                    </div>
                </transition-group>

                <div class="table-row">
                    <div class="table-cell py-8 w-32 md:w-48 lg:w-64">
                        &nbsp;
                    </div>
                    <div v-for="i in cardsCount" :key="i" class="table-cell text-center px-4 py-8">
                        <NuxtLink :to="
                            list[i - 1]
                                ? `/sustainable-eco-banks/${list[i - 1].tag
                                }`
                                : ''
                        " class="block hover:bg-green-50">
                            <div class="button-green py-2 text-sm">
                                {{ $t('VIEW_BANK') }}
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getFeatures from '@/services/ethical/getFeatures'
import EthicalBankTableHeaderItem from './EthicalBankTableHeaderItem.vue'
import EthicalTableFeatureResult from './EthicalTableFeatureResult.vue'
import translateFeatureName from '@/services/bank/translateFeatureName'

export default {
    components: { EthicalBankTableHeaderItem, EthicalTableFeatureResult },
    props: {
        list: Array,
        isUK: Boolean,
        isNoCredit: Boolean,
        loaded: Boolean,
    },
    computed: {
        featuresByBank() {
            const featuresByBank = {}
            for (const item of this.list) {
                featuresByBank[item.tag] = getFeatures(item)
            }
            return featuresByBank
        },
        bankToFeature() {
            const bankToFeature = {}
            for (const bankTag in this.featuresByBank) {
                const features = this.featuresByBank[bankTag]
                for (const featKey in features) {
                    if (!bankToFeature[bankTag]) {
                        bankToFeature[bankTag] = {}
                    }
                    bankToFeature[bankTag][featKey] = features[featKey]
                }
            }
            return bankToFeature
        },
        allFeatures() {
            const allFeatures = []
            for (const bankTag in this.featuresByBank) {
                const features = this.featuresByBank[bankTag]
                for (const featKey in features) {
                    if (this.isNoCredit && featKey === 'Credit Card') {
                        continue
                    }
                    if (allFeatures.includes(featKey)) {
                        continue
                    }
                    allFeatures.push(featKey)
                }
            }
            return allFeatures
        },
        cardsCount() {
            if (this.loaded) return this.list.length
            return 3
        },
        featuresCount() {
            if (this.loaded) return this.allFeatures.length
            return 10
        },
    },
    methods: {
        translateFeatureName,
        mapFeatureName(name) {
            switch (name) {
                case 'Interest Rates':
                    return 'Deposit Interest Rates'
                default:
                    return name
            }
        },
    },
}
</script>
