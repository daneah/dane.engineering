import type { Meta, StoryObj } from '@storybook/vue3'

import BaseButton from '@/components/Button/BaseButton.vue'
import type { ButtonProps } from '@/components/Button/BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  argTypes: {
    onClick: { action: 'clicked' },
    type: {
      options: ['button', 'submit', 'reset'],
      control: {
        type: 'radio'
      }
    },
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'radio'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof BaseButton>

export const Default: Story = {
  render: (args: ButtonProps) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton :type="args.type" :variant="args.variant">Button</BaseButton>'
  }),
  args: {
    type: 'button',
    variant: 'primary'
  }
}
