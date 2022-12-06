<template>
    <div class="page">
        <div class="bg-sushi-50">
            <div class="page-fade-in contain max-w-4xl xl:max-w-5xl pt-28 pb-16">
                <h1 class="text-2xl font-semibold whitespace-pre-line mb-4">
                    {{ $t('TAKE_ACTION') }}
                </h1>
                <article class="prose sm:prose-lg xl:prose-xl mx-auto max-w-4xl xl:max-w-5xl" v-html="introduction">
                </article>
                <div class="mt-8 lg:mt-16 rounded-xl ring-2 ring-sushi-600 overflow-hidden bg-white">
                    <div class="flex flex-col items-center">
                        <div class="flex flex-row w-full bg-sushi-400 divide-x-2 divide-sushi-600">
                            <div v-for="(tab, index) in tabs" :key="index" class="flex-grow">
                                <input class="hidden" type="radio" :id="index" :value="index"
                                    v-model="selectedTabIndex" />
                                <label
                                    class="flex justify-center py-2 text-sm sm:text-base md:text-2xl font-semibold cursor-pointer"
                                    :class="
                                        selectedTabIndex === index
                                            ? 'bg-sushi-200'
                                            : 'text-white'
                                    " :for="index">{{ tab }}</label>
                            </div>
                        </div>
                        <div class="prose md:prose-lg px-4">
                            <div class="pb-4 md:pb-8" v-if="tabs[selectedTabIndex] === 'Pressure'">
                                <div v-html="sections[selectedTabIndex].content"></div>
                                <AccordionItem v-for="(subContent, index) in sections[
                                    selectedTabIndex
                                ].subcontent" :key="index" class="my-4 rounded-xl ring-2 ring-ocean-100 shadow-md"
                                    :title="subContent.title" :description="subContent.content"
                                    caratClass="text-ocean-400" />
                            </div>
                            <div v-if="tabs[selectedTabIndex] === 'Switch'">
                                <div v-html="sections[selectedTabIndex].content"></div>
                                <ActionItem v-for="(subContent, index) in sections[
                                    selectedTabIndex
                                ].subcontent" :key="index" class="my-4 rounded-xl ring-2 ring-ocean-100 shadow-md"
                                    :title="subContent.title" :description="subContent.content" :step="index + 1"
                                    caratClass="text-ocean-400" />
                                <div v-html="sections[selectedTabIndex].end"></div>
                            </div>
                            <div v-if="tabs[selectedTabIndex] === 'Share'">
                                <div v-html="sections[selectedTabIndex].content"></div>
                                <AccordionItem v-for="(subContent, index) in sections[
                                    selectedTabIndex
                                ].subcontent" :key="index" class="my-4 rounded-xl ring-2 ring-ocean-100 shadow-md"
                                    :title="subContent.title" :description="subContent.content"
                                    caratClass="text-ocean-400" />
                                <div v-html="sections[selectedTabIndex].middle"></div>
                                <div class="flex justify-center">
                                    <SocialSharer class="text-sushi-500" url="https://bank.green" :hashtags="[
                                        'climatecrisis',
                                        'fossilbanks',
                                    ]" :large="true" />
                                </div>
                                <div v-html="sections[selectedTabIndex].end"></div>
                                <div class="w-full flex flex-row flex-wrap">
                                    <div class="w-full sm:w-1/2 md:w-1/3">
                                        <img class="w-full p-2 mt-0" src="/img/social/social-image-1.jpg" alt="" />
                                    </div>
                                    <div class="w-full sm:w-1/2 md:w-1/3">
                                        <img class="w-full p-2 mt-0" src="/img/social/social-image-2.jpg" alt="" />
                                    </div>
                                    <div class="w-full sm:w-1/2 md:w-1/3">
                                        <img class="w-full p-2 mt-0" src="/img/social/social-image-3.jpg" alt="" />
                                    </div>
                                    <div class="w-full sm:w-1/2 md:w-1/3">
                                        <img class="w-full p-2 mt-0" src="/img/social/social-image-4.jpg" alt="" />
                                    </div>
                                    <div class="w-full sm:w-1/2 md:w-1/3">
                                        <img class="w-full p-2 mt-0" src="/img/social/social-image-5.jpg" alt="" />
                                    </div>
                                    <div class="w-full sm:w-1/2 md:w-1/3">
                                        <img class="w-full p-2 mt-0" src="/img/social/social-image-6.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div v-if="tabs[selectedTabIndex] === 'Learn'">
                                <div class="pb-6 md:pb-8" v-html="sections[selectedTabIndex].content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contain max-w-5xl pb-16">
                <CallToAction :title="$t('TAKE_THE_BANK_GREEN_PLEDGE')"
                    :paragraph="$t('BANKS_LIVE_AND_DIE_ON_REPUTATIONS')" :checkListItems="checkList"
                    :buttonText="$t('TAKE_THE_PLEDGE')" />
            </div>
        </div>
    </div>
