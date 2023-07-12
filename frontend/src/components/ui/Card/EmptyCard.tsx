import React from "react";
import classes from "./EmptyCard.module.css"

interface Props {
    text: string;
    iconNumber: number;
    style: React.CSSProperties
}

const EmptyCard = (props: Props) => {
    return (
        <div className={classes.box} style={props.style}>
            <div className={classes.numberIcon}>
                <span className={classes.number}>{String(props.iconNumber)}</span>
            </div>
            <p className={classes.text}>{props.text}</p>
        </div>
    )
}

export default EmptyCard