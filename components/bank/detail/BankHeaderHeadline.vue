<template>
    <div class="relative col-span-2 md:col-span-1 flex items-end">
        <div class="flex-1 flex items-center md:mt-8">
            <div class="relative w-14 h-14 mr-4 rounded-lg">
                <ClearbitLogo v-if="bank.website" :url="bank.website" :size="24"
                    imgClass="absolute inset-0 z-20 bg-contain bg-no-repeat bg-center bg-white" />
                <BankIcon class="absolute inset-0 z-10" />
            </div>
            <div>
                <h1
                    class="text-xl md:text-2xl text-gray-800 font-medium md:font-semibold tracking-wider flex items-center">
                    {{ bank.name }}
                </h1>
                <div v-if="bank.subtitle" class="text-lg md:text-xl text-gray-500" v-html="bank.subtitle"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ClearbitLogo from '@/components/icons/ClearbitLogo.vue'
import BankIcon from '@/components/forms/banks/BankIcon.vue'


const props = defineProps({ details: Object })
const bank = computed(() => props.details)


</script>
