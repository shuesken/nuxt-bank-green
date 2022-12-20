import { useGtm } from 'vue-gtm'
import { useI18n } from 'vue-i18n'

export default function useContactForm(
    tag = 'unknown',
    required = ['email', 'isAgreeTerms'],
    extra,
    prefill = ref({})
) {
    const gtm = useGtm()
    const { t } = useI18n({ useScope: 'global' })

    const firstName = ref(prefill.value.firstName || '')
    const lastName = ref(prefill.value.lastName || '')
    const email = ref(prefill.value.email || '')
    const subject = ref(prefill.value.subject || '')
    const message = ref(prefill.value.message || '')
    const bank = ref(prefill.value.bank || '')
    const isAgreeTerms = ref(prefill.value.isAgreeTerms || false)
    const isAgreeMarketing = ref(prefill.value.isAgreeTerms || false)
    const busy = ref(false)
    const isSent = useCookie(`contact.${tag}.sent`, { default: () => false })
    const showWarnings = ref(false)

    const warningsMap = computed(() => {
        if (!showWarnings.value) {
            return {}
        }
        const { t } = useI18n({ useScope: 'global' })
        const warningsMap = {}
        if (!email.value && required.includes('email')) {
            warningsMap['email'] = t('FIELD_IS_REQUIRED', {
                field: t('YOUR_EMAIL'),
            })
        }
        if (!isAgreeTerms.value && required.includes('isAgreeTerms')) {
            warningsMap['isAgreeTerms'] = t('PLEASE_AGREE_TO_TERMS')
        }
        if (!isAgreeMarketing.value && required.includes('isAgreeMarketing')) {
            warningsMap['isAgreeMarketing'] = t('PLEASE_AGREE_TO_MARKETING')
        }
        if (!bank.value && required.includes('bank')) {
            warningsMap['bank'] = t('PLEASE_GIVE_BANK_NAME')
        }
        return warningsMap
    })

    const hasWarnings = computed(() => {
        return Object.keys(warningsMap.value).length > 0
    })

    const send = async () => {
        showWarnings.value = true
        if (hasWarnings.value) {
            busy.value = false
            return false
        }

        if (busy.value) {
            return // already busy, prevent double requests
        }
        busy.value = true
        await submitContact({
            firstName: capitalizeString(firstName.value),
            lastName: capitalizeString(lastName.value),
            email: email.value,
            subject: subject.value,
            message: message.value,
            tag,
            bank: bank.value,
            isAgreeMarketing: isAgreeMarketing.value,
            ...(extra ? extra.value : {}),
        })
        isSent.value = true

        let gtmEvent = 'emailform'
        if (tag === 'contact page form') {
            gtmEvent = 'contactpage'
        }
        gtm.trackEvent({ event: gtmEvent })

        isSent.value = true

        setTimeout(() => {
            // clear after some ms so that the view has been updated / we have paginated away
            // this is a cheap fix but very effective!
            busy.value = false
        }, 100)

        return true
    }

    return {
        firstName,
        lastName,
        email,
        subject,
        message,
        bank,
        isAgreeTerms,
        isAgreeMarketing,
        isSent,
        showWarnings,
        warningsMap,
        hasWarnings,
        send,
        busy,
    }
}
