import React from "react";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu"
import classes from "./AccordionItem.module.css"

interface Props {
    categoryName: string;
    active: boolean;
    children: React.ReactNode
}

const AccordionItem = (props: Props) => {
    return (
        <section className={classes.container}>
            <div className={classes.titleArea}>
                <h4>{props.categoryName}</h4>
                {props.active? <LuMinusCircle size={"20px"}/> :<LuPlusCircle size={"20px"}/>}
            </div>
            {props.active? props.children: null}
        </section>
    )
}

export default AccordionItem
