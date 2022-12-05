<template>
    <div class="bg-gradient-to-b from-sushi-50 to-sushi-100 pt-28 md:mb-16">
        <div class="relative page-fade-in contain max-w-5xl grid grid-cols-2 gap-8 md:gap-10 z-10">
            <BankHeaderHeadline :details="details" />
            <div
                class="relative col-span-2 md:col-span-1 md:row-span-2 flex flex-row justify-center md:justify-start md:mt-8">
                <div class="flex flex-col items-center justify-start">
                    <BankCircle class="max-w-sm" :rating="details.rating" />
                    <SocialSharer class="text-sushi-500" :hashtags="['climatecrisis', 'fossilbanks']" />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1">
                <div class="flex justify-center md:block mb-8 w-full">
                    <img v-if="details.fossilFreeAlliance" class="w-32" src="/img/certification/certified.png"
                        alt="Fossil Free Certification" />
                </div>
                <div class="font-medium md:font-semibold text-gray-800 text-xl md:text-4xl tracking-wider mb-2 md:mb-6">
                    <div v-if="details.header" v-html="details.header"></div>
                    <div v-else>
                        <span v-if="details.rating === 'worst'" v-text="$t('BANK_RATING_WORST_TITLE')"></span>
                        <span v-else-if="details.rating === 'bad'" v-text="$t('BANK_RATING_BAD_TITLE')"></span>
                        <span v-else-if="details.rating === 'ok'">
                            <template>{{
                                    $t('BANK_RATING_OK_TITLE')
                            }}</template>
                        </span>
                        <span v-else-if="details.rating === 'great'">{{
                                $t('BANK_RATING_GREAT_TITLE')
                        }}</span>
                        <span v-else>{{ $t('BANK_RATING_UNK_TITLE') }}</span>
                    </div>
                </div>
                <div class="prose sm:prose-lg xl:prose-xl prose-blurb whitespace-pre-wrap">
                    <div v-if="details.summary" v-html="details.summary"></div>
                    <div v-else>
                        <template v-if="details.rating === 'worst'">
                            <span v-text="$t('BANK_RATING_WORST_DESC')"></span>
                        </template>
                        <template v-else-if="details.rating === 'bad'">
                            <span v-text="$t('BANK_RATING_BAD_DESC')"> </span>
                        </template>
                        <template v-else-if="details.rating === 'ok'">
                            <span v-text="$t('BANK_RATING_OK_DESC')"></span></template>
                        <span v-else-if="details.rating === 'great'" v-text="$t('BANK_RATING_GREAT_DESC')"></span>
                        <span v-else v-text="$t('BANK_RATING_UNK_DESC')"></span>
                        <a v-if="details.data_sources?.includes('bimpact')"
                            href="http://data.world/blab/b-corp-impact-data" class="block"><span class="text-xs"
                                v-text="$t('B_LAB_CITATION')"></span></a>
                    </div>
                </div>
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center">
                    <div v-if="
                        details.rating === 'worst' ||
                        details.rating === 'bad'
                    " class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-between items-center mt-8">
                        <app-link to="/sustainable-eco-banks" class="button-green w-auto">{{ $t('MOVE_YOUR_MONEY') }}
                        </app-link>
                        <div class="text-xs text-gray-500 mx-4 uppercase">
                            {{ $t('OR') }}
                        </div>
                        <app-link to="/pledge" class="underline">{{ $t('PLEDGE_TO_MOVE_IT') }}
                        </app-link>
                    </div>
                    <div v-else></div>
                    <div class="relative flex-grow md:flex-none md:-right-10 text-center">
                        <ArrowDownBounce class="inline-block mt-8 w-10" />
                    </div>
                </div>
            </div>
        </div>
        <Swoosh />
    </div>
</template>

<style>
.footnote ol li p {
    display: inline;
    color: green;
    margin-top: 0;
}

.footnote ol li p {
    list-style: none;
}
</style>

<script>
import BankCircle from '@/components/bank/BankCircle.vue'
import Swoosh from '@/components/Swoosh.vue'
import ArrowDownBounce from '@/components/icons/ArrowDownBounce.vue'
import BankHeaderHeadline from './BankHeaderHeadline.vue'
import SocialSharer from '@/components/SocialSharer.vue'
import markup from '@/utils/directives/markup'
import fossilBanks from '/data/fossilbanks.json'

export default {
    props: {
        details: Object,
    },
    directives: { markup },
    components: {
        BankCircle,
        ArrowDownBounce,
        Swoosh,
        BankHeaderHeadline,
        SocialSharer,
    },
    computed: {
        isFossilBank() {
            return fossilBanks.includes(this.details.tag)
        },
    },
}
</script>
