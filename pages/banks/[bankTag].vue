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

const route = useRoute()
const details = ref(await getBankDetail(route.params.bankTag))
const { t } = useI18n({ useScope: 'global' })

useHead({
    title: computed(() => {
        if (!details.value) {
            return ''
        }
        return t('BANK_DETAIL_TITLE', { name: details.value.name })
    }),
})

const isBadBank = computed(() => {
    switch (details.value.rating) {
        case 'bad':
        case 'worst':
            return true
    }
    return false
})

</script>
