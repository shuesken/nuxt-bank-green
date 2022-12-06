<template>
    <div
        class="w-full flex items-center justify-center bg-primary-dark rounded-2xl px-6 lg:px-10 py-8 text-gray-50 text-center">
        <form class="flex flex-col items-center" @submit.prevent.stop="checkAndSend">
            <p class="text-xl md:text-2xl mb-6 font-semibold whitespace-pre-wrap">
                {{ title || $t('PLEDGE_FORM_TITLE') }}
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                <TextField class="col-span-2" v-model="firstName" name="firstName" type="text" :title="$t('FIRST_NAME')"
                    :placeholder="$t('FIRST_NAME_PLACEHOLDER')" :dark="true" />
                <TextField class="col-span-2" v-model="lastName" name="lastName" type="text" :title="$t('LAST_NAME')"
                    :placeholder="$t('LAST_NAME_PLACEHOLDER')" :dark="true" />
                <TextField class="col-span-2" v-model="email" type="email" name="email" :title="$t('YOUR_EMAIL')"
                    :placeholder="$t('YOUR_EMAIL')" :warning="warningsMap['email']" :dark="true" />
                <DateField class="col-span-2" v-model="reminderDate" name="reminder" :title="$t('REMINDER')"
                    :placeholder="$t('WHEN_REMINDER')" :warning="reminderWarning" :dark="true" />
                <div class="col-span-2">
                    <span class="block text-sm leading-5 text-blue-100 text-opacity-75 font-medium mb-2">{{
                            $t('CHOOSE_YOUR_COUNTRY')
                    }}</span>
                    <LocationSearch class="w-full text-gray-700" ref="locationPicker" v-model="location" />
                </div>
                <div class="col-span-2">
                    <span class="block text-sm leading-5 text-blue-100 text-opacity-75 font-medium mb-2">{{
                            $t('CHOOSE_YOUR_CURRENT_BANK')
                    }}</span>
                    <BankSearch class="w-full text-gray-700" ref="bankSearch" :disabled="!location" :country="location"
                        v-model="bank" @searchInputChange="searchValue = $event">
                        <template v-slot:not-listed>
                            <p class="text-gray-500 p-4 shadow-lg">
                                {{ $t('BANK_NOT_FOUND') }}
                            </p>
                        </template>
                    </BankSearch>
                </div>
                <CheckboxSection class="col-span-full" v-model="isAgreeMarketing" name="isAgreeMarketing"
                    :warning="warningsMap['isAgreeMarketing']" :dark="true">
                    {{ $t('AGREE_MARKETING') }}</CheckboxSection>
                <CheckboxSection class="col-span-full" v-model="isAgreeTerms" name="isAgreeTerms" :dark="true"
                    :warning="warningsMap['isAgreeTerms']">
                    <i18n-t keypath="AGREE_PRIVACY" scope="global">
                        <a href="/privacy" class="link" target="_blank">{{
                                $t('PRIVACY_POLICY')
                        }}</a>
                    </i18n-t>
                </CheckboxSection>
            </div>
            <button type="submit" class="button-green w-full md:w-auto mt-6 flex justify-center" :class="{
                'pointer-events-none opacity-75': busy,
            }">
                <span v-if="!busy">
                    {{ $t('SIGN_THE_PLEDGE') }}
                </span>
                <span v-else>
                    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 561 553"
                        style="animation: ring 2s linear infinite;">
                        <path d="M478 0A481 481 0 0 0 0 485v76h75c264 0 478-217 478-485V0h-75z" fill="#6C9039" />
                    </svg>
                </span>
            </button>
        </form>
    </div>
</template>

<script>
import LocationSearch from '@/components/forms/location/LocationSearch.vue'
import BankSearch from '@/components/forms/banks/BankSearch.vue'
import useCountryLocation from '@/services/hooks/useCountryLocation'
import CheckboxSection from '@/components/forms/CheckboxSection.vue'
import TextField from '@/components/forms/TextField.vue'
import DateField from '@/components/forms/DateField.vue'
import useContactForm from '@/services/contact/useContactForm'
import { ref } from 'vue'
import markup from '@/utils/directives/markup'

export default {
    props: {
        title: String,
        successRedirectURL: { type: String, default: '/thanks-pledge' },
    },
    components: {
        CheckboxSection,
        TextField,
        DateField,
        LocationSearch,
        BankSearch,
    },
    directives: { markup },

    setup() {
        const bank = ref(null)
        const reminderDate = ref(null)
        const searchValue = ref(null)
        const reminderWarning = ref('')

        const { location, locationPicker } = useCountryLocation()

        const extras = computed(() => {
            return {
                reminder: reminderDate.value || '',
                country: location.value || '',
                bank: bank.value?.tag || '',
                bankDisplayName: bank.value?.name || '',
                rating: bank.value?.rating || '',
                bankNameWhenNotFound: (!bank.value && searchValue.value) || '',
            }
        })

        const {
            firstName,
            lastName,
            email,
            isAgreeTerms,
            isAgreeMarketing,
            isSent,
            showWarnings,
            warningsMap,
            hasWarnings,
            send,
            busy,
        } = useContactForm(
            'pledge',
            ['firstName', 'lastName', 'email', 'isAgreeTerms'],
            extras
        )

        return {
            firstName,
            lastName,
            email,
            isAgreeTerms,
            isAgreeMarketing,
            isSent,
            showWarnings,
            warningsMap,
            hasWarnings,
            send,
            busy,
            extras,
            reminderWarning,
            location,
            locationPicker,
            bank,
            reminderDate,
            searchValue,
        }
    },
    methods: {
        async checkAndSend() {
            if (!this.extras.reminder) {
                this.reminderWarning = this.$t('PLEASE_ENTER_REMINDER')
                return
            }
            this.reminderWarning = ''
            if (await this.send()) {
                this.$emit('success')
                this.$router.push(this.successRedirectURL)
            }
        },
    },
}
</script>