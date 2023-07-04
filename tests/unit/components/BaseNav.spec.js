import { mount } from '@vue/test-utils'
import { useRouter, useRoute } from "vue-router";
import { beforeEach, describe, it, expect, vi } from "vitest"

import BaseNav from '@/components/BaseNav.vue'

vi.mock('vue-router')

describe('BaseNav', () => {
    useRouter.mockReturnValue({
        push: vi.fn(),
    })

    beforeEach(() => {
        useRouter().push.mockReset()
    })

    it('Renders an inactive link for the current page', () => {
        useRoute.mockReturnValue({
            path: '/foo',
            name: 'foo',
        })
        const wrapper = mount(BaseNav, {
            global: {
                stubs: ['router-link'],
            },
            propsData: {
                links: [
                    {'to': 'foo', 'text': 'The Foo'},
                ]
            },
        })

        const unlinkedNavItem = wrapper.find('span')
        expect(unlinkedNavItem.text()).toBe('The Foo')
    })
})
