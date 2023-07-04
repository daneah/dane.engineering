import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from "vitest"

import ResponsiveImage from '@/components/ResponsiveImage.vue'


describe('ResponsiveImage', () => {
    it('Renders an image', () => {
        const wrapper = shallowMount(ResponsiveImage, {
            propsData: {
                src: 'test.jpg',
                alt: 'Test image',
                height: 100,
                width: 100
            }
        })
        expect(wrapper.find('img[src="test.jpg"][alt="Test image"]').element).toBeTruthy()
    })

    it('Renders a picture with webp source when provided', () => {
        const wrapper = shallowMount(ResponsiveImage, {
            propsData: {
                src: 'test.jpg',
                webp: 'test.webp',
                alt: 'Test image',
                height: 100,
                width: 100
            }
        })
        expect(wrapper.find('picture source[srcset="test.webp"]').element).toBeTruthy()
    })
})
