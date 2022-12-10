<template>
    <div class="page">
        <BankHeader :details="details" />
        <BankDetailBad v-if="isBadBank" :details="details" />
        <BankDetailOkay v-else :details="details" />
        <BankFooter :details="details"></BankFooter>
    </div>
</template>

<script setup>
import { getBankDetail } from '@/api/banks'
import { computed, defineAsyncComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

// const route = useRoute()
// FIXME this is a workaround for an upstream Vue router bug; when seeing this the next time,
// check if it works with useRoute() by now
// I think this issue is relevant: https://github.com/nuxt/framework/issues/8731
const router = useRouter();
const bankTag = router.currentRoute.value.params.bankTag;
const details = ref(await getBankDetail(bankTag))
const { t } = useI18n({ useScope: 'global' })

useHeadHelper((details.value?.name ? t('BANK_DETAIL_TITLE', { name: details.value.name }) : ''))

const isBadBank = computed(() => {
    switch (details.value.rating) {
        case 'bad':
        case 'worst':
            return true
    }
    return false
})

</script>
