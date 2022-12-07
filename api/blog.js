import { get, post } from './index'
import sessionStorage from '@/utils/sessionStorage'

export async function getBlogs() {
    return await get('/getBlogs')
}

export async function getBlog(params) {
    let blogCache = sessionStorage.getItem('bg.BLOG')
        ? JSON.parse(sessionStorage.getItem('bg.BLOG'))
        : {}
    const paramString = JSON.stringify(params)

    if (!blogCache[paramString]) {
        blogCache[paramString] = await post('/getBlog', { slug: params })
        sessionStorage.setItem('bg.BLOG', JSON.stringify(blogCache))
    }
    return blogCache[paramString]
}
