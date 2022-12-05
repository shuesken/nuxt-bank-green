import { get, post } from './index'
import sessionStorage from '@/utils/sessionStorage'

export async function getBlogs() {
    if (process.env.VUE_APP_ENV == 'production') {
        let blogsCache = sessionStorage.getItem('bg.BLOGS')
            ? JSON.parse(sessionStorage.getItem('bg.BLOGS'))
            : {}
        if (Object.keys(blogsCache).length == 0) {
            blogsCache = await get('/getBlogs')
            sessionStorage.setItem('bg.BLOGS', JSON.stringify(blogsCache))
        }
        return blogsCache
    } else {
        return await get('/getBlogs')
    }
}

export async function getBlog(params) {
    if (process.env.VUE_APP_ENV == 'production') {
        let blogCache = sessionStorage.getItem('bg.BLOG')
            ? JSON.parse(sessionStorage.getItem('bg.BLOG'))
            : {}
        const paramString = JSON.stringify(params)

        if (!blogCache[paramString]) {
            blogCache[paramString] = await post('/getBlog', { slug: params })
            sessionStorage.setItem('bg.BLOG', JSON.stringify(blogCache))
        }
        return blogCache[paramString]
    } else {
        return await post('/getBlog', { slug: params })
    }
}
