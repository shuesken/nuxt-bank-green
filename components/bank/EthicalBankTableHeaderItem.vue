<template>
    <transition
        enter-active-class="duration-200 transform-gpu origin-top ease-out"
        enter-from-class="opacity-0 scale-y-95"
        enter-to-class="opacity-100 scale-y-100"
        leave-active-class="duration-100 transform-gpu origin-top ease-in"
        leave-from-class="opacity-100 scale-y-100"
        leave-to-class="opacity-0 scale-y-95"
        mode="out-in"
    >
        <div
            v-if="item"
            class="inline-flex flex-col xl:flex-row items-center truncate overflow-hidden max-w-full"
        >
            <div class="relative w-8 h-8 rounded-lg">
                <ClearbitLogo
                    v-if="item.website"
                    :url="item.website"
                    :size="24"
                    imgClass="absolute inset-0 z-20 bg-contain bg-no-repeat bg-center bg-white"
                />
                <BankIcon class="absolute inset-0 z-10" />
            </div>
            <div
                class="mt-3 xl:mt-0 xl:ml-3 flex-1 font-semibold text-gray-800 block whitespace-normal xl:whitespace-nowrap xl:truncate w-full lg:w-auto"
            >
                {{ item.name }}
            </div>
        </div>

        <div v-else class="inline-flex items-center truncate">
            <div class="w-8 h-8 bg-gray-100 rounded-lg animate-pulse"></div>
            <div class="ml-3 flex-1 font-semibold text-gray-200 block truncate">
                loading...
            </div>
        </div>
    </transition>
</template>

<script>
import BankIcon from '../forms/banks/BankIcon.vue'
import ClearbitLogo from '../icons/ClearbitLogo.vue'

export default {
    components: { ClearbitLogo, BankIcon },
    props: {
        item: Object,
    },
}
</script>
