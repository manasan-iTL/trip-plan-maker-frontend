import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta = {
    title: "Checkbox",
    component: Checkbox,
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof Checkbox>

export const NonChecked: Story = {
    args: {
        id: "sample",
        labelName: "温泉巡り",
        checked: false,
        value: "温泉巡り"
    }
}

export const Checked: Story = {
    args: {
        id: "sample",
        labelName: "温泉巡り",
        checked: true,
        value: "温泉巡り"
    }
}