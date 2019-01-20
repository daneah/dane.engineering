import { shallowMount } from '@vue/test-utils'

import BaseButton from '@/components/BaseButton'


describe('BaseButton', () => {
    it('Renders a button', () => {
        const wrapper = shallowMount(BaseButton)
        expect(wrapper.contains('button')).toBe(true)
    })

    it('Uses the specified text', () => {
        const wrapper = shallowMount(BaseButton, {
            propsData: {
                text: 'I am a button!'
            }
        })
        const button = wrapper.find('button')
        expect(button.text()).toBe('I am a button!')
    })
})
