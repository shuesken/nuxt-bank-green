import { getCountry } from '@/api/banks'
import storage from '@/utils/storage'

/**
 * Remembers the user's country and also prefills it from the API if not available
 */
export default function useCountryLocation() {
    const location = ref(storage.getItem('bg.country') ?? '')
    const country = useCountry()
    if (country.value && !location.value)
        location.value = country.value
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

    return {
        location,
        locationPicker,
    }
}
