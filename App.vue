<template>
    <div
        v-if="$route"
        @mouseleave="onExitIntent"
        class="min-h-screen flex flex-col"
    >
        <transition
            enter-from-class="opacity-0"
            enter-active-class="transition ease duration-300"
            enter-to-class="opacity-100"
            leave-from-class="opacity-100"
            leave-active-class="transition ease duration-300"
            leave-to-class="opacity-0"
            appear
        >
            <LoadBar
                v-if="progressWidth"
                class="z-50 fixed top-0 inset-x-0 h-1.5"
            />
        </transition>
        <CookieBanner />
        <NavBar />
        <RouterView v-slot="{ Component }">
            <transition
                enter-active-class="route-enter-active-class"
                enter-from-class="route-enter-from-class"
                enter-to-class="route-enter-to-class"
            >
                <!-- add .page-fade-in to elements you want to be transitioned -->
                <component :is="Component" />
            </transition>
        </RouterView>
        <NavFooter />
    </div>
    <Modal
        v-if="openModal"
        v-on:closeModal="openModal = false"
        class="z-50 text-white bg-primary-dark"
    >
        <PledgeSignup
            @success="openModal = false"
            :title="$t('PLEDGE_POPUP_TITLE')"
            tag="pledge popup"
        />
    </Modal>
    <NotificationPanel />
</template>

<script>
import NavBar from '@/components/nav/NavBar.vue'
import NavFooter from '@/components/nav/NavFooter.vue'
import NotificationPanel from '@/components/NotificationPanel.vue'
import axiosProgress from '@/utils/http/axiosProgress'
import CookieBanner from '@/components/CookieBanner'
import Modal from '@/components/Modal'
import CheckList from '@/components/CheckList.vue'
import LoadBar from '@/components/LoadBar.vue'
import storage from '@/utils/storage'
import PledgeSignup from '@/components/forms/PledgeSignup.vue'

export default {
    name: 'App',
    components: {
        NotificationPanel,
        NavBar,
        NavFooter,
        CookieBanner,
        Modal,
        CheckList,
        LoadBar,
        PledgeSignup,
    },
    data() {
        return {
            axiosProgress,
            openModal: false,
            hasUserSeenExitIntentModal: !!storage.getItem('bg.seenExitIntent'),
        }
    },
    computed: {
        progressWidth() {
            return axiosProgress.state.progress
        },
    },
    methods: {
        onExitIntent() {
            if (this.hasUserSeenExitIntentModal) return
            if (this.openModal) return
            if (!this.$route?.path?.includes('/sustainable-eco-banks')) return
            this.openModal = true
            this.hasUserSeenExitIntentModal = true
            storage.setItem('bg.seenExitIntent', true)
        },
    },
    mounted() {
        // const exemptedRoute = ['/faq', '/blog', '/blog/:slug']
        // const currentRoute = this.$route.matched[0].path
        // if (exemptedRoute.includes(currentRoute)) {
        //     document.dispatchEvent(new Event('not-trigger'))
        // } else {
        //     document.dispatchEvent(new Event('render-trigger'))
        // }
    },
}
</script>
