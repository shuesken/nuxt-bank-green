<template>
    <div
        v-if="showBanner"
        class="py-2 sm:px-0 bg-gray-900 text-gray-100 text-xs fixed bottom-0 inset-x-0 z-50"
    >
        <div class="contain mx-auto">
            <div class="sm:flex justify-between items-center">
                <div
                    class="text-gray-200 text-xs flex-1 mr-4"
                    v-t="'COOKIE_MESSAGE'"
                ></div>
                <div class="mt-1 sm:mt-0 flex items-center justify-between">
                    <router-link
                        to="/privacy"
                        class="cursor-pointer text-sushi-200 hover:text-sushi-100 font-bold no-underline mr-4"
                        v-t="'IMPRINT_PRIVACY_SHORT'"
                    ></router-link>
                    <div
                        @click="noCookies"
                        class="bg-red-500 hover:bg-red-400 rounded text-white cursor-pointer px-4 no-underline py-2 mr-2"
                        v-t="'NO_COOKIES'"
                    ></div>

                    <div
                        @click="showCookies"
                        class="bg-sushi-500 hover:bg-sushi-400 rounded text-white cursor-pointer px-4 no-underline py-2"
                        v-t="'YES_COOKIES'"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import storage from '@/utils/storage'

export default {
    data() {
        return {
            showBanner: storage.getItem('bg.hidebanner') ? false : true,
        }
    },
    methods: {
        showCookies() {
            storage.setItem('bg.cookies', 'yes')
            storage.setItem('bg.hidebanner', 'hide')
            this.showBanner = false
        },
        noCookies() {
            storage.setItem('bg.cookies', 'no')
            storage.setItem('bg.hidebanner', 'hide')
            this.showBanner = false
        },
    },
}
</script>
