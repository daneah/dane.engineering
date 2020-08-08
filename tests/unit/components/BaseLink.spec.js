import { shallowMount } from '@vue/test-utils'

import BaseLink from '@/components/BaseLink'


describe('BaseLink', () => {
    it('Renders a link', () => {
        const wrapper = shallowMount(BaseLink, {
            propsData: {
                href: 'https://foo.com'
            }
        })
        expect(wrapper.find('a[href="https://foo.com"]').element).toBeTruthy()
    })

    it('Renders safe rel for external links', () => {
        const wrapper = shallowMount(BaseLink, {
            propsData: {
                href: 'https://foo.com',
                external: true
            }
        })
        expect(wrapper.find('a[target="_blank"][rel="noopener noindex nofollow"]').element).toBeTruthy()
    })

    it('Does not render a rel by default for internal links', () => {
        const wrapper = shallowMount(BaseLink, {
            propsData: {
                href: 'https://foo.com',
                external: false,
            }
        })
        const link = wrapper.find('a')
        expect(link.attributes('rel')).toBe(undefined)
    })

    it('Renders the specified rel', () => {
        const wrapper = shallowMount(BaseLink, {
            propsData: {
                href: 'https://foo.com',
                rel: 'some-rel-value'
            }
        })
        expect(wrapper.find('a[rel="some-rel-value"]').element).toBeTruthy()
    })

    it('Renders a clean link', () => {
        const wrapper = shallowMount(BaseLink, {
            propsData: {
                href: 'https://foo.com',
                clean: true
            }
        })
        expect(wrapper.find('.link--clean').element).toBeTruthy()
    })

    it('Renders the specified content', () => {
        const wrapper = shallowMount(BaseLink, {
            propsData: {
                href: 'https://foo.com',
            },
            slots: {
                default: 'A site about foo'
            }
        })
        const anchor = wrapper.find('a')
        expect(anchor.text()).toBe('A site about foo')
    })
})
