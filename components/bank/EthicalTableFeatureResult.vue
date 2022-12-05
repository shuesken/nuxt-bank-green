<template>
    <span v-if="feature.text" class="text-sushi-800 font-medium text-sm">{{
        feature.text
    }}</span>
    <svg
        v-else-if="feature.isChecked"
        class="h-6 w-6 text-sushi-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
        ></path>
    </svg>

    <svg
        v-else
        class="w-6 h-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
        ></path>
    </svg>
</template>

<script>
export default {
    props: { feature: Object },
}
</script>
