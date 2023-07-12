import { Meta, StoryObj } from "@storybook/react";
import EmptyCard from "./EmptyCard";

const meta = {
    title: "Card/EmptyCard",
    component: EmptyCard
} satisfies Meta<typeof EmptyCard>

export default meta

type Story = StoryObj<typeof EmptyCard>

export const Default: Story = {
    args: {
        text: "１つ以上は選択してください",
        iconNumber: 1,
        style: {
            width: "270px"
        }
    }
}