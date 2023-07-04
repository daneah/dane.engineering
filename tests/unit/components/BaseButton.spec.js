import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from "vitest"

import BaseButton from '@/components/Button/BaseButton.vue'

describe('BaseButton', () => {
    it('Renders a button', () => {
        const wrapper = shallowMount(BaseButton)
        expect(wrapper.find('button.dh-button.dh-button--primary').element).toBeTruthy()
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
