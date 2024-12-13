import React, { useRef, useState } from "react";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu"
import classes from "./AccordionWithComponent.module.css"
import { Extrack } from "../../types/v2Types";

interface Props {
    title: string;
    children: React.ReactNode;
    extrack: Extrack;
    selectedValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AccordionWithComponent = (props: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const accordionContent = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setIsOpen(preState => !preState)
    }

    const containerClasses = `
        ${classes.initial + " "}
        ${isOpen? classes.open : ""}
    `.trim()

    return (
        <section className={classes.container}>
            <div className={classes.titleArea} onClick={handleClick}>
                <input 
                    type="radio" 
                    name="trip-theme" 
                    value={props.extrack.theme}
                    checked={props.selectedValue === props.extrack.theme}
                    onChange={props.onChange}/>
                <h3>{props.title + props.extrack.theme}</h3>
                {isOpen? <LuMinusCircle size={"20px"}/> :<LuPlusCircle size={"20px"}/>}
            </div>
            <ul className={classes.list}>
                <li className={classes.listItem}>概要</li>
                <li className={classes.listItem}>食事: {props.extrack.eatingSpot.spotName} </li>
                <li className={classes.listItem}>ホテル：{props.extrack.hotelSpot.spotName}</li>
                <li className={classes.listItem}>おすすめする観光スポット：{props.extrack.recommendSpot.spotName}</li>
            </ul>
            <div ref={accordionContent} className={containerClasses}>
                <div className={classes.hidden}>
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default AccordionWithComponent
