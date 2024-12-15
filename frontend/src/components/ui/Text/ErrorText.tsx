import React from "react"
import classes from "./ErrorText.module.css"

interface Props {
    text: string;
}

const ErrorText = (props: Props) => {

    return (
        <small className={classes.text}>
            {props.text}
        </small>
    )
}

export default ErrorText