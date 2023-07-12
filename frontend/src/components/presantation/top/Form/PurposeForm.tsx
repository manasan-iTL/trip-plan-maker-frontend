import React from "react"
import { Checkbox } from "../../../ui/index"
import { Purpose } from "../../../types/types"
import classes from "./PurposeForm.module.css"

interface PurposeList {
    purposes: Purpose[]
}

const PurposeForm = (props: PurposeList) => {
    return (
        <div className={classes.container}>
            {props.purposes.map(purpose =>
                <Checkbox key={purpose.id} style={{ width: "calc(100%/2)" }} {...purpose}/> 
            )}
        </div>
    )
}

export default PurposeForm