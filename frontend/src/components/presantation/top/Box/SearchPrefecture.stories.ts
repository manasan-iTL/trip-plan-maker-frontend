import { Meta, StoryObj } from "@storybook/react";
import SearchPrefecture from "./SearchPrefecture";

const meta = {
    title: "Search Prefecture Box",
    component: SearchPrefecture
} satisfies Meta<typeof SearchPrefecture>

export default meta

type Story = StoryObj<typeof SearchPrefecture>

export const NoneItems: Story = {
    args: {
        accordionItems: []
    }
}

export const onePrefectureItem: Story = {
    args: {
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

export const manyPrefectureItem: Story = {
    args: {
        accordionItems: [
            { 
                titleName: "東北", 
                active: false,
                childItems: [
                    { id:"miyagi", value: "宮城", checked: true },
                    { id:"aomori", value: "青森", checked: false }
                ] 
            },
            { 
                titleName: "関東", 
                active: true,
                childItems: [
                    { id:"tokyo", value: "東京", checked: true },
                    { id:"saitama", value: "埼玉", checked: false }
                ] 
            },
            { 
                titleName: "中部", 
                active: true,
                childItems: [
                    { id:"yamanashi", value: "山梨", checked: true },
                    { id:"sizuoka", value: "静岡", checked: false }
                ] 
            },
            { 
                titleName: "近畿", 
                active: false,
                childItems: [
                    { id:"kyoto", value: "京都", checked: true },
                    { id:"oosaka", value: "大阪", checked: false }
                ] 
            },
        ]
    }
}