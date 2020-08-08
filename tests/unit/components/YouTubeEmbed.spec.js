import { shallowMount } from '@vue/test-utils';

import YouTubeEmbed from '@/components/YouTubeEmbed';


describe('YouTubeEmbed', () => {
    it('Renders an embed container', () => {
        const wrapper = shallowMount(YouTubeEmbed, {
            propsData: {
                videoId: 'foo'
            }
        })
        expect(wrapper.find('div.embed-container').element).toBeTruthy()
    })

    it('Renders a YouTube iframe', () => {
        const wrapper = shallowMount(YouTubeEmbed, {
            propsData: {
                videoId: 'foo'
            }
        })
        expect(wrapper.find('iframe[src="https://www.youtube.com/embed/foo"]').element).toBeTruthy()
    })
})
