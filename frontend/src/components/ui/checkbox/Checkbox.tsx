import React, { useState } from "react";
import classes from "./checkbox.module.css"

interface Props {
    id: string;
    labelName: string;
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
    style: React.CSSProperties;
};

const Checkbox = (props: Props) => {

    return (
        <div className={classes.checkboxArea} style={{...props.style}}>
            <input  type="checkbox" 
                    name={props.labelName} 
                    id= {props.id} 
                    value={props.value} 
                    checked={props.checked}
                    onChange={() => props.onChange(props.value)}
                    className={classes.checkbox}
            />
            <label className={classes.checkboxLabelText} htmlFor={props.id}>
                { props.labelName }
            </label>
        </div>
    )
}

export default Checkbox