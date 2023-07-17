import React from "react";
import classes from "./NumberInput.module.css"

interface Props {
    labelName: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const NumberInput = (props: Props) => {
    return (
        <div className={classes.container}>
            <dt>
                <label htmlFor="" className={classes.labelText}>{props.labelName}</label>
            </dt>
            <dd className={classes.inputArea}>
                <input 
                    type="text" 
                    value={props.value} 
                    onChange={props.onChange} 
                    className={classes.input}
                />
            </dd>
        </div>
    )
}

export default NumberInput