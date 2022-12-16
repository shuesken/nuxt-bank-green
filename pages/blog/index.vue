<template>
    <div class="page bg-sushi-50">

        <div v-if="data?.results">
            <div class="page-fade-in contain pt-28 pb-16">
                <h1 class="text-2xl font-semibold whitespace-pre-line mb-4" v-t="'BLOG'" />
                <div class="-mx-4 mt-6 pt-10 grid gap-16 md:grid-cols-2 md:gap-x-5 md:gap-y-12">
                    <BlogCard v-for="post in data.results" :key="post.uid" :to="`/blog/${post.uid}`"
                        :date="post.data.publicationdate" :description="asText(post.data.description)"
                        :image="getImageSrc(post)" :title="post.data.title" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BlogCard from '@/components/blog/BlogCard.vue'
// import { getBlogs } from '@/api/blog'

const { client, asText } = usePrismic()

const { data } = await useAsyncData('blogposts', () => client.getByType('blogpost'))

const getImageSrc = post => post.data.slices.find(s => s.slice_type === "image_slice").primary.image.url ?? ""

useHead({ title: 'Blog' })
</script>
