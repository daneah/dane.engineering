import { shallowMount } from '@vue/test-utils'

import BaseHeading from '@/components/BaseHeading'


describe('BaseHeading', () => {
    it('Renders a heading', () => {
        const wrapper = shallowMount(BaseHeading)
        expect(wrapper.contains('h1')).toBe(true)
    })

    it('Uses the specified heading level', () => {
        const wrapper = shallowMount(BaseHeading, {
            propsData: {
                level: 2
            }
        })
        expect(wrapper.contains('h2')).toBe(true)
    })
})
