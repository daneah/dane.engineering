import { shallowMount } from '@vue/test-utils'

import Card from '@/components/Card/Card'


describe('Card', () => {
    it('Renders a card', () => {
        const wrapper = shallowMount(Card)
        expect(wrapper.contains('div.card')).toBe(true)
    })

    it('Uses the specified image', () => {
        const wrapper = shallowMount(Card, {
            scopedSlots: {
                image: '<img src="https://foo.com/bar.jpg">'
            }
        })
        const imageWrapper = wrapper.find('div.card__header')
        expect(imageWrapper.contains('img[src="https://foo.com/bar.jpg"]')).toBe(true)
    })

    it('Uses the specified title', () => {
        const wrapper = shallowMount(Card, {
            scopedSlots: {
                title: '<h1 class="test">Title</h1>'
            }
        })
        const titleWrapper = wrapper.find('div.card__title')
        expect(titleWrapper.contains('h1.test')).toBe(true)
    })

    it('Uses the specified description', () => {
        const wrapper = shallowMount(Card, {
            scopedSlots: {
                description: '<p class="test">Description</p>'
            }
        })
        const descriptionWrapper = wrapper.find('div.card__description')
        expect(descriptionWrapper.contains('p.test')).toBe(true)
    })
})
