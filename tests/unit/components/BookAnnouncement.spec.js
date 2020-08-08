import { shallowMount } from '@vue/test-utils'

import BookAnnouncement from '@/components/BookAnnouncement'
import ResponsiveImage from '@/components/ResponsiveImage'


describe('BookAnnouncement', () => {
    it('Renders a div', () => {
        const wrapper = shallowMount(BookAnnouncement, {
            stubs: {
                'router-link': true,
            },
        })
        expect(wrapper.element.tagName).toBe('DIV')
        expect(wrapper.element.classList.contains('book-announcement')).toBe(true)
    })

    it('Renders a heading', () => {
        const wrapper = shallowMount(BookAnnouncement, {
            stubs: {
                'router-link': true,
            },
        })
        expect(wrapper.find('h2').element).toBeTruthy()
    })

    it('Renders the book cover', () => {
        const wrapper = shallowMount(BookAnnouncement, {
            stubs: {
                'router-link': true,
            },
        })
        expect(wrapper.findComponent(ResponsiveImage)).toBeTruthy()
    })
})
