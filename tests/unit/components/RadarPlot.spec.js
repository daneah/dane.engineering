import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from "vitest"

import RadarPlot from '@/components/RadarPlot/RadarPlot.vue'


describe('RadarPlot', () => {
    it('Renders an SVG container', () => {
        const wrapper = shallowMount(RadarPlot, {
            propsData: {
                characteristics: []
            }
        })
        expect(wrapper.find('div.svg-container').element).toBeTruthy()
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
        expect(wrapper.find('polygon').element).toBeTruthy()
    })
})
