import { mount, shallowMount } from '@vue/test-utils'
import { describe, it, expect } from "vitest"

import Timeline from '@/components/TimelineEntryList.vue'


describe('Timeline', () => {
    it('Renders an ordered list', () => {
        const wrapper = shallowMount(Timeline, {
            propsData: {
                entries: []
            }
        })
        expect(wrapper.find('ol.timeline').element).toBeTruthy()
    })

    it('Renders entries', () => {
        const wrapper = mount(Timeline, {
            propsData: {
                entries: [[
                    {
                        image: 'test.jpg',
                        years: [1970],
                        title: 'Something important',
                        subtitle: 'An important thing',
                        responsibilities: ['Why this thing is important'],
                    }
                ]]
            },
        })
        const entry = wrapper.find('.timeline').find('.timeline__group').find('.timeline__group__entry-list').find('.entry')
        expect(entry.find('.entry__image img[src="test.jpg"]').element).toBeTruthy()
        expect(entry.find('.entry__years').text()).toBe('1970')
        expect(entry.find('.entry__title').text()).toBe('Something important')
        expect(entry.find('.entry__subtitle').text()).toBe('An important thing')
        expect(entry.find('.entry__responsibilities').text()).toBe('Why this thing is important')
    })
})