</template>

<script>
import introduction from './introduction.md'
import pressureContent from './pressure-content.md'
import pressureActionPhone from './pressure-content-action-phone.md'
import pressureActionEmail from './pressure-content-action-email.md'
import pressureActionLocal from './pressure-content-action-local.md'
import switchContent from './switch-content.md'
import switchEnd from './switch-content-end.md'
import switchContentStep1 from './switch-content-step-1.md'
import switchContentStep2 from './switch-content-step-2.md'
import switchContentStep3 from './switch-content-step-3.md'
import switchContentStep4 from './switch-content-step-4.md'
import switchContentStep5 from './switch-content-step-5.md'
import shareContent from './share-content.md'
import shareContentMiddle from './share-content-middle.md'
import shareContentEnd from './share-content-end.md'
import shareContentStep1 from './share-content-step-1.md'
import shareContentStep2 from './share-content-step-2.md'
import shareContentStep3 from './share-content-step-3.md'
import shareContentStep4 from './share-content-step-4.md'
import shareContentStep5 from './share-content-step-5.md'
import shareContentStep6 from './share-content-step-6.md'
import shareContentStep7 from './share-content-step-7.md'
import learnContent from './learn-content.md'
import CallToAction from '@/components/CallToAction.vue'
import AccordionItem from '@/components/AccordionItem.vue'
import SocialSharer from '@/components/SocialSharer.vue'
import ActionItem from '@/components/faq/ActionItem.vue'
export default {
    components: { CallToAction, AccordionItem, ActionItem, SocialSharer },
    data() {
        return {
            introduction,
            tabs: ['Pressure', 'Switch', 'Share', 'Learn'],
            selectedTabIndex: 0,
        }
    },
    computed: {
        sections() {
            return [
                {
                    title: 'Pressure',
                    content: pressureContent,
                    subcontent: [
                        {
                            title: 'Make a phone call',
                            content: pressureActionPhone,
                        },
                        {
                            title: 'Send an email or letter',
                            content: pressureActionEmail,
                        },
                        {
                            title: 'Visit a local branch',
                            content: pressureActionLocal,
                        },
                    ],
                },
                {
                    title: 'Switch',
                    content: switchContent,
                    subcontent: [
                        {
                            title: 'Open your new account',
                            content: switchContentStep1,
                        },
                        {
                            title:
                                'Arrange the transfer of all automated payments to your new account',
                            content: switchContentStep2,
                        },
                        {
                            title:
                                'Make sure you have paid off the debt (if any) from your old account',
                            content: switchContentStep3,
                        },
                        {
                            title:
                                'Transfer your balance from your old to your new account',
                            content: switchContentStep4,
                        },
                        {
                            title:
                                'Close your old account and tell your bank why you left',
                            content: switchContentStep5,
                        },
                    ],
                    end: switchEnd,
                },
                {
                    title: 'Share',
                    content: shareContent,
                    subcontent: [
                        {
                            title: "Don't tell people what to do",
                            content: shareContentStep1,
                        },
                        {
                            title: "Don't become judgemental",
                            content: shareContentStep2,
                        },
                        {
                            title: 'Be positive',
                            content: shareContentStep3,
                        },
                        {
                            title: 'It\'s not about "us" vs. "them"',
                            content: shareContentStep4,
                        },
                        {
                            title: 'Share your story',
                            content: shareContentStep5,
                        },
                        {
                            title:
                                'Explain that switching banks accounts is not complicated',
                            content: shareContentStep6,
                        },
                        {
                            title: 'Listen',
                            content: shareContentStep7,
                        },
                    ],
                    middle: shareContentMiddle,
                    end: shareContentEnd,
                },
                { title: 'Learn', content: learnContent },
            ]
        },
        checkList() {
            return [
                this.$t('SEND_A_MESSAGE_TO_YOUR_BANK'),
                this.$t('JOIN_A_FAST_GROWING_MOVEMENT'),
                this.$t('TAKE_A_CRITICAL_CLIMATE_ACTION'),
            ]
        },
    },
    setup() {
        useHead({ title: 'Take action' })
    },
}
</script>
