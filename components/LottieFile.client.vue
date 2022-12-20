<template>
    <div ref="container"></div>
</template>

<script>
import { toRef } from '@vue/reactivity'

export default {
    props: {
        path: String,
    },
    setup(props) {
        const path = toRef(props, 'path')
        const { container } = useLottie({ path })
        return {
            container,
        }
    },
}
</script>
