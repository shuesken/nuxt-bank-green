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
                        <span v-if="details.rating === 'worst'"
                            v-text="'Your money is being used to fund the climate crisis at an alarming rate.'"></span>
                        <span v-else-if="details.rating === 'bad'"
                            v-text="'Your money is funding the climate crisis'"></span>
                        <span v-else-if="details.rating === 'ok'">
                            <template>{
                                Your bank is doing OK.
                            </template>
                        </span>
                        <span v-else-if="details.rating === 'great'">
                            "Your bank is great.
                        </span>
                        <span v-else>Sorry, we don’t know enough about your bank yet.</span>
                    </div>
                </div>
                <div class="prose sm:prose-lg xl:prose-xl prose-blurb whitespace-pre-wrap">
                    <div v-if="details.summary" v-html="details.summary"></div>
                    <div v-else>
                        <template v-if="details.rating === 'worst'">
                            <span
                                v-text="'Your bank is one of the 60 biggest funders of fossil fuels in the world\\*. In the 6 years since the Paris Agreement, the banks in this category have funneled $4.6 trillion into coal, oil, and gas, rapidly accelerating the climate crisis.'"></span>
                        </template>
                        <template v-else-if="details.rating === 'bad'">
                            <span
                                v-text="`Your bank doesn't top the charts, but it’s still using your money to lend to fossil fuel companies and projects that are rapidly accelerating the climate crisis.`">
                            </span>
                        </template>
                        <template v-else-if="details.rating === 'ok'">
                            <span
                                v-text="`The good news is that your bank is not a leading fossil fuel funder and we have found positive evidence that they care about the environment. The bad news is that *we haven’t yet been able to confirm for certain that they do not fund fossil fuels.*\n\nSince your bank is showing themselves to be socially responsible, it’s time to make sure they know that fossil fuel funding is no longer socially acceptable. *To take positive action, keep on scrolling…*`"></span></template>
                        <PrismicRichText v-else-if="details.rating === 'great'" :field="greatbank.data.description1" />
                        <span v-else>Unfortunately, we don’t yet have enough information on your bank to know what it’s
                            funding. What we do know however, is that contacting your bank to ask them yourself will
                            send a powerful message – banks will have no choice but to reassess socially irresponsible
                            funding activities if they realize their customers are concerned. *To take positive action,
                            keep on scrolling…*</span>
                        <a v-if="details.data_sources?.includes('bimpact')"
                            href="http://data.world/blab/b-corp-impact-data" class="block"><span class="text-xs"
                                v-text="'CC BY-SA data partially from B-Lab'"></span></a>
                    </div>
                </div>
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center">
                    <div v-if="
    details.rating === 'worst' ||
    details.rating === 'bad'
                    " class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-between items-center mt-8">
                        <NuxtLink to="/sustainable-eco-banks" class="button-green w-auto">Move Your Money
                        </NuxtLink>
                        <div class="text-xs text-gray-500 mx-4 uppercase">
                            Or
                        </div>
                        <NuxtLink to="/pledge" class="underline">Pledge to Move it
                        </NuxtLink>
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
<script setup>
import ArrowDownBounce from '@/components/icons/ArrowDownBounce.vue'
const { client } = usePrismic()
const { data: greatbank } = await useAsyncData('greatbank', () => client.getByUID('bankpage', 'greatbank'))



const props = defineProps({
    details: Object,
})

</script>

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


