import type { Meta, StoryObj } from "@storybook/svelte";
import TopNav__SvelteComponent_ from "../../lib/nav/TopNav.svelte";
import type DropDown from "../../lib/nav/DropDown.svelte";

const meta = {
  title: "Nav/TopNav",
  component: TopNav__SvelteComponent_,
  tags: ["autodocs"],
} satisfies Meta<TopNav__SvelteComponent_>

export default meta
type Story = StoryObj<typeof TopNav__SvelteComponent_>

export const Normal: Story = {
};