import type { Meta, StoryObj } from "@storybook/svelte";

import Circle from "../../lib/progress/Circle.svelte";

const meta = {
  title: "Progress/Circle",
  component: Circle,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    foregroundColor: { control: "color" },

  },
  args: {
    size: 100,
    strokeWidth: 5,
    color: "rgb(161, 161, 161)",
    foregroundColor: "#0d0d0d",
    progress: 25,
    showProgress: true,
    inverted: false,
    title: "CPU",
  },
} satisfies Meta<Circle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Pie: Story = {
  args: {
    strokeWidth: 50,
    showProgress: false,
    title: "",
  },
};
