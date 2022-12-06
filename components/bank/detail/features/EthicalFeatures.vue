<template>
    <div class="border border-gray-300 rounded-xl shadow-soft">
        <div class="border-b border-gray-200 p-4">
            <div class="font-medium text-gray-800 text-lg">
                Service features
            </div>
        </div>
        <div class="p-4 space-y-2">
            <FeaturesList :features="features" />
        </div>
    </div>
</template>

<script setup>
import getFeatures from '@/services/ethical/getFeatures'
import FeaturesList from '@/components/bank/detail/features/FeaturesList.vue'

export default {
    components: {
        FeaturesList,
    },
    props: {
        details: Object,
    },
    computed: {
        features() {
            return getFeatures(this.details)
        },
    },
}
</script>
