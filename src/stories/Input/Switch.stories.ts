import Switch__SvelteComponent_ from "../../lib/input/Switch.svelte";
import Date__SvelteComponent_ from "../../lib/input/Date.svelte";
import Number__SvelteComponent_ from "../../lib/input/Number.svelte";
import type { Meta, StoryObj } from "@storybook/svelte";

import { userEvent, within } from '@storybook/testing-library';

const meta = {
  title: "Input/Switch",
  component: Switch__SvelteComponent_,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean",description:'qsd' }
  },
  args: { checked: false }
} satisfies Meta<Switch__SvelteComponent_>

export default meta;

type Story = StoryObj<typeof Switch__SvelteComponent_>

export const Normal: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checked = canvas.getByLabelText('')
    await userEvent.click(checked)
  }
}