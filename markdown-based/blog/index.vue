<template>
    <div class="page bg-sushi-50">
        <div v-if="blogs.length">
            <div class="page-fade-in contain pt-28 pb-16">
                <h1 class="text-2xl font-semibold whitespace-pre-line mb-4" v-t="'BLOG'" />
                <div class="-mx-4 mt-6 pt-10 grid gap-16 md:grid-cols-2 md:gap-x-5 md:gap-y-12">
                    <BlogCard v-for="blog in blogs" :key="blog.id" v-bind="blog" :title="removeTags(blog.title)" />
                </div>
            </div>
        </div>
        <div v-else class=" w-full h-screen flex items-center justify-center">
            <span>
                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 561 553"
                    style="animation: ring 2s linear infinite;">
                    <path d="M478 0A481 481 0 0 0 0 485v76h75c264 0 478-217 478-485V0h-75z" fill="#6C9039" />
                </svg>
            </span>
        </div>
    </div>
</template>

<script>
import BlogCard from '@/components/blog/BlogCard.vue'
import { getBlogs } from '@/api/blog'
import { removeTags } from '@/utils/remoeTags'

export default {
    components: { BlogCard },

    setup() {
        const blogs = ref([])

        onMounted(async () => {
            blogs.value = await getBlogs()
        })

        useHead({ title: 'Blog' })

        return {
            blogs,
            removeTags,
        }
    },
}
</script>
