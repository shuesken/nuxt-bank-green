<template>
    <iframe id="ytplayer" type="text/html" width="640" height="360" :src="url" frameborder="0"></iframe>
</template>

<script setup>
defineProps({
    url: URL
})
</script>