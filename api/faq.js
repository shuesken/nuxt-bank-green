import { get } from './index'
import sessionStorage from '@/utils/sessionStorage'

let cachedFAQ = ''
try {
    if (sessionStorage.getItem('bg.FAQ')) {
        cachedFAQ = JSON.parse(sessionStorage.getItem('bg.FAQ'))
    }
} catch (e) {
    sessionStorage.removeItem('bg.FAQ')
}

export async function getFAQ() {
    if (cachedFAQ) {
        return cachedFAQ
    }

    const res = await get('/getFAQ')
    cachedFAQ = res.faq
    sessionStorage.setItem('bg.FAQ', JSON.stringify(cachedFAQ))
    return res.faq
}
