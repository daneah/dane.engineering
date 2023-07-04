import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from "vitest"

import CardGrid from '@/components/CardGrid.vue'


describe('CardGrid', () => {
  it('Renders a wrapper div', () => {
    const wrapper = shallowMount(CardGrid)
    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.element.classList.contains('cards')).toBe(true)
  })

  it('Renders slot content', () => {
    const wrapper = shallowMount(CardGrid, {
      slots: {
        cards: '<ul class="some-cards"><li>a card</li><li>another card</li></ul>',
      },
    })
    expect(wrapper.find('ul.some-cards').element).toBeTruthy()
  })
})
