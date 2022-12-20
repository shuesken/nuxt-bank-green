<template>
    <div v-if="isSent" class="bg-primary-dark rounded-2xl mt-8 px-6 py-12 text-gray-50 text-center font-semibold">
        {{ $t('THANKS_FOR_TELLING_US') }}
    </div>
    <div v-else
        class="flex items-center justify-center bg-primary-dark rounded-2xl mt-8 px-6 py-12 text-gray-50 text-center font-semibold">
        <div class="max-w-xl">
            <form @submit.prevent.stop="send" class="flex flex-col justify-center items-center">
                <div class="grid grid-cols-2 gap-6 text-left">
                    <TextField class="col-span-2" v-model="bank" name="bank" type="bank" :title="$t('YOUR_BANK')"
                        :placeholder="$t('YOUR_BANK')" :warning="warningsMap['bank']" :dark="true" />
                    <TextField class="col-span-2" v-model="firstName" name="firstName" type="text"
                        :title="$t('FIRST_NAME_OPTIONAL')" :placeholder="$t('FIRST_NAME_PLACEHOLDER')" :dark="true" />
                    <TextField class="col-span-2" v-model="email" name="email" type="email" :title="$t('YOUR_EMAIL')"
                        :placeholder="$t('PLACEHOLDER_EMAIL')" :warning="warningsMap['email']" :dark="true" />
                    <CheckboxSection class="col-span-2" v-model="isAgreeMarketing" name="isAgreeMarketing"
                        :warning="warningsMap['isAgreeMarketing']" :dark="true">
                        {{ $t('AGREE_MARKETING') }}</CheckboxSection>
                    <CheckboxSection class="col-span-2" v-model="isAgreeTerms" name="isAgreeTerms" :dark="true"
                        :warning="warningsMap['isAgreeTerms']">
                        <i18n-t keypath="AGREE_PRIVACY">
                            <a href="/privacy" class="link" target="_blank">{{
                                    $t('PRIVACY_POLICY')
                            }}</a>
                        </i18n-t>
                    </CheckboxSection>
                </div>
                <button type="submit" class="button-green w-full md:w-36 mt-6 md:text-lg flex justify-center" :class="{
                    'pointer-events-none opacity-75': busy,
                }">
                    <span v-if="!busy"> {{ $t('SUBMIT') }} </span>
                    <span v-else>
                        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 561 553"
                            style="animation: ring 2s linear infinite;">
                            <path d="M478 0A481 481 0 0 0 0 485v76h75c264 0 478-217 478-485V0h-75z" fill="#6C9039" />
                        </svg>
                    </span>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import CheckboxSection from '@/components/forms/CheckboxSection.vue'
import TextField from '@/components/forms/TextField.vue'

export default {
    props: {
        tag: { type: String, default: 'submitbank' },
    },
    components: {
        CheckboxSection,
        TextField,
    },
    setup(props) {
        const {
            firstName,
            email,
            bank,
            isAgreeTerms,
            isAgreeMarketing,
            isSent,
            warningsMap,
            send,
            busy,
        } = useContactForm(props.tag, ['email', 'bank', 'isAgreeTerms'])

        return {
            firstName,
            email,
            bank,
            isAgreeTerms,
            isAgreeMarketing,
            isSent,
            warningsMap,
            send,
            busy,
        }
    },
}
</script>
