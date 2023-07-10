
import { Meta, StoryObj } from "@storybook/react";
import Tab from "./Tab";

const meta = {
    title: "Tab",
    component: Tab
} satisfies Meta<typeof Tab>

export default meta

type Story = StoryObj<typeof Tab>

export const Disactive: Story = {
    args: {
        styles: {
            width: "120px",
            height: "30px"
        },
        text: "検索から探す",
        active: false
    }
}

export const Active: Story = {
    args: {
        styles: {
            width: "120px",
            height: "30px"
        },
        text: "検索から探す",
        active: true
    }
}