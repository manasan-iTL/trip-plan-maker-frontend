import { Meta, StoryObj } from "@storybook/react";
import PurposeForm from "./PurposeForm";

const meta = {
    title: "2カラムチェックボックスエリア",
    component: PurposeForm,
} satisfies Meta<typeof PurposeForm>

export default meta

type Story = StoryObj<typeof PurposeForm>

export const Default: Story = {
    args: {
        purposes: [
            {
                id: "sample1",
                labelName: "温泉巡り",
                value: "温泉巡り",
                checked: false
            },
            {
                id: "sample2",
                labelName: "アウトドア",
                value: "アウトドア",
                checked: false
            },
            {
                id: "sample3",
                labelName: "食べ歩き",
                value: "食べ歩き",
                checked: false
            },
            {
                id: "sample4",
                labelName: "レジャー",
                value: "レジャー",
                checked: false
            },
        ]
    }
}