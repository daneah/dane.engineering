import { shallowMount } from '@vue/test-utils';

import YouTubeEmbed from '@/components/YouTubeEmbed';


describe('YouTubeEmbed', () => {
    it('Renders an embed container', () => {
        const wrapper = shallowMount(YouTubeEmbed, {
            propsData: {
                videoId: 'foo'
            }
        })
        expect(wrapper.contains('div.embed-container')).toBe(true)
    })

    it('Renders a YouTube iframe', () => {
        const wrapper = shallowMount(YouTubeEmbed, {
            propsData: {
                videoId: 'foo'
            }
        })
        expect(wrapper.contains('iframe[src="https://www.youtube.com/embed/foo"]')).toBe(true)
    })
})
