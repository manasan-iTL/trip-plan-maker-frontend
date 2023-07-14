import { Meta, StoryObj } from "@storybook/react";
import TopTemplate from "./TopTemplate";

const meta = {
    title: "Presentation/Top",
    component: TopTemplate
} satisfies Meta<typeof TopTemplate>

export default meta

type Story = StoryObj<typeof TopTemplate>

export const NonSpots: Story = {
    args: {
        spots:[],
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
        ],
        tabActive: "SPOT",
        spotInputId: "sample1",
        spotValue: "",
        accordionItems: [
            { 
                titleName: "東北", 
                active: true,
                childItems: [
                    { id:"miyagi", value: "宮城", checked: true },
                    { id:"aomori", value: "青森", checked: false }
                ] 
            },
        ]
    }
}