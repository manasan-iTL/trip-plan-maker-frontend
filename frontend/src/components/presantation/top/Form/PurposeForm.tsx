import React from "react"
import { Checkbox } from "../../../ui"
import classes from "./PurposeForm.module.css"
import { PurposeItem } from "../../../types/v2Types";

interface PurposeList {
    purposes: PurposeItem[];
    onChange: (value: string) => void;
}

const PurposeForm = (props: PurposeList) => {
    return (
        <div className={classes.container}>
            <div>
                <h2 className={classes.heading}>目的（複数選択可）</h2>
            </div>
            <div className={classes.checkboxArea}>
                {props.purposes.map(purpose =>
                    <Checkbox 
                        {...purpose}
                        key={purpose.id} 
                        style={{ width: "calc(100%/2)" }} 
                        labelName={purpose.label}
                        onChange={() => props.onChange(purpose.value)}
                    /> 
                )}
            </div>
        </div>
    )
}

export default PurposeForm