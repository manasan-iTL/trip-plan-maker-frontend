import { Meta, StoryObj } from "@storybook/react";
import SearchSpot from "./SearchSpot";

const meta = {
    title: "seach spot",
    component: SearchSpot
} satisfies Meta<typeof SearchSpot>

export default meta

type Story = StoryObj<typeof SearchSpot>

export const NoneSpot: Story = {
    args: {
        inputId: "sample1",
        inputValue: "",
        spots: []
    }
}

export const OneSpot: Story = {
    args: {
        inputId: "sample1",
        inputValue: "",
        spots: [
            {
                spotName: "東京スカイツリー",
                spotImgAlt: "東京スカイツリー",
                spotImgSrc: "https://www.tokyo-skytree.jp/img/lighting/db7bb7802658fefbdcae4ca407cefd4632233320221406389.png"
            }
        ]
    }
}

export const ManySpot: Story = {
    args: {
        inputId: "sample1",
        inputValue: "",
        spots: [
            {
                spotName: "東京スカイツリー",
                spotImgAlt: "東京スカイツリー",
                spotImgSrc: "https://www.tokyo-skytree.jp/img/lighting/db7bb7802658fefbdcae4ca407cefd4632233320221406389.png"
            },
            {
                spotName: "浅草寺",
                spotImgAlt: "浅草寺",
                spotImgSrc: "https://www.senso-ji.jp/images/guide/images/guide04_img01.jpg"
            }
        ]
    }
}