let usePolyfill = false

try {
    // Info: https://github.com/Modernizr/Modernizr/blob/94a690127904ed7d85679970257e76f3528b4b1c/modernizr.js#L777-802
    window.localStorage.setItem('test', '1')
    window.localStorage.removeItem('test')
} catch (e) {
    // This crashes in private-browser in Safari
    if (process.env.NODE_ENV === 'production') {
        console.warn('USING STORAGE POLYFILL')
    }
    usePolyfill = true
}

export default {
    data: {},
    setItem(id, val) {
        if (usePolyfill) {
            this.data[id] = val
        } else {
            window.localStorage.setItem(id, val)
        }
    },
    getItem(id) {
        if (usePolyfill) {
            return this.data[id]
        } else {
            return window.localStorage.getItem(id)
        }
    },
    removeItem(id) {
        if (usePolyfill) {
            delete this.data[id]
        } else {
            window.localStorage.removeItem(id)
        }
    },
    clear() {
        if (usePolyfill) {
            this.data = {}
        } else {
            window.localStorage.clear()
        }
    },
}