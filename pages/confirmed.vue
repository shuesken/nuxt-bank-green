<template>
    <div class="page">
        <div class="bg-white">
            <div class="page-fade-in pt-28">
                <ThanksSection :title="$t('THANKS_FOR_CONFIRMING')" :description="$t('HEAR_FROM_US_SOON')" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ThanksSection from '@/components/contact/ThanksSection.vue'
useHeadHelper("Thank you")
</script>
