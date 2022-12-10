<template>
    <div class="page">
        <div class="bg-white">
            <div class="page-fade-in pt-28">
                <ThanksSection :title="$t('THANKS_FOR_CONTACT')" :description="$t('THANKS_CONTACT_DESC')" />
            </div>
        </div>
    </div>
</template>

<script setup>

useHeadHelper("Thank you")
</script>
