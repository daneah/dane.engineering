import { shallowMount } from '@vue/test-utils'

import BookAnnouncement from '@/components/BookAnnouncement'


describe('BookAnnouncement', () => {
    it('Renders without error', () => {
        const wrapper = shallowMount(BookAnnouncement, {
            stubs: {
                'router-link': '<a>Stubbed</a>',
            },
        })
        expect(wrapper.isVueInstance()).toBe(true)
    })

    it('Renders a div', () => {
        const wrapper = shallowMount(BookAnnouncement, {
            stubs: {
                'router-link': '<a>Stubbed</a>',
            },
        })
        expect(wrapper.is('div.book-announcement')).toBe(true)
    })

    it('Renders a heading', () => {
        const wrapper = shallowMount(BookAnnouncement, {
            stubs: {
                'BaseHeading': '<h2></h2>',
                'router-link': '<a>Stubbed</a>',
            },
        })
        expect(wrapper.contains('h2')).toBe(true)
    })

    it('Renders the book cover', () => {
        const wrapper = shallowMount(BookAnnouncement, {
            stubs: {
                'ResponsiveImage': '<img class="book-cover" />',
                'router-link': '<a>Stubbed</a>',
            },
        })
        expect(wrapper.contains('img.book-cover')).toBe(true)
    })
})
