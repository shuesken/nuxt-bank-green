<template>
    <div class="page">
        <div class="bg-sushi-50">
            <div class="page-fade-in contain pt-28">
                <div class="pb-16">
                    <div class="text-center relative">
                        <LottiePlayer class="absolute -top-28 inset-x-0 w-64 mx-auto" path="/anim/pop.json" />
                        <svg class="mx-auto relative z-1" width="119" height="51" viewBox="0 0 119 51" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="62.5" cy="25.0222" r="25" fill="#87B448" />
                            <path d="M53.5 24.3603L59.9413 30.8015L71.5 19.2428" stroke="white" stroke-width="2.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <h1 class="mt-8 text-2xl font-semibold whitespace-pre-line mb-8">
                            {{ $t('THANK_YOU_FOR_YOUR_PLEDGE') }}
                        </h1>

                        <p class="text-gray-700 px-4 max-w-lg mx-auto whitespace-pre-line"
                            v-text="$t('YOUVE_JUST_TAKEN_AN_AMAZING_ACTION')" />
                        <div class="flex justify-center">
                            <SocialSharer class="text-sushi-500" url="https://bank.green"
                                :hashtags="['climatecrisis', 'fossilbanks']"
                                :text="$t('I_JUST_PLEDGED_TO_MOVE_MY_MONEY')" :large="true" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LottiePlayer from '@/components/LottiePlayer.vue'
import SocialSharer from '@/components/SocialSharer.vue'
import markup from '@/utils/directives/markup'

export default {
    components: {
        LottiePlayer,
        SocialSharer,
    },
    directives: { markup },
    setup() {
        useHead({ title: 'Thank you' })
    },
}
</script>
