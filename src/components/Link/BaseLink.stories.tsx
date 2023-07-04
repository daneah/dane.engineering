import type { Meta, StoryObj } from '@storybook/vue3'

import BaseLink from '@/components/Link/BaseLink.vue'
import type { LinkProps } from '@/components/Link/BaseLink.vue'

const meta: Meta<typeof BaseLink> = {
  component: BaseLink
}

export default meta
type Story = StoryObj<typeof BaseLink>

export const Default: Story = {
  render: (args: LinkProps) => ({
    components: { BaseLink },
    setup() {
      return { args }
    },
    template:
      '<BaseLink :href="args.href" :external="args.external" :clean="args.clean" :rel="args.rel">Link</BaseLink>'
  }),
  args: {
    href: 'https://google.com',
    external: true,
    clean: false,
    rel: ''
  }
}
