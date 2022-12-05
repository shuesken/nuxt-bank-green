<template>
    <div v-if="loaded" class="page">
        <BankHeader :details="details" />
        <BankDetailBad v-if="isBadBank" :details="details" />
        <BankDetailOkay v-else :details="details" />
        <BankFooter :details="details"></BankFooter>
    </div>
</template>

<script>
import { getBankDetail } from '@/api/banks'
import BankHeader from '@/components/bank/detail/BankHeader.vue'
import { computed, defineAsyncComponent, ref } from 'vue'
import BankDetailOkay from '@/components/bank/detail/BankDetailOkay.vue'
import BankFooter from '@/components/bank/detail/BankFooter.vue'
import { useI18n } from 'vue-i18n'


const BankDetailBad = defineAsyncComponent(() =>
    import('@/components/bank/detail/BankDetailBad.vue')
)

/**
 * This is the user's bank, since they searched for it in the main page
 */
export default {
    components: {
        BankHeader,
        BankDetailBad,
        BankDetailOkay,
        BankFooter,
    },
    setup() {
        const details = ref(null)
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

        return {
            details,
            isBadBank,
        }
    },
    data() {
        return {
            loaded: false,
        }
    },
    async beforeRouteEnter(to, from, next) {
        const details = await getBankDetail(to.params.bankTag)
        next(vm => vm.setData(details))
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
