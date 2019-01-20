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
        expect(wrapper.contains('img[src="test.jpg"][alt="Test image"]')).toBe(true)
    })
})
