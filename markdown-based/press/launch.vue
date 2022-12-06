<template>
    <div class="bg-sushi-50">
        <div class="page-fade-in contain py-24 sm:py-32">
            <div class="max-w-3xl mx-auto mt-4 mb-8">
                <h1 class="text-2xl sm:text-5xl font-extrabold sm:text-center text-sushi-900">
                    Bank.Green launches website, campaign sounding alarm on
                    banks funding fossil fuels
                </h1>
                <div class="flex sm:items-center justify-between sm:text-center sm:justify-around my-8">
                    <div>
                        <div class="uppercase text-xs text-gray-500">
                            Contact
                        </div>
                        <div class="text-sm text-gray-700 font-semibold">
                            Alice Hu<br />
                            <a href="mailto:alice@bank.green">alice@bank.green</a><br />
                            +1 (217) 390 6725
                        </div>
                    </div>
                    <div>
                        <div class="uppercase text-xs text-gray-500">
                            For immediate release
                        </div>
                        <div class="text-sm text-gray-700 font-semibold">
                            April 5, 2021
                        </div>
                    </div>
                </div>
            </div>
            <article class="mx-auto prose sm:prose-lg xl:prose-xl break-words" v-html="content"></article>
        </div>
    </div>
</template>

<script>
import content from './launch.md'

export default {
    data() {
        return { content }
    },

    setup() {
        useHead({
            title:
                'Bank.Green launches website, campaign sounding alarm on banks funding fossil fuels',
        })
    },
}
</script>
