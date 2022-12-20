<template>
    <div class="page">
        <BankHeaderEthical :details="details" />
        <BankDetailGoodEthical :details="details" />
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

// const route = useRoute()
// FIXME this is a workaround for an upstream Vue router bug; when seeing this the next time,
// check if it works with useRoute() by now
// I think this issue is relevant: https://github.com/nuxt/framework/issues/8731
const router = useRouter();
const bankTag = router.currentRoute.value.params.bankTag;
const { t } = useI18n({ useScope: 'global' })
if (!bankTag)
    throw new Error("no banktag supplied: " + JSON.stringify(router.currentRoute.value))
const details = await getBankDetail(bankTag)

useHeadHelper(t('ETHICAL_BANK_DETAIL_TITLE', {
    name: details.name,
}))
</script>
