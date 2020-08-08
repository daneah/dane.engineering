import { mount } from '@vue/test-utils'

import PrimaryButton from '@/components/Button/PrimaryButton'


describe('PrimaryButton', () => {
    it('Renders a button', () => {
        const wrapper = mount(PrimaryButton)
        expect(wrapper.find('button.dh-button.dh-button--primary').element).toBeTruthy()
    })

    it('Contains content provided in a slot', () => {
        const wrapper = mount(PrimaryButton, {
            slots: {
                default: 'I am a button!'
            }
        })
        const button = wrapper.find('button')
        expect(button.text()).toBe('I am a button!')
    })
})
