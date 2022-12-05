/**
 * @param {HTMLElement} element
 */
function markuptext(element) {
    const text = element.textContent
    const ast = parseTextToAST(text)

    if (element instanceof Node === false) {
        console.error('v-text not passing instance of Node', {
            extra: { element },
        })
        return text
    }

    if (!element.firstChild) {
        console.error('markuptext did not have content in element', {
            extra: { element },
        })
        return text
    }

    element.removeChild(element.firstChild)
    for (const astNode of ast) {
        if (astNode.type === 'text') {
            const node = document.createTextNode(astNode.value)
            element.appendChild(node)
            continue
        }
        if (astNode.type === 'strong') {
            const node = document.createElement('b')
            node.textContent = astNode.value
            element.appendChild(node)
            continue
        }
    }
}

/**
 * Parses a text string to a list of text or bold nodes
 * @param { string } text
 */
export function parseTextToAST(text) {
    const ast = []

    let type = 'text'
    let value = ''

    for (let index = 0; index < text.length; index++) {
        const char = text[index]
        // only apply strong if asterisk hasn't been escaped with a \
        if (char === '*' && text[index - 1] !== '\\') {
            if (type === 'text') {
                if (value.length > 0) ast.push({ type, value })
                type = 'strong'
                value = ''
                continue
            }
            if (type === 'strong') {
                if (value.length > 0) ast.push({ type, value })
                type = 'text'
                value = ''
                continue
            }
        }
        // don't include any backslashes (they are used for escaping asterisks)
        if (char !== '\\') {
            value += char
        }
    }
    if (value.length > 0) ast.push({ type, value })

    return ast
}

/**
 * Bold text between *asterisk*
 */
export default {
    mounted(el, binding) {
        el.textContent = binding.value || ''
        markuptext(el)
    },
    updated(el, binding) {
        el.textContent = binding.value || ''
        markuptext(el)
    },
}
