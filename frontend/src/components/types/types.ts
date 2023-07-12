type Prefecture = {
    id: string;
    value: string;
    checked: boolean;
}

type Category = {
    id: string;
    value: string;
    checked: boolean
}

type AccordionChild = Prefecture | Category

export type TabActive = "SPOT" | "AREA"

export interface Purpose {
    id: string;
    labelName: string;
    checked: boolean;
    value: string;
}

export interface Accordion {
    titleName: string;
    active: boolean;
    childItems: AccordionChild[]
}