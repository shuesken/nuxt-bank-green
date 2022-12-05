import lottie from 'lottie-web/build/player/lottie_light'
import { onMounted, ref, watch } from '@vue/runtime-core'

export default function useLottie({ path }) {
    const container = ref(null)
    const animData = ref(null)

    const loadAnimation = () => {
        if (animData.value) {
            animData.value.destroy()
        }
        animData.value = lottie.loadAnimation({
            container: container.value, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            prerender: true,
            autoplay: true,
            path: path.value, // the path to the animation json
        })
    }

    onMounted(loadAnimation)
    watch(path, loadAnimation)

    return {
        container,
        animData,
        loadAnimation,
    }
}