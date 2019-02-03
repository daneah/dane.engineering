import { mount, shallowMount } from '@vue/test-utils'

import NetlifyForm from '@/components/NetlifyForm'


describe('NetlifyForm', () => {
    it('Renders a form', () => {
        const wrapper = shallowMount(NetlifyForm, {
            propsData: {
                formName: 'testForm'
            }
        })
        expect(wrapper.contains('form[netlify]')).toBe(true)
    })

    it('Renders a honeypot field', () => {
        const wrapper = shallowMount(NetlifyForm, {
            propsData: {
                formName: 'testForm'
            }
        })
        expect(wrapper.contains('input[name="pwned"]')).toBe(true)
    })

    it('Renders a submit button with the specified text', () => {
        const wrapper = mount(NetlifyForm, {
            propsData: {
                formName: 'testForm',
                submitButtonText: 'Send it!',
            }
        })
        const submitButton = wrapper.find('button[type="submit"]')
        expect(submitButton.text()).toBe('Send it!')
    })

    it('Renders additional fields', () => {
        const wrapper = mount(NetlifyForm, {
            propsData: {
                formName: 'testForm',
            },
            slots: {
                default: '<input type="text" name="test">'
            }
        })
        expect(wrapper.find('form').contains('input[name="test"]')).toBe(true)
    })
})