import { Meta, StoryObj } from "@storybook/react";
import AccordionItem from "./AccordionItem";
import Checkbox from "../checkbox/Checkbox";
import { NonChecked } from "../checkbox/Checkbox.stories";

const meta = {
    title: "Accordion/Item",
    component: AccordionItem
} satisfies Meta<typeof AccordionItem>

export default meta

type Story = StoryObj<typeof AccordionItem>

export const Close: Story = {
    args: {
        categoryName: "アウトドア",
        active: false,
        children: <Checkbox id="sample1" labelName="バーベキュー" checked={false} value="バーベキュー" style={{}}/>
    }
} 

export const Open: Story = {
    args: {
        categoryName: "アウトドア",
        active: true,
        children: <Checkbox id="sample1" labelName="バーベキュー" checked={false} value="バーベキュー" style={{}}/>
    }
} 