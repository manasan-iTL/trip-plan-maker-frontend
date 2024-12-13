import React, { ChangeEvent, ChangeEventHandler, ReactHTMLElement } from "react"
import styles from "./DateInput.module.css"

interface Props {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    labelName: string,
    id: string
}


const DateInput: React.FC<Props> = ({ value, onChange, labelName, id }) => {
    return (
        <div className={styles.container}>
            <dt>
                <label htmlFor={id} className={styles.labelText}>
                    { labelName }
                </label>
            </dt>
            <dd className={styles.inputArea}>
                <input 
                    type="date" 
                    value={value}
                    onChange={(e) => onChange(e)}
                    id={id}
                    className={styles.input}
                />
            </dd>
        </div>
        
    )
}

export default DateInput