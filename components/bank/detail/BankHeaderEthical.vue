<template>
    <div class="bg-gradient-to-b from-sushi-50 to-sushi-100 pt-28 md:mb-16">
        <div
            class="page-fade-in contain max-w-5xl grid grid-cols-2 gap-8 md:gap-10"
        >
            <BankHeaderHeadline :details="details" />

            <div
                class="relative col-span-2 md:col-span-1 md:row-span-2 flex flex-row justify-center items-center"
            >
                <div class="flex flex-col items-center justify-start">
                    <BankCircle class="max-w-sm" :rating="details.rating" />
                    <SocialSharer
                        class="text-sushi-500"
                        :hashtags="['climatecrisis', 'fossilbanks']"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1">
                <div
                    class="font-medium md:font-semibold text-gray-800 text-xl md:text-4xl tracking-wider mb-2 md:mb-6"
                >
                    {{ $t('OUR_TAKE_ON', { name: details.name }) }}
                </div>
                <div class="text-lg md:text-xl text-gray-500">
                    <span v-if="details.ourTake" class="">{{
                        details.ourTake
                    }}</span>
                    <span v-else-if="details.rating === 'ok'"
                        >This bank is ok</span
                    >
                    <span v-else-if="details.rating === 'great'"
                        >This bank is great</span
                    >
                </div>
            </div>
        </div>

        <div class="text-center">
            <ArrowDownBounce class="inline-block mt-8 w-10" />
        </div>
        <a id="2"></a>
        <Swoosh />
    </div>
</template>

<script>
import BankCircle from '@/components/bank/BankCircle.vue'
import ArrowDownBounce from '@/components/icons/ArrowDownBounce.vue'
import Swoosh from '@/components/Swoosh.vue'
import SocialSharer from '@/components/SocialSharer.vue'
import BankHeaderHeadline from './BankHeaderHeadline.vue'

export default {
    props: {
        details: Object,
    },
    components: {
        BankCircle,
        ArrowDownBounce,
        Swoosh,
        BankHeaderHeadline,
        SocialSharer,
    },
}
</script>
