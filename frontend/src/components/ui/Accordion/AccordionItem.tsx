import React, { useState } from "react";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu"
import classes from "./AccordionItem.module.css"

interface Props {
    categoryName: string;
    children: React.ReactNode
}

const AccordionItem = (props: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => {
        setIsOpen(preState => !preState)
    }

    return (
        <section className={classes.container}>
            <div className={classes.titleArea} onClick={handleClick}>
                <h4>{props.categoryName}</h4>
                {isOpen? <LuMinusCircle size={"20px"}/> :<LuPlusCircle size={"20px"}/>}
            </div>
            <div className={classes.initial + " " + (isOpen ? classes.open: "")}>
                {isOpen? props.children: null}
            </div>
        </section>
    )
}

export default AccordionItem
