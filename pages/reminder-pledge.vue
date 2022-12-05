<template>
    <div class="page">
        <div class="bg-white">
            <div class="page-fade-in pt-28">
                <ThanksSection :title="$t('PLEDGE_REMINDER')" />
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
