<template>
    <div class="page">
        <div class="bg-gradient-to-b from-sushi-50 to-sushi-100 pt-28">
            <div class="page-fade-in contain max-w-3xl pb-16">
                <h1 class="text-2xl font-semibold whitespace-pre-line mb-8" v-text="$t('FAQ_TITLE')" />

                <div class="flex flex-col space-y-6">
                    <transition-group enter-active-class="transform-gpu ease-out duration-300 transition"
                        enter-from-class="-translate-y-2 opacity-0" enter-to-class="translate-y-0 opacity-100"
                        leave-active-class="transform-gpu transition ease-in duration-190"
                        leave-from-class="opacity-100" leave-to-class="opacity-0">
                        <AccordionItem v-for="i in FAQCount" :key="i" :title="FAQs[i - 1]?.title"
                            :description="FAQs[i - 1]?.body" :loaded="loaded" :ref="
    el => {
        if (el) FAQrefs[i] = el
    }
                            " />
                    </transition-group>
                </div>
            </div>

            <div id="contact" class="contain max-w-3xl flex flex-row justify-center items-center">
                <SignupBox tag="FAQ bottom" class="w-full mt-8" />
            </div>
            <Swoosh />
        </div>
    </div>
</template>

<script>
import markup from '@/utils/directives/markup'
import AccordionItem from '@/components/AccordionItem.vue'
import SignupBox from '@/components/forms/SignupBox.vue'
import { getFAQ } from '@/api/faq'
import Swoosh from '@/components/Swoosh.vue'
import convertToSlug from '@/utils/text/convertStringToSlug'
import { useI18n } from 'vue-i18n'


export default {
    components: { AccordionItem, SignupBox, Swoosh },
    directives: { markup },

    setup() {
        const route = useRoute()
        const { t } = useI18n({ useScope: 'global' })
        useHeadHelper(title = t('FAQ_SEO_TITLE'), description = t('FAQ_DESC'))

        const FAQrefs = ref([])
        const FAQs = ref([])
        const loaded = ref(false)
        const FAQCount = computed(() => {
            if (!loaded.value) return 16
            return FAQs.value.length
        })
        const loadFAQ = async () => {
            FAQs.value = await getFAQ()
            loaded.value = true
        }
        onMounted(loadFAQ)

        let accordionItemAutoClicked = false
        watchEffect(() => {
            const item = FAQrefs.value.find(
                i => convertToSlug(i?.title) == route.hash.split('#')[1]
            )
            if (item && !accordionItemAutoClicked) {
                item.$el.firstChild.click()
                item.$el.scrollIntoView()
                window.scrollBy(0, -100)
                accordionItemAutoClicked = true
            }
        })

        return {
            FAQrefs,
            FAQCount,
            FAQs,
            loaded,
        }
    },
}
</script>
