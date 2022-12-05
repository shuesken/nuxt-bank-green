<template>
    <div class="page">
        <div class="bg-white">
            <div class="page-fade-in pt-28">
                <ThanksSection :title="$t('THANKS_FOR_CONFIRMING')" :description="$t('HEAR_FROM_US_SOON')" />
            </div>
        </div>
    </div>
</template>

<script>
import ThanksSection from '@/components/contact/ThanksSection.vue'

export default {
    components: {
        ThanksSection,
    },
    setup() {
        useHead({ title: 'Thank you' })
    },
}
</script>
