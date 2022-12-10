<template>
    <div class="page">
        <div class="bg-gradient-to-b from-sushi-50 to-sushi-100">
            <div class="page-fade-in contain max-w-3xl pt-28 pb-8">
                <PrismicRichText class="text-gray-600 mb-12 whitespace-pre-line" :field="contact.data.description" />
                <form class=" flex flex-col justify-center items-center" @submit.prevent.stop="onSend">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <TextField class="col-span-1" v-model="firstName" name="firstName" type="text"
                            :title="$t('FIRST_NAME_OPTIONAL')" :placeholder="$t('FIRST_NAME_PLACEHOLDER')" />
                        <TextField class="col-span-1" v-model="email" type="email" name="email"
                            :title="$t('YOUR_EMAIL')" :placeholder="$t('YOUR_EMAIL')" :warning="warningsMap['email']" />
                        <TextField class="col-span-1 md:col-span-2" v-model="subject" name="subject"
                            :title="$t('SUBJECT')" :placeholder="$t('SUBJECT')" :warning="warningsMap['subject']"
                            :required="true" />
                        <TextField class="md:col-span-2" v-model="message" rows="3" name="message"
                            :title="$t('YOUR_MESSAGE')" :placeholder="$t('YOUR_MESSAGE')"
                            :warning="warningsMap['message']" :required="true" />
                        <CheckboxSection class="md:col-span-2" v-model="isAgreeMarketing" name="isAgreeMarketing">
                            {{ $t('AGREE_MARKETING') }}</CheckboxSection>
                        <CheckboxSection class="md:col-span-2" v-model="isAgreeTerms" name="isAgreeTerms"
                            :warning="warningsMap['isAgreeTerms']">
                            <i18n-t keypath="AGREE_PRIVACY">
                                <NuxtLink to="/privacy" class="link">{{
                                        $t('PRIVACY_POLICY')
                                }}</NuxtLink>
                            </i18n-t>
                        </CheckboxSection>
                    </div>
                    <button type="submit" class="button-green mt-6 md:w-48 flex justify-center" :class="{
                        'pointer-events-none opacity-75': busy,
                    }">
                        <span v-if="!busy">
                            {{ $t('SEND_MESSAGE') }}
                        </span>
                        <span v-else>
                            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 561 553"
                                style="animation: ring 2s linear infinite;">
                                <path d="M478 0A481 481 0 0 0 0 485v76h75c264 0 478-217 478-485V0h-75z"
                                    fill="#6C9039" />
                            </svg>
                        </span>
                    </button>
                </form>
            </div>
            <Swoosh direction="up" />
        </div>
    </div>
</template>

<script setup>
import CheckboxSection from '../components/forms/CheckboxSection.vue'
import TextField from '../components/forms/TextField.vue'
import useContactForm from '@/services/contact/useContactForm'
import { useI18n } from 'vue-i18n'

import { ref } from 'vue'
import Swoosh from '@/components/Swoosh.vue'


const { t } = useI18n({ useScope: 'global' })

useHeadHelper(t('CONTACT_TITLE'), t('CONTACT_DESC'))



const p = usePrismic()
const { data: contact } = await useAsyncData('contact', () => p.client.getSingle('contactpage'))

let extras = ref({ isAgreeMarketing: false })

const {
    firstName,
    email,
    subject,
    message,
    isAgreeTerms,
    isAgreeMarketing,
    isSent,
    showWarnings,
    warningsMap,
    hasWarnings,
    send,
    busy,
} = useContactForm(
    'contact page form',
    ['email', 'isAgreeTerms'],
    extras
) // tag used specifically for GTM

async function onSend() {
    if (await this.send()) {
        this.$router.push('/thanks-contact')
    }
}
</script>
