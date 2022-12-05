import { mount } from '@vue/test-utils'

import markup, { parseTextToAST } from '../markup'

describe('markup', () => {
  it('parseTextToAST', () => {
    expect(parseTextToAST('hello')).toEqual([
      { type: 'text', value: 'hello' },
    ])
    expect(parseTextToAST('*world*')).toEqual([
      { type: 'strong', value: 'world' },
    ])
    expect(parseTextToAST('hello *world*')).toEqual([
      { type: 'text', value: 'hello ' },
      { type: 'strong', value: 'world' },
    ])
    expect(parseTextToAST('hello *world*, *test*!')).toEqual([
      { type: 'text', value: 'hello ' },
      { type: 'strong', value: 'world' },
      { type: 'text', value: ', ' },
      { type: 'strong', value: 'test' },
      { type: 'text', value: '!' },
    ])
  })

  it('can bold text', () => {
    const wrapper = mount({
      template: '<div v-text="text"></div>',
      directives: { markup },
      data() { return { text: 'hello *world*!' } }
    })

    expect(wrapper.html()).toBe('<div>hello <b>world</b>!</div>')
  })

  it('does not use innerHTML', () => {
    const wrapper = mount({
      template: '<div v-text="text"></div>',
      directives: { markup },
      data() { return { text: 'hello *<em>world</em>*!' } }
    })

    expect(wrapper.html()).toBe('<div>hello <b>&lt;em&gt;world&lt;/em&gt;</b>!</div>')
  })
})
