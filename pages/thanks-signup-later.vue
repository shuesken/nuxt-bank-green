<template>
    <div class="page">
        <div class="bg-white">
            <div class="page-fade-in pt-28">
                <ThanksSection :title="$t('THANKS_SIGNUP_LATER')" />
            </div>
        </div>
    </div>
</template>

<script>
import ThanksSection from '@/components/contact/ThanksSection'

export default {
    components: {
        ThanksSection,
    },

    setup() {
        useHead({ title: 'Thank you' })
    },
}
</script>
