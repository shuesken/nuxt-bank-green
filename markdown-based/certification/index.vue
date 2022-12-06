<template>
    <div class="page">
        <div class="bg-sushi-50">
            <div class="page-fade-in contain max-w-4xl xl:max-w-5xl pt-28 pb-16">
                <article class="prose sm:prose-lg xl:prose-xl mx-auto max-w-4xl xl:max-w-5xl">
                    <img class="w-48 h-48" src="/img/certification/certified.png" alt="Fossil-free certified badge" />
                    <h3 class="text-center">
                        {{ $t('CERTIFICATION') }}
                    </h3>
                    <section v-html="intro"></section>

                    <div class="flex justify-center py-20">
                        <app-link to="/sustainable-eco-banks" class="button-green w-max">{{
                                $t('VIEW_FOSSIL_FREE_ALLIANCE_MEMBERS')
                        }}
                        </app-link>
                    </div>

                    <section v-html="detail"></section>
                    <h4 v-text="$t('FAQ_TITLE')" />
                </article>

                <div class="mt-4 flex flex-col space-y-6 constrain-images">
                    <transition-group enter-active-class="transform-gpu ease-out duration-300 transition"
                        enter-from-class="-translate-y-2 opacity-0" enter-to-class="translate-y-0 opacity-100"
                        leave-active-class="transform-gpu transition ease-in duration-190"
                        leave-from-class="opacity-100" leave-to-class="opacity-0">
                        <AccordionItem v-for="i in FAQCount" :key="i" :title="FAQs[i - 1]?.title"
                            :description="FAQs[i - 1]?.body" :loaded="loaded" />
                    </transition-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import intro from './intro.md'
import detail from './detail.md'
import AccordionItem from '@/components/AccordionItem.vue'
import markup from '@/utils/directives/markup'
import { getCertifiedFAQ } from '@/api/certified'
export default {
    components: {
        AccordionItem,
    },
    directives: { markup },
    setup() {
        useHead({
            title: 'Fossil Free Certification - Bank.Green',
            description:
                'Fossil Free Certification is the simplest, most straightforward way to signal to customers, professionals in the banking sector, and the general public that a sustainability-conscious financial institution is truly putting its money where its mouth is.',
        })
        const FAQs = ref([])
        const loaded = ref(false)
        const FAQCount = computed(() => {
            if (!loaded.value) return 4
            return FAQs.value.length
        })
        const loadFAQ = async () => {
            FAQs.value = await getCertifiedFAQ()
            loaded.value = true
        }
        onMounted(loadFAQ)
        return {
            FAQCount,
            FAQs,
            loaded,
            intro,
            detail,
        }
    },
}
</script>
