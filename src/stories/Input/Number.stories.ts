import Number__SvelteComponent_ from "../../lib/input/Number.svelte";
import type { Meta, StoryObj } from "@storybook/svelte";

import { userEvent, within } from '@storybook/testing-library';

const meta = {
  title: "Input/Number",
  component: Number__SvelteComponent_,
  tags: ["autodocs"],
  args: { max: 100, min: 0, value: 50 }
} satisfies Meta<Number__SvelteComponent_>

export default meta;

type Story = StoryObj<typeof Number__SvelteComponent_>

export const Normal: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checked = canvas.getByLabelText('')
    await userEvent.click(checked)
  }
}