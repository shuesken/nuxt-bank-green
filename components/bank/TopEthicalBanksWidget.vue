<template>
    <LocationSearch
        class="mb-8 md:max-w-sm md:mx-auto z-50"
        ref="locationPicker"
        v-model="location"
    />
    <div
        v-if="banks.length"
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
    >
        <EthicalBankList :loaded="loaded" :list="banks" />
    </div>
    <div v-if="banks.length" class="sm:text-center">
        <app-link
            to="/sustainable-eco-banks"
            class="mt-6 button-green sm:inline-block sm:w-64"
            >{{ $t('SHOW_MORE') }}</app-link
        >
    </div>
</template>

<script>
import useCountryLocation from '@/services/hooks/useCountryLocation'
import LocationSearch from '@/components/forms/location/LocationSearch.vue'
import { getBanksList } from '@/api/banks'
import EthicalBankList from '@/components/bank/EthicalBankList'
import { ref, watch, onMounted } from 'vue'

export default {
    components: { LocationSearch, EthicalBankList },

    setup() {
        const { location, locationPicker } = useCountryLocation()

        const banks = ref([])
        const loaded = ref(false)
        const loadBanks = async () => {
            if (!location.value) {
                return
            }
            banks.value = await getBanksList({
                country: location.value,
                topOnly: true,
            })
            loaded.value = true
        }
        onMounted(loadBanks)
        watch(location, loadBanks)
        return { banks, location, locationPicker, loaded }
    },
}
</script>
