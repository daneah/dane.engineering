import { shallowMount } from '@vue/test-utils'

import BaseParagraph from '@/components/BaseParagraph'


describe('BaseParagraph', () => {
    it('Renders a paragraph', () => {
        const wrapper = shallowMount(BaseParagraph)
        expect(wrapper.contains('p')).toBe(true)
    })

    it('Renders the specified content', () => {
        const wrapper = shallowMount(BaseParagraph, {
            slots: {
                default: 'I am a paragraph!'
            }
        })
        expect(wrapper.find('p').text()).toBe('I am a paragraph!')
    })
})
