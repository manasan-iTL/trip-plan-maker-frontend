import { Meta, StoryObj } from "@storybook/react";
import TravelSpots from "./TravelSpots";

const meta = {
    title: "places to want to go",
    component: TravelSpots
} satisfies Meta<typeof TravelSpots>

export default meta

type Story = StoryObj<typeof TravelSpots>

export const NonSpot: Story = {
    args: {
        spots: []
    }
}

export const OneSpot: Story = {
    args: {
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