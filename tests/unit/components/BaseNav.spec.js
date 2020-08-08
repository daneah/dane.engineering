import { mount, shallowMount } from '@vue/test-utils'

import BaseNav from '@/components/BaseNav'


describe('BaseNav', () => {
    it('Renders the specified links', () => {
        const wrapper = mount(BaseNav, {
            propsData: {
                links: [
                    {'to': 'https://biz.com', 'external': true, 'text': 'Big Biz'},
                    {'to': 'https://biz.org', 'external': true, 'text': 'NPO Biz'},
                ]
            },
        })
        let bigBizLink = wrapper.find('a[href="https://biz.com"]')
        expect(bigBizLink.text()).toBe('Big Biz')

        let npoBizLink = wrapper.find('a[href="https://biz.org"]')
        expect(npoBizLink.text()).toBe('NPO Biz')
    })

    it('Renders an inactive link for the current page', () => {
        const $route = {
            path: '/foo',
            name: 'foo',
        }
        const wrapper = mount(BaseNav, {
            propsData: {
                links: [
                    {'to': 'foo', 'text': 'Big Biz'},
                ]
            },
            mocks: {
                $route
            }
        })
        expect(wrapper.find('a[href="/foo"]').element).toBeFalsy()
    })
})
