<template>
    <div
        class="flex items-center justify-center bg-primary-dark rounded-2xl px-6 py-12 text-gray-50 text-center font-semibold"
    >
        <div class="max-w-xl">
            <p v-if="title" class="text-xl md:text-3xl mb-6">{{ title }}</p>
            <p v-else class="text-xl md:text-3xl mb-6">
                {{ $t('TAKE_ACTION_WITH') }}
            </p>

            <form
                @submit.prevent.stop="submit"
                class="flex flex-col justify-center items-center text-left"
            >
                <div class="grid grid-cols-2 gap-6">
                    <TextField
                        class="col-span-2 md:col-span-1"
                        v-model="firstName"
                        name="firstName"
                        type="text"
                        :placeholder="$t('FIRST_NAME_PLACEHOLDER')"
                        :dark="true"
                    />
                    <TextField
                        class="col-span-2 md:col-span-1"
                        v-model="email"
                        name="email"
                        type="email"
                        :placeholder="$t('YOUR_EMAIL')"
                        :warning="warningsMap['email']"
                        :dark="true"
                    />
                    <CheckboxSection
                        class="col-span-2"
                        v-model="isAgreeMarketing"
                        name="isAgreeMarketing"
                        :warning="warningsMap['isAgreeMarketing']"
                        :dark="true"
                    >
                        {{ $t('AGREE_MARKETING') }}</CheckboxSection
                    >
                    <CheckboxSection
                        class="col-span-2"
                        v-model="isAgreeTerms"
                        name="isAgreeTerms"
                        :dark="true"
                        :warning="warningsMap['isAgreeTerms']"
                    >
                        <i18n-t keypath="AGREE_PRIVACY">
                            <a href="/privacy" class="link" target="_blank">{{
                                $t('PRIVACY_POLICY')
                            }}</a>
                        </i18n-t></CheckboxSection
                    >
                </div>
                <button
                    type="submit"
                    class="button-green w-full md:w-72 mt-6 md:text-lg flex justify-center"
                    :class="{
                        'pointer-events-none opacity-75': busy,
                    }"
                >
                    <span v-if="!busy">
                        {{ $t('JOIN_MONEY_MOVEMENT') }}
                    </span>
                    <span v-else>
                        <svg
                            width="32"
                            height="32"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 561 553"
                            style="animation: ring 2s linear infinite;"
                        >
                            <path
                                d="M478 0A481 481 0 0 0 0 485v76h75c264 0 478-217 478-485V0h-75z"
                                fill="#6C9039"
                            />
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
import useContactForm from '@/services/contact/useContactForm'
import { computed, toRef } from '@vue/runtime-core'

export default {
    emits: ['success'],
    props: {
        tag: { type: String, default: 'signupbox' },
        successRedirectURL: { type: String, default: '/thanks' },
        details: Object,
        title: String,
        prefill: { type: Object, default: () => ({}) },
    },
    components: {
        CheckboxSection,
        TextField,
    },
    setup(props) {
        const details = toRef(props, 'details')
        const extra = computed(() => {
            if (!details.value) {
                return {}
            }
            return {
                bank: details.value.tag,
                bankDisplayName: details.value.name,
                rating: details.value.rating,
                country: details.value.country,
                dirty_deal_1: details.value['dirty deal 1'],
                dirty_deal_2: details.value['dirty deal 2'],
            }
        })

        const {
            firstName,
            email,
            isAgreeTerms,
            isAgreeMarketing,
            warningsMap,
            send,
            busy,
        } = useContactForm(
            props.tag,
            ['email', 'isAgreeTerms', 'isAgreeMarketing'],
            extra,
            toRef(props, 'prefill')
        )

        return {
            firstName,
            email,
            isAgreeTerms,
            isAgreeMarketing,
            warningsMap,
            send,
            busy,
        }
    },
    methods: {
        async submit() {
            if (await this.send()) {
                this.$emit('success')
                this.$router.push(this.successRedirectURL)
            }
        },
    },
}
</script>
