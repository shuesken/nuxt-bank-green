<template>
    <div class="flex flex-col justify-center items-center rounded-xl py-6 md:py-12 px-6 md:px-16"
        :class="light ? 'bg-transparent' : 'bg-primary-dark'">
        <h1 class="w-full text-center font-semibold text-xl md:text-3xl tracking-wider mb-8 md:mb-4"
            :class="light ? 'text-gray-800' : 'text-gray-50'">
            {{ title }}
        </h1>
        <div class="flex flex-col md:flex-row items-center justify-center md:space-x-8" :class="spaced ? 'py-4' : ''">
            <div class="md:w-1/2 max-w-md">
                <p class="text-lg md:text-2xl tracking-wide mb-1 md:mb-4 text-white"
                    :class="light ? 'text-blue-900' : 'text-white'" v-text="paragraph" />
            </div>
            <CheckList class="md:w-1/2 my-6 md:text-xl" :list="checkListItems" />
        </div>
        <div class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-between items-center mt-8">
            <NuxtLink to="/sustainable-eco-banks" class="button-green w-auto">{{ $t('MOVE_YOUR_MONEY_TODAY') }}
            </NuxtLink>
            <div class="text-xs text-gray-500 mx-4 uppercase">
                {{ $t('OR') }}
            </div>
            <NuxtLink to="/pledge" class="underline text-white">{{ $t('PLEDGE_TO_MOVE_IT') }}
            </NuxtLink>
        </div>
    </div>
</template>

<script>
import CheckList from '@/components/CheckList.vue'
import markup from '@/utils/directives/markup'

export default {
    components: {
        CheckList,
    },
    directives: { markup },
    props: {
        title: String,
        paragraph: String,
        checkListItems: Array,
        buttonText: String,
        light: Boolean,
        spaced: Boolean,
    },
}
</script>
