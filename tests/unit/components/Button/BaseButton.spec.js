import { shallowMount } from '@vue/test-utils'

import BaseButton from '@/components/Button/BaseButton'


describe('BaseButton', () => {
    it('Renders a button', () => {
        const wrapper = shallowMount(BaseButton)
        expect(wrapper.find('button.dh-button').element).toBeTruthy()
    })

    it('Contains content provided in a slot', () => {
        const wrapper = shallowMount(BaseButton, {
            slots: {
                default: 'I am a button!'
            }
        })
        const button = wrapper.find('button')
        expect(button.text()).toBe('I am a button!')
    })
})
