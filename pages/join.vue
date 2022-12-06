<template>
    <div class="page bg-blue-100 text-gray-800 pt-28">
        <div class="page-fade-in overflow-hidden">
            <div class="contain">
                <div class="flex flex-col justify-center items-center">
                    <h2
                        class="w-full max-w-4xl text-center bg-primary-dark text-gray-50 rounded-xl font-semibold text-xl md:text-3xl tracking-wider mb-8 md:mb-4 py-4">
                        {{ $t('JOIN_MONEY_MOVEMENT') }}
                    </h2>
                    <div class="max-w-4xl flex flex-col md:flex-row items-center justify-center md:space-x-8">
                        <div class="md:w-1/2 max-w-sm">
                            <p class="text-lg md:text-2xl tracking-wide mb-1 md:mb-4"
                                v-text="$t('NOT_LISTED_DESC_1')" />
                        </div>
                        <CheckList class="md:w-1/2 my-8" :list="checkList" />
                    </div>
                </div>
                <div class="flex flex-row justify-center items-center">
                    <SignupBox :title="$t('BANK_DETAIL_OK_SIGNUP')" tag="join form" class="max-w-4xl w-full mt-8" />
                </div>
            </div>
        </div>
        <div class="flex flex-row items-center justify-center">
            <ClientOnly>
                <LottiePlayer path="/anim/money_smoke.json"
                    class="w-full md:max-w-2xl h-42 object-cover object-bottom" />
            </ClientOnly>
        </div>
    </div>
</template>

<script>
import CheckList from '@/components/CheckList.vue'
import LottiePlayer from '@/components/LottiePlayer.vue'
import SignupBox from '@/components/forms/SignupBox'
import markup from '@/utils/directives/markup'
import { useI18n } from 'vue-i18n'


export default {
    components: { CheckList, LottiePlayer, SignupBox },
    directives: { markup },
    setup() {
        const { t } = useI18n({ useScope: 'global' })
        useHead({
            title: t('JOIN_TITLE'),
            description: t('JOIN_DESCRIPTION'),
        })
    },
    computed: {
        checkList() {
            return [
                this.$t('LEARN_ABOUT_THE_ISSUES'),
                this.$t('JOIN_OUR_CAMPAIGNS_TAKE_ACTION'),
                this.$t('DISCOVER_WAYS_TO_DIVEST'),
            ]
        },
    },
}
</script>
