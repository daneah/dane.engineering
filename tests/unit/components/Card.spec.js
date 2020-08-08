import { shallowMount } from '@vue/test-utils'

import Card from '@/components/Card/Card'


describe('Card', () => {
    it('Renders a card', () => {
        const wrapper = shallowMount(Card)
        expect(wrapper.find('div.card').element).toBeTruthy()
    })

    it('Uses the specified image', () => {
        const wrapper = shallowMount(Card, {
            scopedSlots: {
                image: '<img src="https://foo.com/bar.jpg">'
            }
        })
        const imageWrapper = wrapper.find('div.card__header')
        expect(imageWrapper.find('img[src="https://foo.com/bar.jpg"]').element).toBeTruthy()
    })

    it('Uses the specified title', () => {
        const wrapper = shallowMount(Card, {
            scopedSlots: {
                title: '<h1 class="test">Title</h1>'
            }
        })
        const titleWrapper = wrapper.find('div.card__title')
        expect(titleWrapper.find('h1.test').element).toBeTruthy()
    })

    it('Uses the specified description', () => {
        const wrapper = shallowMount(Card, {
            scopedSlots: {
                description: '<p class="test">Description</p>'
            }
        })
        const descriptionWrapper = wrapper.find('div.card__description')
        expect(descriptionWrapper.find('p.test').element).toBeTruthy()
    })
})
