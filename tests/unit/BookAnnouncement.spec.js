import { shallowMount } from '@vue/test-utils'

import BookAnnouncement from '@/components/BookAnnouncement'


describe('BookAnnouncement', () => {
    it('Renders without error', () => {
        const wrapper = shallowMount(BookAnnouncement)
        expect(wrapper.isVueInstance()).toBe(true)
    })

    it('Renders a div', () => {
        const wrapper = shallowMount(BookAnnouncement)
        expect(wrapper.is('div.book-announcement')).toBe(true)
    })

    it('Renders a heading', () => {
        const wrapper = shallowMount(BookAnnouncement, {
            stubs: {
                'BaseHeading': '<h2></h2>',
            },
        })
        expect(wrapper.contains('h2')).toBe(true)
    })

    it('Renders the book cover', () => {
        const wrapper = shallowMount(BookAnnouncement, {
            stubs: {
                'ResponsiveImage': '<img class="book-cover" />',
            },
        })
        expect(wrapper.contains('img.book-cover')).toBe(true)
    })
})
