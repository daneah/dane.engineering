import { shallowMount } from '@vue/test-utils'

import CardGrid from '@/components/CardGrid'


describe('CardGrid', () => {
  it('Renders without error', () => {
    const wrapper = shallowMount(CardGrid)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('Renders a wrapper div', () => {
    const wrapper = shallowMount(CardGrid)
    expect(wrapper.is('div.cards')).toBe(true)
  })

  it('Renders slot content', () => {
    const wrapper = shallowMount(CardGrid, {
      slots: {
        cards: '<ul class="some-cards"><li>a card</li><li>another card</li></ul>',
      },
    })
    console.log(wrapper.html())
    expect(wrapper.contains('ul.some-cards')).toBe(true)
  })
})
