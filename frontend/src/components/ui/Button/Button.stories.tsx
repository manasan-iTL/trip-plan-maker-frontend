import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
    title: "Button",
    component: Button
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        children: "追加",
        buttonStyles: {width: "80%"}
    }
}