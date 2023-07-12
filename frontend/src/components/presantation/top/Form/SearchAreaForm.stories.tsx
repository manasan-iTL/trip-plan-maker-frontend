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
        TabActive: "SPOT"
    }
}

export const SearchArea: Story = {
    args: {
        TabActive: "AREA"
    }
}