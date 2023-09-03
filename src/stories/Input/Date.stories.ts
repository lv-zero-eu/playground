import Date__SvelteComponent_ from "../../lib/input/Date.svelte";
import type { Meta, StoryObj } from "@storybook/svelte";

import { userEvent, within } from '@storybook/testing-library';

const meta = {
  title: "Input/Date",
  component: Date__SvelteComponent_,
  tags: ["autodocs"],
} satisfies Meta<Date__SvelteComponent_>

export default meta;

type Story = StoryObj<typeof Date__SvelteComponent_>

export const Normal: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checked = canvas.getByLabelText('')
    await userEvent.click(checked)
  }
}