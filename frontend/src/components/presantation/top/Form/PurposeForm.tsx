import React from "react"
import { Checkbox } from "../../../ui"
import { Purpose } from "../../../types/types"
import classes from "./PurposeForm.module.css"

interface PurposeList {
    purposes: Purpose[]
}

const PurposeForm = (props: PurposeList) => {
    return (
        <div className={classes.container}>
            <div>
                <h2 className={classes.heading}>目的（複数選択可）</h2>
            </div>
            <div className={classes.checkboxArea}>
                {props.purposes.map(purpose =>
                    <Checkbox key={purpose.id} style={{ width: "calc(100%/2)" }} {...purpose}/> 
                )}
            </div>
            <p className={classes.more}>
                <a href="#" className={classes.moreText}>
                    もっと見る
                </a>
            </p>
        </div>
    )
}

export default PurposeForm