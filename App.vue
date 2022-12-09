<template>
    <div v-if="$route" @mouseleave="onExitIntent" class="min-h-screen flex flex-col">
        <transition enter-from-class="opacity-0" enter-active-class="transition ease duration-300"
            enter-to-class="opacity-100" leave-from-class="opacity-100"
            leave-active-class="transition ease duration-300" leave-to-class="opacity-0" appear>
            <LoadBar v-if="progressWidth" class="z-50 fixed top-0 inset-x-0 h-1.5" />
        </transition>
        <CookieBanner />
        <NavBar />
        <RouterView v-slot="{ Component }">
            <transition enter-active-class="route-enter-active-class" enter-from-class="route-enter-from-class"
                enter-to-class="route-enter-to-class">
                <!-- add .page-fade-in to elements you want to be transitioned -->
                <component :is="Component" />
            </transition>
        </RouterView>
        <NavFooter />
    </div>
    <Modal v-if="openModal" v-on:closeModal="openModal = false" class="z-50 text-white bg-primary-dark">
        <PledgeSignup @success="openModal = false" :title="$t('PLEDGE_POPUP_TITLE')" tag="pledge popup" />
    </Modal>
    <NotificationPanel />
</template>

<script setup>
import axiosProgress from '@/utils/http/axiosProgress'
import storage from '@/utils/storage'
import PledgeSignup from '@/components/forms/PledgeSignup.vue'

const openModal = ref(false)
const hasUserSeenExitIntentModal = ref(!!storage.getItem('bg.seenExitIntent'))

const progressWidth = computed(() => axiosProgress?.state?.progress)

const route = useRoute()

function onExitIntent() {
    if (hasUserSeenExitIntentModal.value) return
    if (openModal.value) return
    if (route.path.includes('/sustainable-eco-banks')) return
    openModal.value = true
    hasUserSeenExitIntentModal.value = true
    storage.setItem('bg.seenExitIntent', true)
}
</script>
