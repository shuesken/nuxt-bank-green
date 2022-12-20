import axios from 'axios'
import axiosProgress from '@/utils/http/axiosProgress'
import httpErrorHandling from '@/utils/http/errorHandling'

// let baseURL = 'http://localhost:5001/bank-green-staging/europe-west1'
// let baseURL = 'https://europe-west1-bank-green-staging.cloudfunctions.net'
let baseURL = "https://europe-west1-bank-green.cloudfunctions.net"

/*
if (process.env.VUE_APP_ENV === 'staging') {
    baseURL = 'https://europe-west1-bank-green-staging.cloudfunctions.net'
}
if (process.env.VUE_APP_ENV === 'production') {
    baseURL = 'https://europe-west1-bank-green.cloudfunctions.net'
}
*/

export const instance = axios.create({
    baseURL,
    timeout: 120000, // timeout if no response in 2min
    withCredentials: true,
})
axiosProgress.setInterceptors(instance)
httpErrorHandling.setInterceptors(instance)
axios.defaults.headers.post['X-TLC'] = '1'

function parseError(e) {
    const errors = e?.response?.data?.errors
    if (!errors) {
        return e
    }
    const { message, detail, code, list } = errors
    if (message) e.message = message
    if (detail) e.message = detail
    if (code) e.code = code
    if (list) e.list = list
    return e
}

export async function get(url, config) {
    try {
        const params = window['__PRERENDER_INJECTED']?.prerender
            ? {
                params: { ...config?.params, prerender: true },
            }
            : config

        const res = await instance.get(url, params)
        return res.data
    } catch (e) {
        throw parseError(e)
    }
}

export async function post(url, data, config) {
    try {
        const res = await instance.post(url, data, config)
        return res.data
    } catch (e) {
        throw parseError(e)
    }
}
