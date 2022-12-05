
/**
 * Allows you to await sleep(200)
 * @param {number} ms 
 */
export function sleep(ms = 0) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}