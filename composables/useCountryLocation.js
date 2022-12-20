import { getCountry } from '~~/utils/banks'

/**
 * Remembers the user's country and also prefills it from the API if not available
 */
export default function useCountryLocation() {
    const location = useCookie('bg.country', { default: () => '' })
    const country = useCountry()
    if (country.value && !location.value)
        location.value = country.value
    const locationPicker = ref(null)

    watch(location, (loc) => {
        location.value = loc
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
