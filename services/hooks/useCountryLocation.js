import { getCountry } from '@/api/banks'
import storage from '@/utils/storage'

/**
 * Remembers the user's country and also prefills it from the API if not available
 */
export default function useCountryLocation() {
    const location = ref(storage.getItem('bg.country') ?? '')
    const locationPicker = ref(null)

    watch(location, (loc) => {
        storage.setItem('bg.country', loc)
    })

    onMounted(async () => {
        if (location.value) {
            return
        }
        const detectedCountry = await getCountry()
        if (detectedCountry && locationPicker.value) {
            locationPicker.value.onSelectCountry(detectedCountry)
        }
    })

    const isUK = computed(() => {
        return location.value === 'GB'
    })

    return {
        location,
        locationPicker,
        isUK,
    }
}