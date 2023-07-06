import React from "react";
import classes from "./checkbox.module.css"

interface Props {
    id: string;
    labelName: string;
    checked: boolean;
    value: string;
    style: React.CSSProperties
};

const Checkbox = (props: Props) => {
    return (
        <div className={classes.checkboxArea} style={{...props.style}}>
            <input  type="checkbox" 
                    name={props.labelName} 
                    id= {props.id} 
                    value={props.value} 
                    checked={props.checked}
                    className={classes.checkbox}
            />
            <label className={classes.checkboxLabelText} htmlFor={props.id}>
                { props.labelName }
            </label>
        </div>
    )
}

export default Checkbox