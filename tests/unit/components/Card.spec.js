import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from "vitest"

import Card from '@/components/Card/BaseCard.vue'


describe('Card', () => {
    it('Renders a card', () => {
        const wrapper = shallowMount(Card, {
            global: {
                stubs: ['router-link'],
            },
        })
        expect(wrapper.find('div.card').element).toBeTruthy()
    })

    it('Uses the specified image', () => {
        const wrapper = shallowMount(Card, {
            global: {
                stubs: ['router-link'],
            },
            scopedSlots: {
                image: '<img src="https://foo.com/bar.jpg">'
            }
        })
        const imageWrapper = wrapper.find('div.card__header')
        expect(imageWrapper.find('img[src="https://foo.com/bar.jpg"]')).toBeTruthy()
    })

    it('Uses the specified title', () => {
        const wrapper = shallowMount(Card, {
            global: {
                stubs: ['router-link'],
            },
            scopedSlots: {
                title: '<h1 class="test">Title</h1>'
            }
        })
        const titleWrapper = wrapper.find('div.card__title')
        expect(titleWrapper.find('h1.test')).toBeTruthy()
    })

    it('Uses the specified description', () => {
        const wrapper = shallowMount(Card, {
            global: {
                stubs: ['router-link'],
            },
            scopedSlots: {
                description: '<p class="test">Description</p>'
            }
        })
        const descriptionWrapper = wrapper.find('div.card__description')
        expect(descriptionWrapper.find('p.test')).toBeTruthy()
    })
})
