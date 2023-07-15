import { Meta, StoryObj } from "@storybook/react";
import SpotCard from "./SpotCard";

const meta = {
    title: "Card/SpotCard",
    component: SpotCard
} satisfies Meta<typeof SpotCard>

export default meta

type Story = StoryObj<typeof SpotCard>

export const Default: Story = {
    args: {
        spotName: "東京スカイツリー",
        spotImgAlt: "東京スカイツリー",
        spotImgSrc: "https://www.tokyo-skytree.jp/img/lighting/db7bb7802658fefbdcae4ca407cefd4632233320221406389.png",
        imgSize: { height: "70px" }
    }
}