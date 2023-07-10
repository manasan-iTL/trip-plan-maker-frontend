import { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";

const meta = {
    title: "Input",
    component: TextInput
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof TextInput>

export const Default: Story = {
    args: {
        value: "",
        iconSize: "20px"
    }
}