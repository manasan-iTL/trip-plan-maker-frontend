import React from "react"
import classes from "./Tab.module.css"

interface Props {
    styles: React.CSSProperties;
    text: string;
    active: boolean;
}

const Tab = (props: Props) => {

    const containerClasses = props.active? `${classes.container} ${classes.active}` 
                                          : `${classes.container} ${classes.disactive}`

    return (
        <div className={containerClasses} style={props.styles}>
            <button className={classes.button}>
                { props.text }
            </button>
        </div>
    )
}

export default Tab