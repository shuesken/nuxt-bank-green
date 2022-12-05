import { get } from './index'
import sessionStorage from '@/utils/sessionStorage'

let cachedFAQ = ''
try {
    if (sessionStorage.getItem('bg.certifiedFAQ')) {
        cachedFAQ = JSON.parse(sessionStorage.getItem('bg.certifiedFAQ'))
    }
} catch (e) {
    sessionStorage.removeItem('bg.certifiedFAQ')
}

export async function getCertifiedFAQ() {
    if (cachedFAQ) {
        return cachedFAQ
    }

    const res = await get('/getCertifiedFAQ')
    cachedFAQ = res.faq
    sessionStorage.setItem('bg.certifiedFAQ', JSON.stringify(cachedFAQ))
    return res.faq
}
