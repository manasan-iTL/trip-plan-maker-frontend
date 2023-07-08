import React from "react";
import classes from "./EmptyBox.module.css"

interface Props {
    text: string;
    iconNumber: number;
    style: React.CSSProperties
}

const EmptyBox = (props: Props) => {
    return (
        <div className={classes.box} style={props.style}>
            <div className={classes.numberIcon}>
                <span className={classes.number}>{String(props.iconNumber)}</span>
            </div>
            <p className={classes.text}>{props.text}</p>
        </div>
    )
}

export default EmptyBox