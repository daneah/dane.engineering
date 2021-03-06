import { shallowMount } from '@vue/test-utils'

import ResponsiveImage from '@/components/ResponsiveImage'


describe('ResponsiveImage', () => {
    it('Renders an image', () => {
        const wrapper = shallowMount(ResponsiveImage, {
            propsData: {
                src: 'test.jpg',
                alt: 'Test image'
            }
        })
        expect(wrapper.find('img[src="test.jpg"][alt="Test image"]').element).toBeTruthy()
    })

    it('Renders a picture with webp source when provided', () => {
        const wrapper = shallowMount(ResponsiveImage, {
            propsData: {
                src: 'test.jpg',
                webp: 'test.webp',
                alt: 'Test image'
            }
        })
        expect(wrapper.find('picture source[srcset="test.webp"]').element).toBeTruthy()
    })
})
