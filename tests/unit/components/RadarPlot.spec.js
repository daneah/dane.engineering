import { shallowMount } from '@vue/test-utils'

import RadarPlot from '@/components/RadarPlot'


describe('RadarPlot', () => {
    it('Renders an SVG container', () => {
        const wrapper = shallowMount(RadarPlot, {
            propsData: {
                characteristics: []
            }
        })
        expect(wrapper.contains('div.svg-container')).toBe(true)
    })

    it('Renders the specified number of levels', () => {
        const wrapper = shallowMount(RadarPlot, {
            propsData: {
                levels: 5,
                characteristics: []
            }
        })
        expect(wrapper.findAll('circle').length).toBe(5)
    })

    it('Renders the specified characteristics', () => {
        const wrapper = shallowMount(RadarPlot, {
            propsData: {
                levels: 5,
                characteristics: [
                    {
                        name: 'Strength',
                        score: 5
                    },
                    {
                        name: 'Agility',
                        score: 3,
                    }
                ]
            }
        })
        expect(wrapper.findAll('text').length).toBe(2)
        expect(wrapper.findAll('line').length).toBe(2)
    })

    it('Renders a polygon', () => {
        const wrapper = shallowMount(RadarPlot, {
            propsData: {
                levels: 5,
                characteristics: []
            }
        })
        expect(wrapper.contains('polygon')).toBe(true)
    })
})
