<template>
    <div class="page">
        <BankHeaderEthical :details="details" />
        <BankDetailGoodEthical :details="details" />
    </div>
</template>

<script setup>
import { getBankDetail } from '@/api/banks'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n({ useScope: 'global' })
const details = await getBankDetail(route.params.bankTag)
useHead({
    title: t('ETHICAL_BANK_DETAIL_TITLE', {
        name: details.name,
    })
})
</script>
