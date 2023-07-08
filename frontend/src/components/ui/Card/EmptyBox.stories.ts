import { Meta, StoryObj } from "@storybook/react";
import EmptyBox from "./EmptyBox";

const meta = {
    title: "Box",
    component: EmptyBox
} satisfies Meta<typeof EmptyBox>

export default meta

type Story = StoryObj<typeof EmptyBox>

export const Default: Story = {
    args: {
        text: "１つ以上は選択してください",
        iconNumber: 1,
        style: {
            width: "270px"
        }
    }
}