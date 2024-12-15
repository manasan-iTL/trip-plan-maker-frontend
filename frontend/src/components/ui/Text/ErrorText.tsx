import React from "react"
import classes from "./ErrorText.module.css"

interface Props {
    text: string;
    fontSize?: number;
}

const ErrorText = (props: Props) => {

    return (
        <small className={classes.text} style={{fontSize: props.fontSize ? `${props.fontSize}px`: '14px'}}>
            {props.text}
        </small>
    )
}

export default ErrorText