import { mount, shallowMount } from '@vue/test-utils'

import Timeline from '@/components/Timeline'


describe('Timeline', () => {
    it('Renders an ordered list', () => {
        const wrapper = shallowMount(Timeline, {
            propsData: {
                entries: []
            }
        })
        expect(wrapper.contains('ol.timeline')).toBe(true)
    })

    it('Renders entries', () => {
        const wrapper = mount(Timeline, {
            propsData: {
                entries: [[
                    {
                        image: 'test.jpg',
                        year: 1970,
                        title: 'Something important',
                        subtitle: 'An important thing',
                        description: 'Why this thing is important'
                    }
                ]]
            },
        })
        const entry = wrapper.find('ol.timeline').find('li.timeline__group').find('ol.entries').find('li.entry')
        expect(entry.contains('img.entry__image[src="test.jpg"]')).toBe(true)
        expect(entry.find('div.entry__year').text()).toBe('1970')
        expect(entry.find('div.entry__title').text()).toBe('Something important')
        expect(entry.find('div.entry__subtitle').text()).toBe('An important thing')
        expect(entry.find('p.entry__description').text()).toBe('Why this thing is important')
    })
})
