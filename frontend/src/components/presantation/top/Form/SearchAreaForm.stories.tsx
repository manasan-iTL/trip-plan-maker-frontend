import { Meta, StoryObj } from "@storybook/react";
import SearchAreaForm from "./SearchAreaForm";

const meta = {
    title: "Search Box",
    component: SearchAreaForm
} satisfies Meta<typeof SearchAreaForm>

export default meta

type Story = StoryObj<typeof SearchAreaForm>

export const SearchSpot: Story = {
    args: {
        TabActive: "SPOT",
        spotInputId: "sample1",
        spotValue: "",
        spots: [
            {
                spotName: "東京スカイツリー",
                spotImgAlt: "東京スカイツリー",
                spotImgSrc: "https://www.tokyo-skytree.jp/img/lighting/db7bb7802658fefbdcae4ca407cefd4632233320221406389.png"
            }
        ],
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

export const SearchArea: Story = {
    args: {
        TabActive: "AREA",
        spotInputId: "sample1",
        spotValue: "",
        spots: [
            {
                spotName: "東京スカイツリー",
                spotImgAlt: "東京スカイツリー",
                spotImgSrc: "https://www.tokyo-skytree.jp/img/lighting/db7bb7802658fefbdcae4ca407cefd4632233320221406389.png"
            }
        ],
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