import React from "react"
import classes from "./Button.module.css"

interface Props {
    children: React.ReactNode;
    buttonStyles?: React.CSSProperties;
    containerStyles?: React.CSSProperties;
}

const Button = (props: Props) => {
    return (
        <div style={props.containerStyles}>
            <button 
                className={classes.Btn}
                style={props.buttonStyles} 
            >
                {props.children}
            </button>
        </div>
    )
}

export default Button