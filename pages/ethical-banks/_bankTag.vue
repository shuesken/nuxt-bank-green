<template>
    <div v-if="loaded" class="page">
        <BankHeaderEthical :details="details" />
        <BankDetailGoodEthical :details="details" />
    </div>
</template>

<script>
import { getBankDetail } from '@/api/banks'
import BankHeaderEthical from '@/components/bank/detail/BankHeaderEthical.vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import BankDetailGoodEthical from '@/components/bank/detail/BankDetailGoodEthical.vue'

export default {
    components: {
        BankHeaderEthical,
        BankDetailGoodEthical,
    },
    setup() {
        const { t } = useI18n({ useScope: 'global' })
        const details = ref(null)
        useHead({
            title: computed(() => {
                if (!details.value) {
                    return ''
                }
                return t('ETHICAL_BANK_DETAIL_TITLE', {
                    name: details.value.name,
                })
            }),
        })

        return { details }
    },
    data() {
        return {
            loaded: false,
        }
    },
    async beforeRouteEnter(to, from, next) {
        const details = await getBankDetail(to.params.bankTag)
        next((vm) => vm.setData(details))
    },
    async beforeRouteUpdate(to, from, next) {
        this.loaded = false
        const details = await getBankDetail(to.params.bankTag)
        this.setData(details)
        next()
    },
    methods: {
        async setData(details) {
            this.details = details
            this.loaded = true
        },
    },
}
</script>
